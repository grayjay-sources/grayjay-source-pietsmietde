// region js
/* class Url {
	constructor(url) {
		if (!url) throw new Error("URL cannot be empty");
		const [protocol, host] = url.split('://');
		if (!protocol || !host) throw new Error("Invalid URL format");
		this.protocol = protocol;
		this.host = host;
		const [domain, port] = host.split(':');
		this.domain = domain;
		this.port = port ? parseInt(port) : null;
		let [path, queryString] = url.substring(url.indexOf('?') + 1).split('#');
		if (queryString.includes('#')) {
			[queryString, this.fragment] = queryString.split('#');
		}
		this.path = path;
		this.queryString = queryString;
		this.fragment = this.fragment || '';
	}
	toString() {
		return `${this.protocol}://${this.host}${this.path}?${this.queryString}#${this.fragment}`;
	}
	setQuery(key, value) {
		const regex = new RegExp(`\\?[^#]*${key}=([^&]*)`);
		const match = this.queryString.match(regex);
		if (match) {
			this.queryString = this.queryString.replace(regex, `?${key}=${encodeURIComponent(value)}`);
		} else {
			this.queryString += `&${key}=${encodeURIComponent(value)}`;
		}
	}
	addQueryParam(key, value) {
		this.queryString += `&${key}=${encodeURIComponent(value)}`;
	}
} */
// endregion js

// region PSProxy
class PSProxy {
	
	headers = {
		'Accept': 'application/json'
	};

	types = {
		URLProxyResponse: new JSONParser([
			{ json: "id", js: "id", typ: JSONParser.u(undefined, "") },
			{ json: "remoteId", js: "remoteId", typ: JSONParser.u(undefined, "") },
			{ json: "title", js: "title", typ: JSONParser.u(undefined, "") },
			{ json: "description", js: "description", typ: JSONParser.u(undefined, "") },
			{ json: "additionalInfo", js: "additionalInfo", typ: JSONParser.u(undefined, null) },
			{ json: "startDate", js: "startDate", typ: JSONParser.u(undefined, Date) },
			{ json: "imageUri", js: "imageUri", typ: JSONParser.u(undefined, "") },
			{ json: "href", js: "href", typ: JSONParser.u(undefined, "") },
			{ json: "secondaryHref", js: "secondaryHref", typ: JSONParser.u(undefined, "") },
			{ json: "duration", js: "duration", typ: JSONParser.u(undefined, 0) },
			{ json: "importedAt", js: "importedAt", typ: JSONParser.u(undefined, Date) },
			{ json: "importedFrom", js: "importedFrom", typ: JSONParser.u(undefined, "") },
			{ json: "type", js: "type", typ: JSONParser.u(undefined, "") },
		], "URLProxyResponse")
	}
}
//endregion PSProxy

//region JSON
class JSONParser {
	typeMap;
	typeName;
    constructor(typemap, typename) {
        this.typeMap = typemap;
		this.typeName = typename;
    }

    toJSONType(json) {
        return this.cast(JSON.parse(json), r(this.typeName));
    }

    ToJson(value) {
        return JSON.stringify(this.uncast(value, r(this.typeName)), null, 2);
    }

    invalidValue(typ, val, key, parent = '') {
        const prettyTyp = this.prettyTypeName(typ);
        const parentText = parent ? ` on ${parent}` : '';
        const keyText = key ? ` for key "${key}"` : '';
        throw new Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
    }

    prettyTypeName(typ) {
        if (Array.isArray(typ)) {
            if (typ.length === 2 && typ[0] === undefined) {
                return `an optional ${this.prettyTypeName(typ[1])}`;
            } else {
                return `one of [${typ.map(a => { return this.prettyTypeName(a); }).join(", ")}]`;
            }
        } else if (typeof typ === "object" && typ.literal !== undefined) {
            return typ.literal;
        } else {
            return typeof typ;
        }
    }

    jsonToJSProps(typ) {
        if (typ.jsonToJS === undefined) {
            const map = {};
            typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
            typ.jsonToJS = map;
        }
        return typ.jsonToJS;
    }

    jsToJSONProps(typ) {
        if (typ.jsToJSON === undefined) {
            const map = {};
            typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
            typ.jsToJSON = map;
        }
        return typ.jsToJSON;
    }

    transform(val, typ, getProps, key = '', parent = '') {
        function transformPrimitive(typ, val) {
            if (typeof typ === typeof val) return val;
            return this.invalidValue(typ, val, key, parent);
        }

        function transformUnion(typs, val) {
            const l = typs.length;
            for (let i = 0; i < l; i++) {
                const typ = typs[i];
                try {
                    return this.transform(val, typ, getProps);
                } catch (_) {}
            }
            return this.invalidValue(typs, val, key, parent);
        }

        function transformEnum(cases, val) {
            if (cases.indexOf(val) !== -1) return val;
            return this.invalidValue(cases.map(a => { return this.l(a); }), val, key, parent);
        }

        function transformArray(typ, val) {
            if (!Array.isArray(val)) return this.invalidValue(this.l("array"), val, key, parent);
            return val.map(el => this.transform(el, typ, getProps));
        }

        function transformDate(val) {
            if (val === null) {
                return null;
            }
            const d = new Date(val);
            if (isNaN(d.valueOf())) {
                return this.invalidValue(this.l("Date"), val, key, parent);
            }
            return d;
        }

        function transformObject(props, additional, val) {
            if (val === null || typeof val !== "object" || Array.isArray(val)) {
                return this.invalidValue(this.l(ref || "object"), val, key, parent);
            }
            const result = {};
            Object.getOwnPropertyNames(props).forEach(key => {
                const prop = props[key];
                const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
                result[prop.key] = this.transform(v, prop.typ, getProps, key, ref);
            });
            Object.getOwnPropertyNames(val).forEach(key => {
                if (!Object.prototype.hasOwnProperty.call(props, key)) {
                    result[key] = this.transform(val[key], additional, getProps, key, ref);
                }
            });
            return result;
        }

        if (typ === "any") return val;
        if (typ === null) {
            if (val === null) return val;
            return this.invalidValue(typ, val, key, parent);
        }
        if (typ === false) return this.invalidValue(typ, val, key, parent);
        let ref = undefined;
        while (typeof typ === "object" && typ.ref !== undefined) {
            ref = typ.ref;
            typ = this.typeMap[ref];
        }
        if (Array.isArray(typ)) return this.transformEnum(typ, val);
        if (typeof typ === "object") {
            return typ.hasOwnProperty("unionMembers") ? this.transformUnion(typ.unionMembers, val)
                : typ.hasOwnProperty("arrayItems")    ? this.transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? this.transformObject(getProps(typ), typ.additional, val)
                : this.invalidValue(typ, val, key, parent);
        }
        if (typ === Date && typeof val !== "number") return this.transformDate(val);
        return this.transformPrimitive(typ, val);
    }

    cast(val, typ) {
        return this.transform(val, typ, this.jsonToJSProps);
    }

    uncast(val, typ) {
        return this.transform(val, typ, this.jsToJSONProps);
    }

    l(typ) {
        return { literal: typ };
    }

    a(typ) {
        return { arrayItems: typ };
    }

    u(...typs) {
        return { unionMembers: typs };
    }

    o(props, additional) {
        return { props, additional };
    }

    m(additional) {
        return { props: [], additional };
    }

    r(name) {
        return { ref: name };
    }
}
//endregion JSON
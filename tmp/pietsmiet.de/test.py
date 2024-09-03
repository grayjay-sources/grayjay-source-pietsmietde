import os, json, re
from typing import Any
from copy import deepcopy

BASE_PATH = "."
EXT = ".har"
_EXITCODE = 0

def merge_dicts(dict1, dict2):
    """Recursively merge two dictionaries."""
    if not isinstance(dict1, dict) or not isinstance(dict2, dict):
        return dict2
    for key in dict2:
        if key in dict1:
            dict1[key] = merge_dicts(dict1[key], dict2[key])
        else:
            dict1[key] = dict2[key]
    return dict1

def recursive_dict_traversal(nested_dict: dict[str, Any], current_path=''):
    for key, value in nested_dict.items():
        full_path = f"{current_path}.{key}" if current_path else key
        if isinstance(value, dict):
            if "example" in value.keys():
                example = value["example"]
                if isinstance(example, dict) or isinstance(example, list): continue
                try:
                    example = json.loads(example)
                    
                except Exception as ex: print("Failed to json parse", value["example"])
                # print(f"{full_path}: {value}")
            recursive_dict_traversal(value, full_path)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = json.load(f)
    # new_content = deepcopy(content)
    # new_content["paths"] = []
    # content["components"]["schemas"] = dict(sorted(content["components"]["schemas"].items()))
    # for path, entry in content["paths"].items():
    #     print(path)
    #     # if isinstance(entry, list): continue
    #     for method_str, method in entry.items():
    #         if not method or isinstance(method, list): continue
    #         splitpath = [i for i in path.split('/') if i]
    #         if not len(splitpath): continue
    #         method["tags"] = [splitpath[0]] # [i for i in path.split('/') if i and not any(not c.isalnum() for c in i)][0]
    #         for code, response in method["responses"].items():
    #             for key in ['cf-cache-status','cf-ray','nel']:
    #                 if key in response["headers"].keys():
    #                     del response["headers"][key]
            # new_content["log"]["entries"].append(entry)
    recursive_dict_traversal(content)
    with open("tmp/pietsmiet.de/modded.json", 'w') as f:  # Write the modified content back to the file
        json.dump(content, f, indent=4)
        print(f"\nModified file: {file_path}")

def process_files_recursively(directory: str, ext: str):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(ext):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")
                try: process_file(file_path)
                except Exception as ex:
                    _EXITCODE = 1
                    print(f"Error parsing {file_path}: {ex}")


if __name__ == "__main__":
    process_file("tmp/pietsmiet.de/openapi.json")
    # process_files_recursively(BASE_PATH, EXT)
    exit(_EXITCODE)

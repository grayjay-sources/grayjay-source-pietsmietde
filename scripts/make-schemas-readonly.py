import os, json, re
from typing import Any

BASE_PATH = "schemas/"
EXT = ".json"
_EXITCODE = 0

def recursive_dict_traversal(nested_dict: dict[str, Any], current_path=''):
    for key, value in nested_dict.items():
        full_path = f"{current_path}.{key}" if current_path else key
        if isinstance(value, dict):
            if "type" in value.keys() and not key == "properties":
                value["readOnly"] = True
                # print(f"{full_path}: {value}")
            recursive_dict_traversal(value, full_path)

def process_files_recursively(directory: str, ext: str):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(ext):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")
                try:
                    with open(file_path, 'r') as f:
                        content = json.load(f)
                    recursive_dict_traversal(content)
                    with open(file_path, 'w') as f: # Write the modified content back to the file
                        json.dump(content, f, indent=4)
                        print(f"\nModified file: {file_path}")
                except Exception as ex:
                    _EXITCODE = 1
                    print(f"Error parsing {file_path}: {ex}")

if __name__ == "__main__":
    process_files_recursively(BASE_PATH, EXT)
    exit(_EXITCODE)
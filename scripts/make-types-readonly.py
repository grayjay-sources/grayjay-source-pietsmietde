import os, json, re
from typing import Any

BASE_PATH = "src/responses/"
EXT = ".ts"
_EXITCODE = 0
pattern = r'(?:(\s*:)?\s*)(\w+)\s*:\s*(.+);'

def add_readonly_to_fields(text):
    def replacement(match):
        return f'\n\treadonly {match.group(2)}: {match.group(3)};'
    result = re.sub(pattern, replacement, text)
    return result

def process_files_recursively(directory: str, ext: str):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(ext):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")
                try:
                    with open(file_path, 'r') as f:
                        content = f.read()
                    content = add_readonly_to_fields(content)
                    with open(file_path, 'w') as f: # Write the modified content back to the file
                        f.write(content)
                        print(f"\nModified file: {file_path}")
                except Exception as ex:
                    _EXITCODE = 1
                    print(f"Error parsing {file_path}: {ex}")

if __name__ == "__main__":
    process_files_recursively(BASE_PATH, EXT)
    exit(_EXITCODE)

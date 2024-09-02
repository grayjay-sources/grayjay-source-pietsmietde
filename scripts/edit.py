import os, json, re
from typing import Any

BASE_PATH = "src/responses/"
EXT = ".ts"

def add_readonly_to_fields(text):
    pattern = r'(?:(\s*:)?\s*)(\w+)\s*:\s*(.+);'
    
    def replacement(match):
        return f'{match.group(1)}readonly {match.group(2)}: {match.group(3)};'
    
    result = re.sub(pattern, replacement, text)
    return result

# def recursive_dict_traversal(nested_dict: dict[str, Any], current_path=''):
#     for key, value in nested_dict.items():
#         full_path = f"{current_path}.{key}" if current_path else key
        
#         if isinstance(value, dict):
#             if "type" in value.keys() and not key == "properties":
#                 value["readOnly"] = True
#                 print(f"{full_path}: {value}")
            
#             recursive_dict_traversal(value, full_path)

def process_files_recursively(directory: str, ext: str):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(ext):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")
                
                try:
                    with open(file_path, 'r') as f:
                        content = f.read() # json.load(f)
                    
                    content = add_readonly_to_fields(content) # recursive_dict_traversal(content)
                    
                    # Write the modified content back to the file
                    with open(file_path, 'w') as f:
                        f.write(content) # json.dump(content, f_out, indent=4)
                        print(f"\nModified file: {file_path}")

                except json.JSONDecodeError:
                    print(f"Error parsing JSON in file: {file_path}")

if __name__ == "__main__":
    process_files_recursively(BASE_PATH, EXT)

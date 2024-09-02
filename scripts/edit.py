import os
import json
from typing import Any

BASE_PATH = "schemas/"

def recursive_dict_traversal(nested_dict: dict[str, Any], current_path=''):
    for key, value in nested_dict.items():
        full_path = f"{current_path}.{key}" if current_path else key
        
        if isinstance(value, dict):
            if "type" in value.keys():
                value["readOnly"] = True
                print(f"{full_path}: {value}")
            
            recursive_dict_traversal(value, full_path)

def process_json_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                print(f"Processing file: {file_path}")
                
                try:
                    with open(file_path, 'r') as f:
                        content = json.load(f)
                    
                    # Modify the content here
                    recursive_dict_traversal(content)
                    
                    # Write the modified content back to the file
                    with open(file_path, 'w') as f_out:
                        json.dump(content, f_out, indent=1)
                    
                    print(f"\nModified file: {file_path}")

                except json.JSONDecodeError:
                    print(f"Error parsing JSON in file: {file_path}")

if __name__ == "__main__":
    process_json_files(BASE_PATH)

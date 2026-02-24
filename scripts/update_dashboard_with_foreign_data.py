
import json
import os
import re
import subprocess
import sys

# Path to data.js
DATA_JS_PATH = os.path.join('dashboard', 'data.js')
FETCH_SCRIPT_PATH = os.path.join('scripts', 'fetch_foreign_investor_trends.py')

def get_foreign_data():
    """Runs the fetch script and returns JSON data."""
    print("Fetching foreign investor data...")
    try:
        # Run using the same python interpreter
        result = subprocess.run(
            [sys.executable, FETCH_SCRIPT_PATH, '--json'],
            capture_output=True,
            text=True,
            check=True
        )
        return json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error running fetch script: {e}")
        print(f"Stderr: {e.stderr}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        print(f"Output was: {result.stdout}")
        return None

def update_data_js(new_data):
    """Updates the foreignInvestorTrend field in the latest report in data.js."""
    try:
        with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find start of REPORTS_HISTORY array
        start_marker = 'const REPORTS_HISTORY = ['
        start_idx = content.find(start_marker)
        if start_idx == -1:
            print("Could not find REPORTS_HISTORY in data.js")
            return
            
        start_bracket_idx = start_idx + len('const REPORTS_HISTORY = ')
        # Ensure it points to '[' (it might have space)
        while content[start_bracket_idx].isspace():
            start_bracket_idx += 1
            
        if content[start_bracket_idx] != '[':
            print("Expected '[' after declaration")
            return

        # Find the matching closing bracket
        count = 0
        end_bracket_idx = -1
        in_string = False
        escape = False
        
        for i, char in enumerate(content[start_bracket_idx:], start=start_bracket_idx):
            if escape:
                escape = False
                continue
                
            if char == '\\':
                escape = True
                continue
                
            if char == '"':
                in_string = not in_string
                continue
            
            if not in_string:
                if char == '[':
                    count += 1
                elif char == ']':
                    count -= 1
                    if count == 0:
                        end_bracket_idx = i
                        break
        
        if end_bracket_idx == -1:
            print("Could not find matching closing bracket for REPORTS_HISTORY")
            return

        json_str = content[start_bracket_idx:end_bracket_idx+1]
        
        try:
            history = json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON: {e}")
            # Try to handle trailing comma if present (common in JS)
            # Remove trailing commas before ] or }
            cleaned_json_str = re.sub(r',\s*([\]}])', r'\1', json_str)
            try:
                history = json.loads(cleaned_json_str)
            except json.JSONDecodeError as e2:
                 print(f"Failed to parse even after cleaning: {e2}")
                 return

        # Update the first element (latest report)
        if history:
            print("Updating latest report...")
            # Ensure foreignInvestorTrend is updated or added
            history[0]['foreignInvestorTrend'] = new_data
            
            # Convert back to JSON string
            new_json_str = json.dumps(history, ensure_ascii=False, indent=4)
            
            # Replace in content
            new_content = content[:start_bracket_idx] + new_json_str + content[end_bracket_idx+1:]
            
            with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Successfully updated data.js")
        else:
            print("REPORTS_HISTORY is empty.")

    except Exception as e:
        print(f"Error updating data.js: {e}")

def main():
    data = get_foreign_data()
    if data:
        update_data_js(data)
    else:
        print("No data to update.")

if __name__ == "__main__":
    main()

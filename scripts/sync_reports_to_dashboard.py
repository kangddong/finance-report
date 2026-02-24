
import json
import os
import re

DATA_JS_PATH = os.path.join('dashboard', 'data.js')
REPORT_DIR = 'report'

def sync_reports():
    print("Starting sync of all reports...")
    
    # 1. Read all JSON files from report directory
    reports = []
    if not os.path.exists(REPORT_DIR):
        print(f"Report directory {REPORT_DIR} does not exist.")
        return

    files = [f for f in os.listdir(REPORT_DIR) if f.endswith('.json')]
    # Sort files by date (filename) descending to put latest first
    files.sort(reverse=True)
    
    for filename in files:
        filepath = os.path.join(REPORT_DIR, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                data = json.load(f)
                reports.append(data)
                print(f"Loaded {filename}")
        except Exception as e:
            print(f"Error loading {filename}: {e}")
            
    if not reports:
        print("No reports found.")
        return

    # 2. Read data.js
    try:
        with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 3. Find REPORTS_HISTORY
        start_marker = 'const REPORTS_HISTORY = ['
        start_idx = content.find(start_marker)
        
        if start_idx == -1:
            print("Could not find REPORTS_HISTORY in data.js")
            return
            
        # We need to preserve the structure after the array if any.
        # But actually, we just need to replace the ARRAY CONTENT.
        # Or easier: reconstruct the variable definition.
        
        # Determine where the existing array ends.
        # Use the counting braces logic again for safety.
        start_bracket_idx = start_idx + len('const REPORTS_HISTORY = ')
        while content[start_bracket_idx].isspace():
            start_bracket_idx += 1
            
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
            print("Could not find closing bracket.")
            return

        # 4. Generate new JSON string
        # We should try to preserve existing data in reports if it has fields NOT in the JSON files (like 'foreignInvestorTrend' we just added!)
        # Wait, if I overwrite from JSON files, I might LOSE the 'foreignInvestorTrend' data I just fetched, 
        # because the JSON files on disk (2026-02-13.json) DO NOT contain that field yet.
        # The 'foreignInvestorTrend' was injected into data.js directly.
        
        # CRITICAL: I must Merge the existing 'foreignInvestorTrend' data if it exists for that date in data.js
        
        # Parse existing data.js reports to cache extra fields
        try:
            old_json_str = content[start_bracket_idx:end_bracket_idx+1]
            # Fix trailing commas logic if needed...
            # A simple regex fix for trailing commas before ] or }
            cleaned_old_str = re.sub(r',\s*([\]}])', r'\1', old_json_str)
            old_reports = json.loads(cleaned_old_str)
            
            # Map date -> extra fields
            extra_data_map = {}
            for param in old_reports:
                date = param.get('date')
                if date:
                    # Store entire object to merge? Or just specific fields?
                    # Let's check for 'foreignInvestorTrend'
                    if 'foreignInvestorTrend' in param:
                        extra_data_map[date] = {'foreignInvestorTrend': param['foreignInvestorTrend']}
                        
        except Exception as e:
            print(f"Warning: Could not parse existing data.js to preserve extra fields: {e}")
            extra_data_map = {}

        # 5. Merge extra data back into new reports
        for rep in reports:
            date = rep.get('date')
            if date in extra_data_map:
                print(f"Restoring extra data for {date}")
                rep.update(extra_data_map[date])
        
        # 6. Write back
        new_json_str = json.dumps(reports, ensure_ascii=False, indent=4)
        new_content = content[:start_bracket_idx] + new_json_str + content[end_bracket_idx+1:]
        
        with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print("Successfully synced reports to data.js")

    except Exception as e:
        print(f"Error updating data.js: {e}")

if __name__ == "__main__":
    sync_reports()

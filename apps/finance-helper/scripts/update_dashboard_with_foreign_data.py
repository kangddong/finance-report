import json
import os
import re
import subprocess
import sys

DATA_JSON_PATH = os.path.join('dashboard', 'data.json')
FETCH_SCRIPT_PATH = os.path.join('scripts', 'fetch_kospi_trading_trends.py')

def get_foreign_data():
    """Runs the fetch script and returns JSON data."""
    print("Fetching KOSPI trading trend data...")
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
    """Updates the foreignInvestorTrend field in the latest report in data.json."""
    try:
        with open(DATA_JSON_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        history = data.get('REPORTS_HISTORY', [])

        # Update the first element (latest report)
        if history:
            print("Updating latest report...")
            # Ensure foreignInvestorTrend is updated or added
            history[0]['foreignInvestorTrend'] = new_data
            
            # Convert back to JSON string
            with open(DATA_JSON_PATH, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print("Successfully updated data.json")
        else:
            print("REPORTS_HISTORY is empty.")

    except Exception as e:
        print(f"Error updating data.json: {e}")

def main():
    data = get_foreign_data()
    if data:
        update_data_js(data)
    else:
        print("No data to update.")

if __name__ == "__main__":
    main()

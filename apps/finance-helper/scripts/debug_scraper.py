
import requests
from bs4 import BeautifulSoup

def debug_naver_ranking():
    url = "https://finance.naver.com/sise/sise_deal_rank.naver?investor_gubun=9000&sosok=01&type=buy"
    headers = {'User-Agent': 'Mozilla/5.0'}
    res = requests.get(url, headers=headers)
    print(f"Status Code: {res.status_code}")
    
    soup = BeautifulSoup(res.text, 'html.parser')
    
    tables = soup.find_all('table')
    print(f"Number of tables: {len(tables)}")
    
    for i, table in enumerate(tables):
        print(f"Table {i} classes: {table.get('class')}")
        rows = table.find_all('tr')
        if rows:
            print(f"  Row count: {len(rows)}")
            print(f"  First row: {rows[0].text.strip()[:100]}...")

debug_naver_ranking()

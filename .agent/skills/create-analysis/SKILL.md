---
name: create-analysis
description: 특정 종목이나 산업 테마에 대한 심층 분석 리포트(HTML)를 생성하고 대시보드와 연동합니다.
---

# Create Analysis Report

투자 아이디어, 산업 흐름, 종목 간 상관관계 등 심층적인 내용을 담은 상세 리포트 페이지를 생성합니다. 기존 대시보드의 디자인(`style.css`)을 상속받아 통일감 있는 UI를 제공합니다.

## When to use this skill

- 특정 종목의 매수/매도 논리를 길게 풀어서 정리하고 싶을 때
- 여러 종목이 얽힌 산업(예: 반도체, 2차전지 등)의 흐름을 정리하고 싶을 때 ("투자 시나리오")
- 대시보드의 짧은 코멘트(`reason`)만으로는 설명이 부족할 때

## How to use it

1. **분석 내용 정리**: 제목, 소제목, 본문 내용(마크다운 형식 권장)을 준비합니다.
2. **HTML 파일 생성**: `dashboard/analysis/` 폴더 내에 `{주제}.html` 파일을 생성합니다.
   - `../style.css`를 링크하여 디자인을 유지합니다.
   - 가독성을 위해 적절한 헤더(`<h2>`, `<h3>`), 리스트(`<ul>`), 강조(`<strong>`) 태그를 사용합니다.
3. **데이터 연동**: `dashboard/data.js`의 관련 종목 객체에 `reportPath` 속성을 추가하여 연결합니다.
   - 예: `"reportPath": "analysis/semiconductor-war.html"`
4. **확인**: 대시보드에서 해당 종목을 클릭하여 상세 페이지로 이동하는지 확인합니다.

## Template (HTML Structure)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>리포트 제목 | Premium Finance</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
    <style>
        /* 상세 페이지 전용 추가 스타일 (필요시) */
        .analysis-container { max-width: 800px; margin: 0 auto; padding: 2rem; }
        .analysis-content { background: var(--card-bg); backdrop-filter: blur(25px); border-radius: 24px; padding: 3rem; border: 1px solid var(--glass-border); }
        .logic-flow { display: flex; align-items: center; justify-content: space-between; margin: 2rem 0; flex-wrap: wrap; gap: 1rem; }
        .logic-step { background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 12px; text-align: center; flex: 1; min-width: 120px; border: 1px solid var(--glass-border); }
        .arrow { font-size: 1.5rem; color: var(--accent-blue); }
    </style>
</head>
<body>
    <div class="analysis-container">
        <header style="margin-bottom: 2rem;">
            <a href="../index.html" class="back-link">← 대시보드</a>
            <h1 style="margin-top: 1rem;">리포트 제목</h1>
            <p class="subtitle">작성일: YYYY-MM-DD | 테마: 핵심 키워드</p>
        </header>
        
        <main class="analysis-content">
            <!-- 본문 내용 -->
        </main>
    </div>
</body>
</html>
```

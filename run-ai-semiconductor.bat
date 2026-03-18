@echo off
setlocal

cd /d "%~dp0dashboard"

set "PORT=8000"
set "PAGE_URL=http://localhost:%PORT%/analysis/ai-semiconductor.html"

start "" "%PAGE_URL%"

where py >nul 2>nul
if %ERRORLEVEL%==0 (
    echo Starting local server at http://localhost:%PORT%/
    echo Opening %PAGE_URL%
    py -m http.server %PORT%
    goto :eof
)

where python >nul 2>nul
if %ERRORLEVEL%==0 (
    echo Starting local server at http://localhost:%PORT%/
    echo Opening %PAGE_URL%
    python -m http.server %PORT%
    goto :eof
)

echo Python was not found. Please install Python 3 and try again.
pause

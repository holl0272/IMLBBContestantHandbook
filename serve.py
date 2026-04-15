"""
Dev server for IML Handbook.
Reads PORT from environment (set by Claude Code preview runner).
Usage: python serve.py
"""
import os, http.server

port = int(os.environ.get('PORT', 8000))
os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f'Serving on http://localhost:{port}')
http.server.test(
    HandlerClass=http.server.SimpleHTTPRequestHandler,
    port=port,
    bind='localhost',
)

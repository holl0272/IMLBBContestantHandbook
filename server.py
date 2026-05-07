"""Simple dev server — serves the project at http://localhost:8766/"""
import os, http.server, socketserver

os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = 8766

class Handler(http.server.SimpleHTTPRequestHandler):
    """Serve files with Cache-Control: no-store so the browser never uses stale JS/data."""
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()
    def log_message(self, fmt, *args):
        pass  # suppress per-request console noise

class Server(socketserver.TCPServer):
    allow_reuse_address = True  # must be class attr, set before bind()

with Server(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}/")
    httpd.serve_forever()

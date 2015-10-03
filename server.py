import os
import SimpleHTTPServer
import SocketServer

# Read port selected by the cloud for our application
PORT = int(os.getenv('VCAP_APP_PORT', 8000))
# Use Simple Handler to serve all files in the current directory
Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
# Change current directory to avoid exposure of control files
os.chdir('static')

httpd = SocketServer.TCPServer(("", PORT), Handler)
try:
  print("Start serving at port %i" % PORT)
  httpd.serve_forever()
except KeyboardInterrupt:
  pass
httpd.server_close()


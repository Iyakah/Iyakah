const http = require("http");
const url = require("url");

//comment
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(8080);

url.parse("http://localhost:8080", true, true);

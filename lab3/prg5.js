import http from 'http';

const server = http.createServer((req, res) => {
    // req method -> GET, POST, PUT, DELETE, PATCH
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Hello Server</h1>");
    }
});

server.listen(5000, () => console.log("prg5 is running"));
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 80;
var url = require('url');
var path = require('path');
numofvisits = 0;
var file_content;

//var webPath = 'public';

var server = http.createServer(function (req, res) {
    let url_path = url.parse(req.url);
    console.log('path:'+url_path);
    let pathname = url_path.pathname;
    console.log('pathname:'+pathname);
    if (pathname === "/" || pathname === "/index.htm") {
        pathname = 'index.html';
		numofvisits+=1;
        console.log(numofvisits);
    }

    var filePath = path.join(__dirname,  pathname);  
    console.log('filePath:'+filePath);

    fs.readFile(filePath , function (err, content) {
        if (err) {
            console.log('Failed to read');
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();  
            return;
        }
        res.write(content);
        res.end();
    })
});

server.listen(port);
console.log('Server running at http://127.0.0.1:' + port);
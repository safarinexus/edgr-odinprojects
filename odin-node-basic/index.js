const express = require('express'); 
const app = express();
const path = require("path");
const PORT = 3000;


app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname, './'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    res.sendFile("/index.html", options, (err) => {
        if (err) { 
            console.log(err);
        } else { 
            console.log('Sent homepage');
        }
    })
})

app.get('/:name', function (req, res, next) {
    var options = {
        root: path.join(__dirname, './'),
        dotfiles: 'deny',
        headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
        }
    }
  
    var fileName = req.params.name + ".html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            res.status(404).sendFile(path.join(__dirname, './', '404.html'));
            console.log(err);
        } else {
            
        }
    })
})

app.listen(PORT, () => console.log(`Server started! Listening on port ${PORT}`));

/* node js without express
const { createServer } = require('node:http');
const url = require("url");
const fs = require("fs");

const hostname = '127.0.0.1'; 

const server = createServer((req, res) => {
    let q = url.parse(req.url, true).pathname; 
    console.log(q);
    let filename = "";
    if (q === "/about" || q === "/contact-me") { 
        filename = "." + q + ".html"; 
        fs.readFile(filename, (err, data) => {
            if (err) { 
                res.writeHead(500, {"Content-Type": "text/html"});
                return res.end('<h1>Internal Server Error</h1>');
            } 
            res.writeHead(200, {"Content-Type": "text/html"});
            return res.end(data);
        })
    } else if (q === "/") { 
        filename = "./index.html"; 
        fs.readFile(filename, (err, data) => {
            if (err) { 
                res.writeHead(500, {"Content-Type": "text/html"});
                return res.end('<h1>Internal Server Error</h1>');
            } 
            res.writeHead(200, {"Content-Type": "text/html"});
            return res.end(data);
        })
    } else { 
        filename = "./404.html";
        fs.readFile(filename, (err, data) => {
            if (err) { 
                res.writeHead(500, {"Content-Type": "text/html"});
                return res.end('<h1>Internal Server Error</h1>');
            }
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end(data);
        })
    }

});

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

*/

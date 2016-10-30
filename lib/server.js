const sander = require('sander');
const http = require('http');
const post = require('./post');
const URL = require('url');


// const get = require('./get');
// const put = require('./put');
const del = require('./delete');

var server = http.createServer((req, res) => {
    var url = URL.parse(req.url);
    var name = url.pathname.replace('/notes/', '');

        if (req.method == 'GET') {

        } else if (req.method == 'POST') {
            post(name, body, res);
        } else if (req.method == 'PUT') {

        } else if (req.method == 'DELETE') {
            del(name, res);
        } else {
            res.statusCode = 404;
        } 
     
    
        

});

module.exports = server;
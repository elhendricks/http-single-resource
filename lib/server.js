const sander = require('sander');
const http = require('http');
// const post = require('./post');
const URL = require('url');


// const get = require('./get');
// const put = require('./put');
const del = require('./delete');

var server = http.createServer((req, res) => {
    var url = req.url;
    var name = URL.parse(url).pathname.replace('/', '');
    
    if (req.method == 'GET') {

    } else if (req.method == 'POST') {
        sander.readdir('./notes')
        .then(files => {
            console.log('FILES: ', files);
            return files;
        })
        .catch(err => console.log(err));
     
    } else if (req.method == 'PUT') {

    } else if (req.method == 'DELETE') {
        del(name, res);
    } else {
        res.statusCode = 404;
    }
});

module.exports = server;
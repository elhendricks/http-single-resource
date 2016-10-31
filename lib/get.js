const sander = require('sander');

module.exports = function(name, res) {
    sander.readFile('notes/' + name + '.txt')
    .then(data => {
        console.log(data.toString());
        res.write(data.toString());
        res.end();
    })
    .catch(err => {
        console.log('ERROR!!!! No file here', err);
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end();
    });

};
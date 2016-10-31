const sander = require('sander');

module.exports = function(name, res) {
    console.log('NAME', name);
    sander.readdir('notes')
    .then(dir => {
        
        if (dir.indexOf(name +'.txt') !== -1) {
            console.log(name +'.txt')
            console.log(dir.indexOf(name +'.txt') !== -1);            
        } else {
            console.log('ERROR!!!! No file here');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end();
        }
    })
    .then( () => {
        return sander.readFile('notes/' + name + '.txt');
    })
    .then(data => {
        console.log(data.toString());
        res.write(data.toString());
        res.end();
    })
    .catch(err => {
        console.log('Error: ', err);  
    });

};
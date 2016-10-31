var sander = require('sander');

module.exports = function (name, res){
    sander.readdir('./notes')
    .then(files => {        
        if (files.indexOf(name + '.txt') !== -1) {
            var path = 'notes/' + name + '.txt';
            return path;
        }
    })
    .then(path => {
        sander.unlink(path);
    })
    .then(() => {
        res.write('stuff gone');
        res.end();
    })
    .catch(err => console.log(err));

};

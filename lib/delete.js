var sander = require('sander');

module.exports = function (name, res){
    sander.readdir('./notes')
    .then(files => {
        console.log(files, name);
        console.log(files.indexOf(name + '.txt') !== -1);

        if (files.indexOf(name + '.txt') !== -1) {
            var path = 'notes/' + name + '.txt';
            return path;
        }
    })
    .then(path => {
        console.log('I got before unlink')
        sander.unlink(path);
    })
    .then(() => {
        console.log('got to res.write');
        res.write('stuff gone');
        res.end();
    })
    .catch(err => console.log(err));

};

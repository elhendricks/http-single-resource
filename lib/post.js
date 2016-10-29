var sander = require('sander');

module.exports = function (name, body, res) {
    sander.writeFile('./notes', name + '.txt', body)
    .then(() => {
        res.write(name +'.txt saved.');
        res.end();
    })
    .catch(err => console.log(err)); 
};

var sander = require('sander');

module.exports = function (name, req, res) {
    var body = [];
    req.on('data', (data) => {
        body.push(data);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        return Promise.resolve(body);
    });

    sander.writeFile('./notes', name + '.txt', body)
    .then(() => {
        res.write(name +'.txt saved.');
        res.end();
    })
    .catch(err => console.log(err)); 
};

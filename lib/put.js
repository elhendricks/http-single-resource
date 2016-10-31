var sander = require('sander');

module.exports = function (name, req, res) {
    var body = [];
    new Promise ((resolve) => {
       
        req.on('data', (data) => {
            body.push(data);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body, 'after concat');   
            resolve(body);       
        });
    })
    .then( body => {
        sander.writeFile('notes', name + '.txt', body)
        .then(() => {
            res.write(name +'.txt saved.');
            res.end();
        });
    })
    .catch(err => console.log(err)); 
};

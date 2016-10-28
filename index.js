const server = require('./lib/server');
const port = 3000;

server.listen(3000, (err, req) => {
    if (err) console.log('ERR: ', err);
    else console.log('Server is listening on port: ', port);
});
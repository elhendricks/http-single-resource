const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../lib/server');
const assert = chai.assert;
const sander = require('sander');


describe('server.js', () => {
    var request = chai.request(server);

    before(done => {
        sander.writeFile('notes', 'stuff.txt', 'I\'m a little teapot')
        .then(() => {
            done();
        });
    });

    it('makes a post request', done => {
        request
        .post('/notes')
        .set('Content-Type', 'application/json')
        .send(`{ noteBody: 'hello world' }`)
        .end((err, res) => {
            
            assert.equal(0, 1);
            done();
        });
    });


    it('deletes a file', done => {
        request
        .del('/notes/stuff')
        .end((err, res) => {
            sander.readdir('./notes/')
            .then(files => {
                console.log('I got inside the test');
                assert(files.indexOf('stuff.txt' === -1));
                done();
            })
            .catch(err => {
                console.log('ERROR IN DEL: ', err);
                done(err);
            });
        });
    });
});
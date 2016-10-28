var sander = require('sander');

sander.readdir('./notes')
.then(files => {
    console.log('FILES: ', files);
})
.catch(err => console.log(err)); 
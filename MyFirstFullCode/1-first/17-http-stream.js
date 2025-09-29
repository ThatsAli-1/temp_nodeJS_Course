let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big1.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/big1.txt','utf8');
    fileStream.on('open', (result) => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=> {
        console.log(err);
    })
})
.listen(5000)
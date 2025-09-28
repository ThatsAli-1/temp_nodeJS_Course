const { readFile, writeFile } = require("fs");
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
  try{
    const data = await readFilePromise('./content/first.txt', 'utf8');
    const second = await readFilePromise('./content/second.txt', 'utf8');
    console.log(data)
    console.log(second)
  }
  catch(err){
    console.log(err)
  }
}
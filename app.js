const { readFile, writeFile } = require("fs").promises;
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
  try{
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
    console.log(first)
    console.log(second)
  }
  catch(err){
    console.log(err)
  }
}


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async() => {
//   try{
//     const data = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(data)
//     console.log(second)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

start()
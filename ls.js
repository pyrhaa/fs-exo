const readlineSync = require('readline-sync');
const fs = require('fs');

//invite de command prompt
const command = readlineSync.question('>> ');

/* Method 1

if (command === 'ls') {
  const ls = fs.readdirSync('./');
  ls.forEach((el) => {
    console.log(el);
  });
} else {
  console.log('ERROR: not a valid command');
}
*/

// ls est un array, pour concatener en string avec 2 espaces avec .join()
// fs.readdirSync: read a directory / listing a directory content. Returns an Array.

if (command === 'ls') {
  const ls = fs.readdirSync('./');
  console.log(ls.join('  '));
} else {
  console.log('ERROR: not a valid command');
}

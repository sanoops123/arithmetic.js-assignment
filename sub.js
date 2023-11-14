var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question('frst num: '));
let b = parseInt (readlineSync.question(' secnd no :'));
let c= a-b;

console.log(c);
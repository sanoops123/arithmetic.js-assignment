var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question(' enter a number:'));
let b = parseInt (readlineSync.question(' enter next:'));
let c= a%b;

console.log(c);
var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question('first no :'));
let b = parseInt (readlineSync.question(' second no :'));
let c= a+b;

console.log(c);
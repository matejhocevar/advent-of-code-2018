const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
frequency = input.reduce((acc, current) => acc + (+current), 0);
console.log(`Frequency is: ${frequency}`);
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const counter = str => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

let twos = 0;
let threes = 0;

for (let line of input) {
	const freqs = Object.values(counter(line));
	const uniques = [...new Set(freqs)].filter(n => n > 1);
	if (uniques.includes(2)) twos++;
	if (uniques.includes(3)) threes++;
}

console.log(`${twos} x ${threes} = ${twos * threes}`);
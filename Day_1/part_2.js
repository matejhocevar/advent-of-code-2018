const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
let array = input.map(el => +el);

let found = false;
let sum = 0;
let freqs = [0];

while(!found) {
	for(let el of array) {
		sum += el;
		if (freqs.includes(sum)) {
			console.log(sum);
			found = true;
			break;
		}

		freqs.push(sum);
	}
}
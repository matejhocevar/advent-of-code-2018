const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let canvas = [...Array(1000)].map(()=>Array(1000).fill(0));
const regex = /#([0-9]*) @ ([0-9]*),([0-9]*): ([0-9]*)x([0-9]*)/;

input.forEach(line => {
	const [_, id, x, y, w, h] = regex.exec(line);

	for(let i=x; i<parseInt(x)+parseInt(w); i++) {
		for(let j=y; j<parseInt(y)+parseInt(h); j++) {
			canvas[i][j] += 1;
		}
	}
});

let count = 0;
for(let i=0; i<canvas.length; i++) {
	for(let j=0; j<canvas[0].length; j++) {
		if (canvas[i][j] > 1) count++;
	}
}

console.log(count);
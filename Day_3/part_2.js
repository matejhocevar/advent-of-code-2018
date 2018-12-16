const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

let canvas = [...Array(1000)].map(()=>Array(1000).fill(null));
const regex = /#([0-9]*) @ ([0-9]*),([0-9]*): ([0-9]*)x([0-9]*)/;

let cuts = [];

input.forEach(line => {
	const [_, id, x, y, w, h] = regex.exec(line);

	let overlap = false;

	for(let i=x; i<parseInt(x)+parseInt(w); i++) {
		for(let j=y; j<parseInt(y)+parseInt(h); j++) {
			if (canvas[i][j] != null) {
				overlap = true;
				cuts = cuts.filter(id => id !== canvas[i][j]);
			} else {
				canvas[i][j] = id;
			}
		}
	}

	if (!overlap) {
		cuts.push(id);
	}
});

console.log(cuts);
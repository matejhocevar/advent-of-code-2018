const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

for (let id1 of input) {
	for (let id2 of input) {
		if (id1 !== id2) {
			try {
				let diffs = 0;
				for (let i=0; i<id1.length; i++) {
					if (id1[i] !== id2[i]) {
						diffs++;
						if (diffs > 1) throw Exception('Too many diffs found!');
					}
				}
				console.log('Found similar ids:');
				console.log(id1);
				console.log(id2);

				for (let i=0; i<id1.length; i++) {
					if (id1[i] !== id2[i]) {
						console.log(`Common: ${id1.slice(0, i) + id1.slice(i+1, id1.length)}`)
					}
				}
				process.exit(0);
			}
			catch (e) {
				continue;
			}			
		}
	}
}
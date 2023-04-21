export const fenFileName: { [name: string]: string } = {
	p: 'pd',
	P: 'pl',

	q: 'qd',
	Q: 'ql',

	k: 'kd',
	K: 'kl',

	n: 'nd',
	N: 'nl',

	b: 'bd',
	B: 'bl',

	r: 'rd',
	R: 'rl'
};

function createEmpty(): string[][] {
	const res: string[][] = [];
	for (let i = 0; i < 8; i++) {
		res.push([]);
		for (let k = 0; k < 8; k++) {
			res[i].push('');
		}
	}
	return res;
}

export function fenToPos(fen: string): string[][] {
	const res = createEmpty();
	const ranks = fen.split('/');

	ranks.forEach((str, i) => {
		let f = 0;
		for (let k = 0; k < str.length; k++) {
			const n = parseInt(str[k]);
			if (str[k] >= '1' && str[k] <= '8') {
				f += parseInt(str[k]);
			} else {
				res[i][f] = fenFileName[str[k]];
				f++;
			}
		}
	});
	return res;
}

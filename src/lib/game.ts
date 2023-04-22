import { writable } from 'svelte/store';
import { fenFileName } from './dicts';

const _game = {
	position: createEmpty(),
	turn: 'w'
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

function parseFEN(fen: string): typeof _game {
	const res = createEmpty();
	const fenMembers = fen.split(' ');

	//FEN[0] position
	const ranks = fenMembers[0].split('/');
	ranks.forEach((str, i) => {
		let f = 0;
		for (let k = 0; k < str.length; k++) {
			if (str[k] >= '1' && str[k] <= '8') {
				f += parseInt(str[k]);
			} else {
				res[i][f] = fenFileName[str[k]];
				f++;
			}
		}
	});
	_game.position = res;

	//TODO: parse the other stuff

	return _game;
}

function setTurn(p: string | undefined): typeof _game {
	if (p) _game.turn = p;
	else _game.turn = _game.turn === 'w' ? 'b' : 'w';
	return _game;
}

function newGame(): typeof _game {
	_game.position = createEmpty();
	_game.turn = 'w';
	return _game;
}

function createGame() {
	const { subscribe, set, update } = writable(_game);

	return {
		subscribe,
		parseFEN: (str: string) => update(() => parseFEN(str)),
		setTurn: (p: string) => update(() => setTurn(p)),
		reset: () => set(newGame())
	};
}

export const game = createGame();

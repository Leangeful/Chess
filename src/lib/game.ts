import { writable } from 'svelte/store';
import { fenFileName } from './dicts';

const _game = {
	position: createEmpty(),
	turn: 'w',
	wCanCastleK: false,
	wCanCastleQ: false,
	bCanCastleK: false,
	bCanCastleQ: false,
	enPassantTrgt: { x: -1, y: -1 },
	halfMoves: 0,
	fullMoves: 1
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
	const fenMembers = fen.split(' ');

	//FEN[0] position
	const res = createEmpty();
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

	//FEN[1] turn
	if (fenMembers[1]) _game.turn = fenMembers[1];
	else _game.turn = 'w';

	//FEN[2] castling
	_game.wCanCastleK = false;
	_game.wCanCastleQ = false;
	_game.bCanCastleK = false;
	_game.bCanCastleQ = false;

	if (fenMembers[2] && fenMembers[2] != '-') {
		for (let i = 0; i < fenMembers[2].length; i++) {
			if (fenMembers[2][i] === 'K') _game.wCanCastleK = true;
			if (fenMembers[2][i] === 'Q') _game.wCanCastleQ = true;
			if (fenMembers[2][i] === 'k') _game.bCanCastleK = true;
			if (fenMembers[2][i] === 'q') _game.bCanCastleQ = true;
		}
	}

	//FEN[3] en passant target
	if (!fenMembers[3] || fenMembers[3] === '-') {
		_game.enPassantTrgt = { x: -1, y: -1 };
	} else {
		_game.enPassantTrgt = {
			x: fenMembers[3].charCodeAt(0) - 97,
			y: 8 - parseInt(fenMembers[3][1])
		};
	}

	//FEN[4] halfmoves
	if (fenMembers[4]) _game.halfMoves = parseInt(fenMembers[4]);
	else _game.halfMoves = 0;

	//FEN[5] fullmoves
	if (fenMembers[5]) _game.fullMoves = parseInt(fenMembers[5]);
	else _game.fullMoves = 1;

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

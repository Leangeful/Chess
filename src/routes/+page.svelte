<script>
	import Board from '../lib/components/Board.svelte';

	import { game } from '$lib/game';

	let stdFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
	let testFEN = '4rr1k/pQpn2pp/3p1q2/8/8/2P5/PP3PPP/RN3RK1 w - - 1 16';
	let testFEN2 = '6k1/p3b2p/1p1pP3/2p3P1/1Pnp3B/P6P/3Q3K/8 w - - 0 38';
	let fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

	$: game.parseFEN(fen);
</script>

<div class="test">
	<h1>Chess</h1>
</div>

<div class="fen">
	<input type="text" bind:value={fen} />
</div>
<Board />

<style>
	input {
		width: 100%;
	}
</style>

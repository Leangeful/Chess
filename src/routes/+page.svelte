<script>
	import Board from '../lib/components/Board.svelte';

	import { game } from '$lib/game';
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

<div class="pos-info">
	<p>Turn: {$game.turn}</p>

	<p>White Castling King Side: {$game.wCanCastleK}</p>
	<p>White Castling Queen Side: {$game.wCanCastleQ}</p>
	<p>Black Castling King Side: {$game.bCanCastleK}</p>
	<p>Black Castling Queen Side: {$game.bCanCastleQ}</p>

	<p>
		En Passant Target: {$game.enPassantTrgt.x}
		{$game.enPassantTrgt.y}
	</p>

	<p>Halfmoves: {$game.halfMoves}</p>
	<p>Fullmoves: {$game.fullMoves}</p>
</div>

<style>
	input {
		width: 100%;
	}
</style>

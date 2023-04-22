<script lang="ts">
	import Piece from './Piece.svelte';

	export let file = 0;
	export let rank = 0;
	export let piece = '';

	let color = 'dark';

	//export let isHighlight = false;

	if ((file % 2 && rank % 2) || (!(file % 2) && !(rank % 2))) {
		color = 'light';
	}
</script>

<div class="square {color}">
	{#if piece}
		<Piece {piece} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		aspect-ratio: 1/1;
	}

	.light {
		background-color: var(--col-light);
		color: var(--col-dark);
	}
	.dark {
		background-color: var(--col-dark);
	}

	.coord-file {
		display: inline;
		position: relative;
		align-self: flex-end;
		justify-self: right;
		margin: 0.1em;
		margin-right: 0.3em;
		z-index: 1;
	}
	.coord-rank {
		display: inline;
		position: relative;
		align-self: flex-start;
		justify-self: left;
		margin: 0.1em;
		margin-left: 0.3em;
		z-index: 1;
	}
</style>

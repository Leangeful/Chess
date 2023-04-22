<script lang="ts">
	import Square from './Square.svelte';
	import { game } from '../game';
	export let files = 8;
	export let ranks = 8;
</script>

<div class="board">
	{#each Array(ranks) as _, rank}
		{#each Array(files) as _, file}
			<Square {rank} {file} piece={$game.position[rank][file]} />
		{/each}
	{/each}
</div>

<style>
	.board {
		display: grid;
		width: 80vmin;
		grid-template-columns: repeat(8, 1fr);
	}
</style>

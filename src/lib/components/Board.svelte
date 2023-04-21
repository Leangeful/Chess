<script lang="ts">
	import Square from './Square.svelte';
	export let files = 8;
	export let ranks = 8;
	export let position: string[][];
</script>

<div class="board">
	{#each Array(ranks) as _, rank}
		{#each Array(files) as _, file}
			<Square {rank} {file} piece={position[rank][file]} />
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

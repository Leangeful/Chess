<script lang="ts">
	export let piece = 'pl';
</script>

<img class="piece" alt={piece} src="/pieces/{piece}.png" />

<style>
	.piece {
		position: relative;
		cursor: grab;
		width: 100%;
		z-index: 2;
	}
</style>

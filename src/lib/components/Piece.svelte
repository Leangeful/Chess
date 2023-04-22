<script lang="ts">
	export let piece = 'pl';
</script>

<!-- FIXME: add the other images, the 404s are annoying -->
<img class="piece" alt={piece} src="/pieces/{piece}.png" />

<style>
	.piece {
		position: relative;
		cursor: grab;
		width: 100%;
		z-index: 2;
	}
</style>

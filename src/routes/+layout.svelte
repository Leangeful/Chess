<script lang="ts">
	import '../app.css';
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		display: grid;
		justify-content: center;
	}

	@media screen and (min-width: 678px) {
		.container {
			width: 50%;
		}
	}
</style>

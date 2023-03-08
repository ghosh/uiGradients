<script lang="ts">
	import Header from 'src/modules/Header/Header.svelte';
	import Canvas from 'src/modules/Canvas/Canvas.svelte';
	import Actionbar from 'src/modules/Actionbar/Actionbar.svelte';
</script>

<main>
	<Header />
	<Actionbar />
	<Canvas />
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 40px 20px 1fr;
		grid-template-areas:
			'header'
			'actionbar'
			'canvas';
	}
</style>

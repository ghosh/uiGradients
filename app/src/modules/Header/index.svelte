<script lang="ts">
	import Logo from 'src/svg/Logo.svelte';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 54px;
		width: 100%;
		max-width: calc(100vw - 24px);
		margin: auto;
		border-bottom: solid 1px blue;
	}

	.logo {
		width: 100px;
	}
</style>

<section class="wrapper flex">
	<p>menu</p>
	<p>favs</p>
</section>

<style lang="scss">
	.wrapper {
		margin: auto;
		grid-area: actionbar;
		width: calc(100vw - var(--sitePadding));
		height: 100%;
		justify-content: space-between;
	}

	p {
		font-size: 14px;
	}

	.flex {
		display: flex;
		align-items: top;
	}
</style>

<script lang="ts">
	import Logo from 'src/svg/Logo.svelte';
	import Github from 'src/svg/Github.svelte';
	import Facebook from 'src/svg/Facebook.svelte';
	import Twitter from 'src/svg/Twitter.svelte';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>

	<div class="socials">
		<div class="social facebook">
			<span class="icon-small">
				<Facebook />
			</span>
			<p>Share on Facebook</p>
		</div>

		<div class="social twitter">
			<span class="icon-small">
				<Twitter />
			</span>
			<p>Share on Twitter</p>
		</div>

		<div class="icon">
			<Github />
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 54px;
		padding: 0 24px;
		margin: auto;
		border-bottom: solid 1px blue;
	}

	.logo {
		width: 100px;
	}

	.icon {
		width: 24px;
	}

	.icon-small {
		width: 16px;
	}

	.socials {
		gap: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.social {
		gap: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px 12px;
		border-radius: 4px;
	}

	.facebook {
		background-color: #1877f2;
	}

	.twitter {
		background-color: #1da1f2;
	}

	p {
		margin: 0;
		padding: 0;
		font-size: 14px;
		margin-top: 2px;
	}
</style>

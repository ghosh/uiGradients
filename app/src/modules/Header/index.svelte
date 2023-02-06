<script lang="ts">
	import Logo from 'src/svg/Logo.svelte';
	import Github from 'src/svg/Github.svelte';
	import Twitter from 'src/svg/Twitter.svelte';
	import Facebook from 'src/svg/Facebook.svelte';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>

	<div class="socials">
		<button class="share share--facebook">
			<span class="icon--small">
				<Facebook />
			</span>
			<p>Share on Facebook</p>
		</button>

		<button class="share share--twitter">
			<span class="icon--small">
				<Twitter />
			</span>
			<p>Share on Twitter</p>
		</button>

		<div class="icon">
			<Github />
		</div>
	</div>
</header>

<style lang="scss">
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

		&--small {
			width: 12px;
		}
	}

	.socials {
		gap: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.share {
		all: unset;
		gap: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px 12px;
		border-radius: 4px;
		height: 24px;
		cursor: pointer;
		color: white;
		transition: transform 100ms ease-out;
		will-change: transform;

		&:hover {
			opacity: 0.8;
		}

		&:active {
			transform: scale(0.95);
		}

		&--facebook {
			background-color: #1877f2;
		}

		&--twitter {
			background-color: #1da1f2;
		}

		p {
			margin: 0;
			padding: 0;
			font-size: 12px;
			font-weight: 500;
			margin-top: 2px;
		}
	}
</style>

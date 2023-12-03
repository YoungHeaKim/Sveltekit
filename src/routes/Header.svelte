<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import AddICon from '$lib/icons/add.svg';
	import CloseICon from '$lib/icons/close.svg';
</script>

<header>
		<div class="AddButton">
			<a href="/new"><img src={AddICon} width="15px" height="15px" /> New Reservation</a>
		</div>
		<div class="Title">
			<p>{$page.url.pathname.startsWith('/new') ? 'New ' : $page.url.pathname.startsWith('/edit') ? 'edit': ''}Reservation</p>
		</div>
		<div class="closeButton">
			<a href="/sverdle"><img src={CloseICon} width="20px" height="20px"/></a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFF;
		height: 3rem;
		padding-block: 20px;
		position: relative;
	}

	div[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	.AddButton {
		box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		background-color: rgba(235, 235 , 235, 0.4);
		position: absolute;
		left: 20px;
	}

	.AddButton a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		line-height: 14px;
		height: 2rem;
		padding-inline: 10px;
	}

	.AddButton a img {
		margin-right: 5px;
	}

	.Title p {
		font-size: 20px;
	}

	.closeButton {
		position: absolute;
		right: 20px;
		display: flex;
		align-items: center;
	}
</style>

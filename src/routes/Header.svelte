<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import AddICon from '$lib/icons/add.svg';
	import CloseICon from '$lib/icons/close.svg';
	import BackICon from '$lib/icons/keyboard_backspace.svg';

	console.log('page: ',page.params);
</script>

<header>
		<div class="AddButton">
			<a href={$page.url.pathname === '/' ? "/new": '/'}>
				<img src={$page.url.pathname === '/' ?AddICon: BackICon} width={$page.url.pathname === '/' ? "15px": '20px'} height={$page.url.pathname === '/' ? '15px': '20px' } class={$page.url.pathname !== '/' && 'AddButtonBackIcon'}/> 
				{$page.url.pathname === '/' ? ' New Reservation': ''}
			</a>
		</div>
		<div class="Title">
			<p>{$page.url.pathname.startsWith('/new') ? 'New ' : $page.url.pathname.startsWith('/edit') ? 'edit': ''}Reservation</p>
		</div>
		<div class="closeButton">
			<a href="/"><img src={CloseICon} width="20px" height="20px"/></a>
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

	.AddButtonBackIcon {
		margin-right: 0;
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

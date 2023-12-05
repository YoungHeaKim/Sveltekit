<script>
	import { reservationList } from './store.ts';
	import TrashIcon from '$lib/icons/trash.svg';
	import EditIcon from '$lib/icons/edit.svg';
	import GroupIcon from '$lib/icons/group.svg';
	
	let list = [];
	reservationList.subscribe(v => list = v);
	console.log(reservationList, list);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="itemWrap">
		<div class="rowWrap">
			<h2>김용해</h2>
			<div>010-5291-1892</div>
		</div>
		<p>{new Date()}</p>
		<div class="rowWrap">
			<img src={GroupIcon} width="20px" height="20px"/>
			<p>3</p>
		</div>
		<div class="rowWrap">
			<p>Reserved Table</p>
			<p>7</p>
			<p>Reserved Table</p>
			<p>Floor 1</p>
		</div>
		<div class="rowWrap">
			<p>note</p>
			<a href="/edit/{1}"><img src={EditIcon} width="20px" height="20px"/></a>
		</div>
		<div class="rowWrap">
			<button class="deleteButton"><img src={TrashIcon} width="25px" height="30px"/></button>
			<button class="seatedButton">seated</button>
		</div>
	</div>
		<div class="itemWrap">
		<div class="rowWrap">
			<h2>김용해</h2>
			<div>010-5291-1892</div>
		</div>
		<p>{new Date()}</p>
		<div class="rowWrap">
			<img src={GroupIcon} width="20px" height="20px"/>
			<p>3</p>
		</div>
		<div class="rowWrap">
			<p>Reserved Table</p>
			<p>7</p>
			<p>Reserved Table</p>
			<p>Floor 1</p>
		</div>
		<div class="rowWrap">
			<p>note</p>
			<a><img src={EditIcon} width="20px" height="20px"/></a>
		</div>
		<div class="rowWrap">
			<button class="deleteButton"><img src={TrashIcon} width="25px" height="30px"/></button>
			<button class="seatedButton">seated</button>
		</div>
	</div>
	{#each list as item}
		<div class="itemWrap">
			<div class="rowWrap">
				<h2>{item.name}</h2>
				<div>{item.phone}</div>
			</div>
			<p>{new Date(item.date)}</p>
			<div class="rowWrap">
				<img src={GroupIcon} width="20px" height="20px"/>
				<p>{item.guests}</p>
			</div>
			<div class="rowWrap">
				<p>Reserved Table</p>
				<p>{item.table}</p>
				<p>Reserved Table</p>
				<p>Floor {item.floor}</p>
			</div>
			<div class="rowWrap">
				<p>{item.note}</p>
				<a><img src={EditIcon} width="20px" height="20px"/></a>
			</div>
			<div class="rowWrap">
				<button class="deleteButton"><img src={TrashIcon} width="25px" height="30px"/></button>
				<button class="seatedButton">seated</button>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		align-items: start;
		flex: 1;
		gap: 20px;
		flex-wrap: wrap;
	}

	.itemWrap {
		border-radius: 8px;
		background-color: #fff;
		padding: 20px 15px;
		box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.2);
	}

	.rowWrap {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.deleteButton {
		padding-inline: 20px;
		padding-block: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.seatedButton {
		flex: 1;
		background-color: red;
		color: white;
		padding-block: 15px;
		font-size: 1.3rem;
	}

	button {
		border: 0;
		border-radius: 4px;
	}
</style>

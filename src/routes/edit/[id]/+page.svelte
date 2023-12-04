<script>
	import { page } from '$app/stores';

	const {id} = $page.params;
</script>

<svelte:head>
	<title>Edit</title>
	<meta name="description" content="Edit Reservation" />
</svelte:head>

<div class="text-column">
	<h1>Edit Page</h1>

	<p>{id}</p>

</div>

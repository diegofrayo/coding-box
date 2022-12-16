<script>
	import Image from './../components/Image.svelte';

	let filters = [
		{ id: 'no-filter', name: 'no-filter' },
		{ id: 'filter-1', name: 'blur' },
		{ id: 'filter-2', name: 'contrast' },
		{ id: 'filter-3', name: 'grayscale' },
		{ id: 'filter-4', name: 'hue-rotate' },
		{ id: 'filter-5', name: 'drop-shadow' },
		{ id: 'filter-6', name: 'saturate' },
		{ id: 'filter-7', name: 'custom-svg-filter' }
	];
	let selectedFilter = filters[0];

	function handleClick(event) {
		const filterId = event.target.getAttribute('data-filter-id');
		selectedFilter = filters.find((filter) => filter.id === filterId);
	}
</script>

<div class="container">
	<Image filter={selectedFilter.id} />
	<p>{selectedFilter.name}</p>
	<div>
		{#each filters as filter}
			<button class="filter-btn" on:click={handleClick} data-filter-id={filter.id}>
				{filter.name}</button
			>
		{/each}
	</div>
</div>

<style>
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		width: 100%;
	}

	.filter-btn {
		margin: 10px;
	}
</style>

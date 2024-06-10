<script lang="ts">
	import { onMount } from 'svelte';

	import { fetchCats } from '@/helpers/fetcher';
	import { totalCount, images } from '@/state/store';
	import ImageCard from './ImageCard.svelte';

	let totalCountLocal = $state<number>(0);

	onMount(async () => {
		const catInfo = await fetchCats();
		images.set(catInfo || []);
	});

	const loadMoreHandler = async () => {
		const catInfo = await fetchCats();
		if (!catInfo) return;

		images.update((imgs) => [...imgs, ...catInfo]);
	};

	totalCount.subscribe((count) => {
		totalCountLocal = count;
	});
</script>

<div class="container">
	{#each new Array(totalCountLocal) as _, i (i)}
		<ImageCard index={i} />
	{/each}
</div>

<button onclick={loadMoreHandler} class="load-more-button">Load more</button>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px); /* 2 */
		gap: 40px;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.load-more-button {
		display: block;
		margin: 10px auto;
		background-color: #aa8749;
		color: white;
		padding: 10px 20px;
		border: 0;
	}
	.load-more-button:hover {
		background-color: #aa874999;
		cursor: pointer;
	}
</style>

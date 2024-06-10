<script lang="ts">
	import { onMount } from 'svelte';

	import { fetchCats } from '@/helpers/fetcher';
	import { totalCount, images, loadMore } from '@/state/store';
	import ImageCard from './ImageCard.svelte';

	let totalCountLocal = $state<number>(0);

	onMount(async () => {
		const catInfo = await fetchCats();
		images.set(catInfo || []);
	});

	const loadMoreHandler = async () => {
		loadMore();
		const catInfo = await fetchCats();
		if (!catInfo) return;

		images.update((imgs) => [...imgs, ...catInfo]);
	};

	totalCount.subscribe((count) => {
		totalCountLocal = count;
	});
</script>

<h2 class="header">Cuttest cats</h2>

<div class="container">
	{#each new Array(totalCountLocal) as _, i (i)}
		<ImageCard index={i} />
	{/each}
</div>

<button onclick={loadMoreHandler} class="load-more-button">Load more</button>

<style>
	.header {
		text-align: center;
	}
	.container {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.load-more-button {
		display: block;
		margin: 10px auto;
	}
</style>

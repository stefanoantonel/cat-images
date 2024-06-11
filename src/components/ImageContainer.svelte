<script lang="ts">
	import { onMount } from 'svelte';

	import { fetchCats } from '@/helpers/fetcher';
	import { totalCount, images } from '@/state/store';
	import ImageCard from './ImageCard.svelte';
	import Loader from './Loader.svelte';

	let totalCountLocal = $state<number>(0);
	let bottomSection: Element; // for intersection observer

	onMount(async () => {
		const catInfo = await fetchCats();
		images.set(catInfo || []);
		setupObserver();
	});

	const loadMoreHandler = async () => {
		const catInfo = await fetchCats();
		if (!catInfo) return;

		images.update((imgs) => [...imgs, ...catInfo]);
	};

	totalCount.subscribe((count) => {
		totalCountLocal = count;
	});

	const setupObserver = () => {
		const observer = new IntersectionObserver(loadMoreHandler);
		observer.observe(bottomSection);
	};
</script>

<div class="container">
	{#each new Array(totalCountLocal) as _, i (i)}
		<ImageCard index={i} />
	{/each}
</div>

<div class="bottom-section" bind:this={bottomSection}>
	<Loader />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px);
		gap: 40px;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.bottom-section {
		height: 100px;
	}
</style>

<script lang="ts">
	import type { CatResponse } from '../types/api';
	import { images } from '../state/store';
	import ImageCard from './ImageCard.svelte';

	let catImages = $state<CatResponse[] | []>(new Array(10));

	images.subscribe((imgResponse) => {
		console.log(`imgResponse >>>`, imgResponse);
		catImages = imgResponse || new Array(10);
	});
</script>

<h2 class="container">Cuttest cats</h2>
<div class="container">
	{#each catImages as catImage, i (i)}
		<ImageCard catInfo={catImage} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>

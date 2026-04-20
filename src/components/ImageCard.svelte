<script lang="ts">
	import { onMount } from 'svelte';

	import type { CatResponse } from '@/types/api';
	import { base } from '$app/paths';
	import { images } from '@/state/store';
	import { placeholderImgUrl } from '@/constants/api';

	type Props = {
		index: number;
	};
	let { index }: Props = $props();

	let catInfo = $state<CatResponse | null>(null);
	let loaded = $state(false);

	onMount(() => {
		images.subscribe((imgResponse) => {
			catInfo = imgResponse?.[index] || null;
		});
	});
</script>

<div class="img-swap-container">
	<img
		src={`${base}/${placeholderImgUrl}`}
		alt="placeholder"
		class={loaded ? 'placeholder-image' : 'cat-image'}
	/>

	<img
		class={loaded ? 'cat-image' : 'placeholder-image'}
		src={catInfo?.url}
		alt="cat"
		onload={() => (loaded = true)}
	/>
</div>

<style>
	.img-swap-container {
		display: grid;
		height: 200px;
		width: 300px;
		overflow: hidden;
	}
	.img-swap-container img {
		grid-area: 1 / 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 1.5s ease-in-out;
	}
	.cat-image {
		opacity: 1;
	}
	.placeholder-image {
		opacity: 0;
		pointer-events: none;
	}
</style>

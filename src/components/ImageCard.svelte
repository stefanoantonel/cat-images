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

<div
	class="img-swap-container"
	onclick={() => catInfo?.url && window.open(catInfo.url, '_blank')}
	role="button"
	tabindex="0"
	onkeydown={(e) => {
		if ((e.key === 'Enter' || e.key === ' ') && catInfo?.url) {
			window.open(catInfo.url, '_blank');
		}
	}}
>
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
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
		transition: box-shadow 0.3s ease;
		cursor: pointer;
	}

	.img-swap-container:hover {
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
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

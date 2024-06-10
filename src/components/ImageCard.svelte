<script lang="ts">
	import { onMount } from 'svelte';

	import type { CatResponse } from '@/types/api';
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
	<img src={placeholderImgUrl} alt="placeholder" class={loaded ? 'hidden' : 'cat-image'} />

	<img
		class={loaded ? 'cat-image' : 'hidden'}
		src={catInfo?.url}
		loading="lazy"
		alt="cat"
		onload={() => (loaded = true)}
	/>
</div>

<style>
	.cat-image {
		object-fit: cover;
		max-height: 200px;
		width: 100%;
	}
	.img-swap-container {
		height: 200px;
		width: 300px;
		overflow: hidden;
	}
	.hidden {
		max-height: 0;
	}
</style>

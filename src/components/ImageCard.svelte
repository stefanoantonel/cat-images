<script lang="ts">
	import type { CatResponse } from '../types/api';

	type Props = {
		catInfo: CatResponse | null;
	};
	let { catInfo }: Props = $props();
</script>

<img
	height="200px"
	style="object-fit: cover"
	src={catInfo?.url}
	loading="lazy"
	width="300px"
	alt="cat"
/>

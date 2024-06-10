import { writable } from 'svelte/store';

import type { CatResponse } from '@/types/api';

const increment = 10;

export const totalCount = writable<number>(increment);

export const images = writable<CatResponse[] | []>([]);

export function loadMore() {
	totalCount.update((count) => count + increment);
}

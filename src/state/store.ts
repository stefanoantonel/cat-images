import { derived, writable } from 'svelte/store';

import type { CatResponse } from '@/types/api';

export const images = writable<CatResponse[] | []>([]);

export const totalCount = derived(images, (images) => images.length);

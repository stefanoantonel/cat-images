import { readable } from 'svelte/store';

import { imageApiUrl } from '../constants/api';
import type { CatResponse } from '../types/api';

export const images = readable<null | CatResponse[]>(null, (set) => {
	fetch(imageApiUrl)
		.then((r) => r.json())
		.then((catResponse) => {
			console.log(`catResponse >>>`, catResponse);
			set(catResponse);
		})
		.catch((e) => {
			console.error(e);
		});
});

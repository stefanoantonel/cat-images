import type { CatResponse } from '@/types/api';
import { imageApiUrl } from '@/constants/api';

export async function fetchCats(): Promise<CatResponse[] | null> {
	try {
		const response = await fetch(imageApiUrl);
		const catResponse = await response.json();
		return catResponse;
	} catch (e) {
		console.error(e);
		return null;
	}
}

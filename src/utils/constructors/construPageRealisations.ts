import { PageData, StrapiPayload } from '@c_types/T_pageRealisationsData';

export default function construPageRealisations(
	payload: StrapiPayload
): PageData {
	const metadata = payload?.data?.metadata;
	const strings = payload?.data?.strings;

	if (metadata && strings) {
		return {
			metadata: metadata,
			strings: strings,
		};
	}

	return {
		metadata: { title: '', description: '' },
		strings: { heading_1: '' },
	};
}

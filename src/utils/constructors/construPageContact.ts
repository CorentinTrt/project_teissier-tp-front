import { PageData, StrapiPayload } from '@c_types/T_pageContactData';

export default function construPageContact(payload: StrapiPayload): PageData {
	const metadata = payload?.data?.attributes?.metadata;
	const strings = payload?.data?.attributes?.strings;

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

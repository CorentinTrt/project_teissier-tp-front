import { PageData, StrapiPayload, Strings } from '@c_types/T_pageHomeData';

import { Upload, UploadFromStrapi } from '@c_types/T_generics';

function formateUploadsSrc(upload: UploadFromStrapi): Upload {
	if (upload.alternativeText === '') {
		console.error(
			`Error on upload ID=${upload.id} on "alternativeText" field: Missing field`
		);
	}

	return {
		id: upload.id,
		name: upload.name,
		alternativeText: upload?.alternativeText,
		url: upload?.url,
	};
}

export default function construPageHome(payload: StrapiPayload): PageData {
	const metadata = payload?.data?.metadata;
	const strings = payload?.data?.strings;
	let formatedUploads: Upload[] = [];
	let formatedRealisations: Upload[] = [];

	const uploads = payload?.data?.uploads;
	if (uploads && Array.isArray(uploads)) {
		formatedUploads = uploads.map((e: UploadFromStrapi) =>
			formateUploadsSrc(e)
		);
	}

	const realisations = payload?.data?.realisations?.data;
	if (realisations && Array.isArray(realisations)) {
		formatedRealisations = realisations.map((e: UploadFromStrapi) =>
			formateUploadsSrc(e)
		);
	}

	return {
		metadata: metadata,
		strings: strings,
		uploads: formatedUploads,
		realisations: formatedRealisations,
	};
}

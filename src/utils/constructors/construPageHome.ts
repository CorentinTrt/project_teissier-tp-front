import {
	StrapiPayload,
	Metadata,
	Strings,
	Upload,
	UploadFromStrapi,
} from '@c_types/T_pageData';

type PageData = {
	metadata: Metadata;
	strings: Strings;
	uploads: Upload[];
	realisations: Upload[];
};

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;

function formateUploadsSrc(upload: UploadFromStrapi): Upload {
	if (upload.attributes.alternativeText === '') {
		console.error(
			`Error on upload ID=${upload.id} on "alternativeText" field: Missing field`
		);
	}

	return {
		id: upload.id,
		name: upload.attributes?.name,
		alternativeText: upload.attributes?.alternativeText,
		url: `http://${strapiHost}:${strapiPort}${upload.attributes?.url}`,
	};
}

export default function construPageHome(payload: StrapiPayload): PageData {
	const metadata = payload?.data?.attributes?.metadata;
	const strings = payload?.data?.attributes?.strings;
	let formatedUploads: Upload[] = [];
	let formatedRealisations: Upload[] = [];

	const uploads = payload?.data?.attributes?.uploads?.data;
	if (uploads && Array.isArray(uploads)) {
		formatedUploads = uploads.map((e: UploadFromStrapi) =>
			formateUploadsSrc(e)
		);
	}

	const realisations = payload?.data?.attributes?.realisations?.data;
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

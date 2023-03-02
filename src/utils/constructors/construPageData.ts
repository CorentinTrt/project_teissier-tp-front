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

export default function construPageData(payload: StrapiPayload): PageData {
	const metadata = payload?.data?.attributes?.metadata;
	const strings = payload?.data?.attributes?.strings;

	const uploads = payload?.data?.attributes?.uploads?.data;
	if (!uploads || !Array.isArray(uploads)) {
		return {
			metadata: metadata,
			strings: strings,
			uploads: [],
		};
	}
	const formatedUploads = uploads.map((e: UploadFromStrapi) =>
		formateUploadsSrc(e)
	);

	return {
		metadata: metadata,
		strings: strings,
		uploads: formatedUploads,
	};
}

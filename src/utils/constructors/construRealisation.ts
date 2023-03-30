import { Upload, UploadFromStrapi } from '@c_types/T_generics';
import { Realisation, StrapiPayload } from '@c_types/T_realisation';

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;

function formateUploadsSrc(upload: UploadFromStrapi): Upload {
	const formatedUpload: Upload = {
		id: '',
		name: '',
		alternativeText: '',
		url: '',
	};

	if (upload?.attributes?.url) {
		formatedUpload.url = `http://${strapiHost}:${strapiPort}${upload?.attributes?.url}`;
	}
	if (upload?.attributes?.name) {
		formatedUpload.name = upload?.attributes?.name;
	}
	if (upload?.attributes?.alternativeText) {
		formatedUpload.alternativeText = upload?.attributes?.alternativeText;
	}

	return formatedUpload;
}

export default function construRealisation(
	payload: StrapiPayload
): Realisation {
	const data = payload?.data?.attributes?.content[0];
	let formatedImages: Upload[] = [];

	const uploads = payload?.data?.attributes?.content[0].images?.data;
	if (uploads && Array.isArray(uploads)) {
		formatedImages = uploads.map((e: UploadFromStrapi) => formateUploadsSrc(e));

		return {
			pid: data.pid,
			name: data.name,
			typeText: data.typeText,
			technicText: data.technicText,
			layout: data.layout,
			images: formatedImages,
		};
	}

	return {
		pid: 0,
		layout: 0,
		name: '',
		typeText: '',
		technicText: '',
		images: [],
	};
}

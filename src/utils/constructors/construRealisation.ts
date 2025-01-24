import { Upload, UploadFromStrapi } from '@c_types/T_generics';
import { Realisation, StrapiPayload } from '@c_types/T_realisation';

function formateUploadsSrc(upload: UploadFromStrapi): Upload {
	const formatedUpload: Upload = {
		id: '',
		name: '',
		alternativeText: '',
		url: '',
	};

	if (upload?.url) {
		formatedUpload.url = `${upload?.url}`;
	}
	if (upload?.name) {
		formatedUpload.name = upload?.name;
	}
	if (upload?.alternativeText) {
		formatedUpload.alternativeText = upload?.alternativeText;
	}

	return formatedUpload;
}

export default function construRealisation(
	payload: StrapiPayload
): Realisation {
	let formatedImages: Upload[] = [];

	const { pid, layout, name, typeText, technicText } = payload;

	const uploads = payload?.images;
	if (uploads && Array.isArray(uploads)) {
		formatedImages = uploads.map((e: UploadFromStrapi) => formateUploadsSrc(e));

		return {
			pid: pid ? pid : 0,
			layout: layout ? layout : 0,
			name: name ? name : '',
			typeText: typeText ? typeText : '',
			technicText: technicText ? technicText : '',
			images: formatedImages,
		};
	}

	return {
		pid: pid ? pid : 0,
		layout: layout ? layout : 0,
		name: name ? name : '',
		typeText: typeText ? typeText : '',
		technicText: technicText ? technicText : '',
		images: [],
	};
}

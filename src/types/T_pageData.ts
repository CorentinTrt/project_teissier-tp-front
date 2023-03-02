interface Metadata {
	title: string;
	description: string;
}

interface Strings {
	[key: string]: string;
}

interface Upload {
	id: string;
	name: string;
	alternativeText: string;
	url: string;
}
interface UploadFromStrapi {
	id: string;
	attributes: {
		name: string;
		alternativeText: string;
		url: string;
	};
}

type StrapiPayload = {
	data: {
		attributes: {
			metadata: Metadata;
			strings: Strings;
			uploads: {
				data: UploadFromStrapi[];
			};
		};
	};
};

export type { StrapiPayload, Metadata, Strings, Upload, UploadFromStrapi };

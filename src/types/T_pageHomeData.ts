interface Metadata {
	title: string;
	description: string;
}

interface Strings {
  heading_1: string,
  heading_2: string,
  heading_3: string;
  textXp: string;
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
			realisations: {
				data: UploadFromStrapi[];
			};
		};
	};
};

export type { StrapiPayload, Metadata, Strings, Upload, UploadFromStrapi };

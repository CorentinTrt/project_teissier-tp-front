interface Metadata {
	title: string;
	description: string;
}

interface Upload {
	id: string;
	name: string;
	alternativeText: string;
	url: string;
}
interface UploadFromStrapi {
	id: string;
	name: string;
	alternativeText: string;
	url: string;
}

export type { Metadata, Upload, UploadFromStrapi };

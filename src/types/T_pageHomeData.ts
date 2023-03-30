import type { Metadata, Upload, UploadFromStrapi } from '@c_types/T_generics';

interface Strings {
	heading_1: string;
	heading_2: string;
	heading_3: string;
	textXp: string;
	[key: string]: string;
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

type PageData = {
	metadata: Metadata;
	strings: Strings;
	uploads: Upload[];
	realisations: Upload[];
};

export type { StrapiPayload, Strings, PageData };

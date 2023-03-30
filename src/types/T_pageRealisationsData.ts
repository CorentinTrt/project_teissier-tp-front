import type { Metadata } from '@c_types/T_generics';

interface Strings {
	heading_1: string;
}

type StrapiPayload = {
	data: {
		attributes: {
			metadata: Metadata;
			strings: Strings;
		};
	};
};

type PageData = {
	metadata: Metadata;
	strings: Strings;
};

export type { PageData, StrapiPayload, Strings };

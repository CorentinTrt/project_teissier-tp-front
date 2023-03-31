import type { Upload, UploadFromStrapi } from '@c_types/T_generics';

// layouts
// 1 > 1 image
// 2 > 3 images > big at left
// 3 > 3 images > big at the bottom
// 4 > 4 images > same size, grid
type Layout = 1 | 2 | 3 | 4 | 0;

type Realisation = {
	pid: number;
	layout: Layout;
	name: string;
	typeText: string;
	technicText: string;
	images: Upload[];
};

type StrapiPayload = {
	pid: number;
	name: string;
	typeText: string;
	technicText: string;
	layout: Layout;
	images: { data: UploadFromStrapi[] };
};

export type { Realisation, StrapiPayload, Layout };

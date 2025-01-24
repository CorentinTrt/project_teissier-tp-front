type Page = 'home' | 'realisation' | 'contact';

const STRAPI_URL = process.env.STRAPI_URL;

export default async function fetchPageData(page: Page) {
	const result = await fetch(`${STRAPI_URL}/api/page-${page}?populate=*`);
	const json = await result.json();

	return json;
}

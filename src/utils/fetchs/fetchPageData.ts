type Page = 'home' | 'realisation' | 'contact';

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;

export default async function fetchPageData(page: Page) {
	const result = await fetch(
		`http://${strapiHost}:${strapiPort}/api/page-${page}?populate=*`
	);
	const json = await result.json();

	return json;
}

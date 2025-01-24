type Endpoint = 'footer' | 'contact';

const STRAPI_URL = process.env.STRAPI_URL;

export default async function fetchData(endpoint: Endpoint) {
	const result = await fetch(`${STRAPI_URL}/api/data-${endpoint}`);
	const json = await result.json();

	return json;
}

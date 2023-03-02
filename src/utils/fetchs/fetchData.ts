type Endpoint = 'footer' | 'contact';

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;

export default async function fetchData(endpoint: Endpoint) {
	const result = await fetch(
		`http://${strapiHost}:${strapiPort}/api/data-${endpoint}`
	);
	const json = await result.json();

	return json;
}

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;

export default async function fetchAllRealisations() {
	const result = await fetch(
		`http://${strapiHost}:${strapiPort}/api/data-realisation?populate[content][populate][0]=images`
	);

	return await result.json();
}

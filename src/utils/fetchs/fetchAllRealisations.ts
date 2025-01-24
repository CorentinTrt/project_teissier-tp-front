const STRAPI_URL = process.env.STRAPI_URL;

export default async function fetchAllRealisations() {
	const result = await fetch(
		`${STRAPI_URL}/api/data-realisation?populate[content][populate][0]=images`
	);

	return await result.json();
}

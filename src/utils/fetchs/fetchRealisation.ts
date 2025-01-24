const STRAPI_URL = process.env.STRAPI_URL;

export default async function fetchRealisation(pid: string) {
	const result = await fetch(
		`${STRAPI_URL}/api/data-realisation?populate[content][populate][0]=images&populate[content][filters][pid][$eq]=${pid}`
	);

	return await result.json();
}

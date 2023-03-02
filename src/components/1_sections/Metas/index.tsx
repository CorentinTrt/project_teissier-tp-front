import Head from 'next/head';

type Props = {
	title: string;
	description: string;
};

const Metas = (props: Props) => {
	const { title, description } = props;

	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
		</Head>
	);
};

export default Metas;

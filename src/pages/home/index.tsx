import Head from 'next/head';
import s from './home.module.scss';

const HomePage = () => {
	return (
		<div className={s['home']}>
			<Metas />

			<div className={s['home--content']}>
				<h1 className={s['title']}>Next.Js - Starter</h1>
			</div>
		</div>
	);
};

const Metas = () => {
	return (
		<Head>
			<title>Starter Next.Js - Home</title>
			<meta name='description' content='Home page of the Next.Js starter' />
		</Head>
	);
};

export default HomePage;

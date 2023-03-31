import HomePage from '@pages/Home';
import Metas from '@sections/Metas';
import Header from '@blocs/Header';
import Footer from '@blocs/Footer';

import { Strings } from '@c_types/T_pageHomeData';
import { FooterData } from '@c_types/T_footerData';
import { Metadata, Upload } from '@c_types/T_generics';
import { Realisation } from '@c_types/T_realisation';

import construPageHome from '@utils/constructors/construPageHome';
import construFooterData from '@utils/constructors/construFooterData';
import construRealisation from '@utils/constructors/construRealisation';
import fetchPageData from '@utils/fetchs/fetchPageData';
import fetchData from '@utils/fetchs/fetchData';
import fetchAllRealisations from '@utils/fetchs/fetchAllRealisations';

type Props = {
	metadata: Metadata;
	strings: Strings;
	uploads: Upload[];
	realisations: Realisation[];
	footerData: FooterData;
};

export default function Home(props: Props) {
	const { metadata, strings, uploads, realisations, footerData } = props;
	const { details, contact } = footerData;

	return (
		<>
			<Metas title={metadata.title} description={metadata.description} />

			<Header />

			<HomePage
				strings={strings}
				uploads={uploads}
				realisations={realisations}
			/>

			<Footer details={details} contact={contact} />
		</>
	);
}

export async function getStaticProps() {
	const [page, realisations, footer, contact] = await Promise.all([
		fetchPageData('home'),
		fetchAllRealisations(),
		fetchData('footer'),
		fetchData('contact'),
	]);
	const pageData = construPageHome(page);
	const footerData = construFooterData(footer, contact);
	let realisationsData: Realisation[] = [];

	for (let i = 0; i < 6; i++) {
		realisationsData.push(
			construRealisation(realisations?.data?.attributes?.content[i])
		);
	}

	return {
		props: {
			metadata: pageData.metadata,
			strings: pageData.strings,
			uploads: pageData.uploads,
			realisations: realisationsData,
			footerData: {
				details: footerData.details,
				contact: footerData.contact,
			},
		},
	};
}

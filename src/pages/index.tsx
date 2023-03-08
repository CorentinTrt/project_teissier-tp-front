import HomePage from './home';
import Metas from '@sections/Metas';
import Header from '@blocs/Header';
import Footer from '@blocs/Footer';

import { Metadata, Strings, Upload } from '@c_types/T_pageData';
import { FooterData } from '@c_types/T_footerData';

import construPageHome from '@utils/constructors/construPageHome';
import construFooterData from '@utils/constructors/construFooterData';
import fetchPageData from '@utils/fetchs/fetchPageData';
import fetchData from '@utils/fetchs/fetchData';

type Props = {
	metadata: Metadata;
	strings: Strings;
	uploads: Upload[];
	realisations: Upload[];
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
	const [data, dataFooter, dataContact] = await Promise.all([
		fetchPageData('home'),
		fetchData('footer'),
		fetchData('contact'),
	]);
	const pageData = construPageHome(data);
	const footerData = construFooterData(dataFooter, dataContact);

	return {
		props: {
			metadata: pageData.metadata,
			strings: pageData.strings,
			uploads: pageData.uploads,
			realisations: pageData.realisations,
			footerData: {
				details: footerData.details,
				contact: footerData.contact,
			},
		},
	};
}

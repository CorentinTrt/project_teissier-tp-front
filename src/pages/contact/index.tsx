import ContactPage from '@pages/Contact';
import Metas from '@sections/Metas';
import Footer from '@blocs/Footer';
import Header from '@blocs/Header';

import construFooterData from '@utils/constructors/construFooterData';
import construPageContact from '@utils/constructors/construPageContact';
import fetchData from '@utils/fetchs/fetchData';
import fetchPageData from '@utils/fetchs/fetchPageData';

import { FooterData } from '@c_types/T_footerData';
import { Metadata } from '@c_types/T_generics';
import { Strings } from '@c_types/T_pageContactData';

type Props = {
	metadata: Metadata;
	strings: Strings;
	footerData: FooterData;
};

const Contact = (props: Props) => {
	const { metadata, strings, footerData } = props;
	const { details, contact } = footerData;

	return (
		<>
			<Metas title={metadata.title} description={metadata.description} />

			<Header />

			<ContactPage strings={strings} details={details} contact={contact} />

			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const [page, footer, contact] = await Promise.all([
		fetchPageData('contact'),
		fetchData('footer'),
		fetchData('contact'),
	]);

	const footerData = construFooterData(footer, contact);
	const pageData = construPageContact(page);

	return {
		props: {
			metadata: pageData.metadata,
			strings: pageData.strings,
			footerData: {
				details: footerData.details,
				contact: footerData.contact,
			},
		},
	};
}

export default Contact;

import Footer from '@blocs/Footer';
import Header from '@blocs/Header';
import { FooterData } from '@c_types/T_footerData';
import ContactPage from '@pages/Contact';

import construFooterData from '@utils/constructors/construFooterData';
import fetchData from '@utils/fetchs/fetchData';
import fetchPageData from '@utils/fetchs/fetchPageData';

type Props = {
	footerData: FooterData;
};

const Contact = (props: Props) => {
	const { footerData } = props;
	const { details, contact } = footerData;

	return (
		<>
			<Header />

			<ContactPage details={details} contact={contact} />

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

	return {
		props: {
			footerData: {
				details: footerData.details,
				contact: footerData.contact,
			},
		},
	};
}

export default Contact;

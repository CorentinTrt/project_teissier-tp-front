import RealisationPage from '@pages/Realisation';
import Metas from '@sections/Metas';

import fetchData from '@utils/fetchs/fetchData';
import fetechRealisation from '@utils/fetchs/fetchRealisation';
import fetchPageData from '@utils/fetchs/fetchPageData';
import construPageRealisations from '@utils/constructors/construPageRealisations';
import construRealisation from '@utils/constructors/construRealisation';
import construFooterData from '@utils/constructors/construFooterData';

import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Metadata } from '@c_types/T_generics';
import { Strings } from '@c_types/T_pageRealisationsData';
import { Realisation } from '@c_types/T_realisation';

interface ContextUrl extends ParsedUrlQuery {
	pid: string;
}

type Props = {
	metadata: Metadata;
	strings: Strings;
	realisation: Realisation;
};

const Realisation = (props: Props) => {
	const { metadata, strings, realisation } = props;

	return (
		<>
			<Metas title={metadata.title} description={metadata.description} />

			<RealisationPage strings={strings} realisation={realisation} />
		</>
	);
};

export default Realisation;

function validatePid(object: unknown): object is ContextUrl {
	if (object !== null && typeof object === 'object') {
		return 'pid' in object;
	}
	return false;
}

export const getStaticProps: GetStaticProps = async (context) => {
	let pid: string;

	if (validatePid(context.params)) {
		pid = context.params.pid;

		const [page, realisation] = await Promise.all([
			fetchPageData('realisation'),
			fetechRealisation(pid),
		]);

		const pageData = construPageRealisations(page);
		const realisationData = construRealisation(realisation);

		return {
			props: {
				metadata: pageData.metadata,
				strings: pageData.strings,
				realisation: realisationData,
			},
		};
	}

	return {
		props: {},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { pid: '1' } },
			{ params: { pid: '2' } },
			{ params: { pid: '3' } },
			{ params: { pid: '4' } },
			{ params: { pid: '5' } },
			{ params: { pid: '6' } },
		],
		fallback: false,
	};
};

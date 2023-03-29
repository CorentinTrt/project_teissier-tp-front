import s from './home.module.scss';

import Catch from '@blocs/Catch';
import XpList from '@blocs/XpList';
import Realisations from '@blocs/Realisations';

import { Strings } from '@c_types/T_pageHomeData';
import { Upload } from '@c_types/T_generics';

type Props = {
	strings: Strings;
	uploads: Upload[];
	realisations: Upload[];
};

const defaultProps: Props = {
	strings: { heading_1: '', heading_2: '', heading_3: '', textXp: '' },
	uploads: [{ id: '', url: '', alternativeText: '', name: '' }],
	realisations: [],
};

const HomePage = (props: Props) => {
	const { strings, uploads, realisations } = props;

	return (
		<div className={s['home']}>
			<Catch strings={strings} imgData={uploads[0]} />

			<XpList strings={strings} />

			<Realisations strings={strings} realList={realisations} />
		</div>
	);
};

export default HomePage;

HomePage.defaultProps = defaultProps;

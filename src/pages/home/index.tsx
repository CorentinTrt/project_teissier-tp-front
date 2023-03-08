import s from './home.module.scss';

import { Strings, Upload } from '@c_types/T_pageData';
import Catch from '@blocs/Catch';
import XpList from '@blocs/XpList';
import Realisations from '@blocs/Realisations';

type Props = {
	strings: Strings;
	uploads: Upload[];
	realisations: Upload[];
};

const HomePage = (props: Props) => {
	const { strings, uploads, realisations } = props;
	console.log(realisations);

	return (
		<div className={s['home']}>
			<Catch strings={strings} imgData={uploads[0]} />

			<XpList strings={strings} />

			<Realisations strings={strings} realList={realisations} />
		</div>
	);
};

export default HomePage;

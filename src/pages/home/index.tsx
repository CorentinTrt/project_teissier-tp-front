import s from './home.module.scss';

import { Strings, Upload } from '@c_types/T_pageData';
import Catch from '@blocs/Catch';
import XpList from '@blocs/XpList';

type Props = {
	strings: Strings;
	uploads: Upload[];
};

const HomePage = (props: Props) => {
	const { strings, uploads } = props;

	return (
		<div className={s['home']}>
			<Catch strings={strings} imgData={uploads[0]} />

			<XpList strings={strings} />
		</div>
	);
};

export default HomePage;

import s from './catch.module.scss';

import Button from '@shared/Button/Button';

import { Upload } from '@c_types/T_pageData';

type Props = {
	strings: { [key: string]: string };
	imgData: Upload;
};

const Catch = (props: Props) => {
	const { strings, imgData } = props;

	return (
		<div className={s['catch']}>
			<div className={s['left']}>
				<h1 className={''}>{strings.heading_1}</h1>

				<Button size='big' label='Parlons-en' />
			</div>
			<div className={s['right']}>
				<img src={imgData.url} alt={imgData.alternativeText} />
			</div>
		</div>
	);
};

export default Catch;

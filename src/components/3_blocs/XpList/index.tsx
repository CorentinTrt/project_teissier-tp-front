import s from './xpList.module.scss';

import Button from '@shared/Button/Button';
import ThumbXp from '@shared/ThumbXp';

type Props = {
	strings: { heading_2: string; textXp: string };
};

const XpList = (props: Props) => {
	const { strings } = props;

	const xpList = [
		{ label: 'Terrassement', iconSrc: 'pelle.png' },
		{ label: 'Assainissement', iconSrc: 'fosse.png' },
		{ label: 'Aménagement extérieur', iconSrc: 'amenagement.png' },
		{ label: 'Travaux public', iconSrc: 'tp.png' },
	];

	return (
		<div id='expertise' className={s['xp-list']}>
			<div className={s['left']}>
				<h1>{strings.heading_2}</h1>

				<p className={s['text-xp']}>{strings.textXp}</p>

				<Button size='big' label='Contactez-nous' type='link' href='/contact' />
			</div>

			<div className={s['right']}>
				{xpList.map((e, i) => (
					<ThumbXp {...e} key={`thumn${i}`} />
				))}
			</div>
		</div>
	);
};

export default XpList;

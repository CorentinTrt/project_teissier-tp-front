import Button from '@shared/Button/Button';
import s from './xpList.module.scss';

type Props = {
	strings: { [key: string]: string };
};

const XpList = (props: Props) => {
	const { strings } = props;

	return (
		<div className={s['xp-list']}>
			<div className={s['left']}>
				<h1>{strings.heading_2}</h1>

				<p className={s['text-xp']}>{strings.textXp}</p>

				<Button size='big' label='Contactez-nous' />
			</div>

			<div className={s['right']}></div>
		</div>
	);
};

export default XpList;

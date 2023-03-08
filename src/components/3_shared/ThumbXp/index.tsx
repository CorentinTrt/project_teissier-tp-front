import s from './thumbXp.module.scss';

type Props = {
	label: string;
	iconSrc: string;
};

const ThumbXp = (props: Props) => {
	const { label, iconSrc } = props;

	return (
		<div className={s['thumb-xp']}>
			<div className={s['content']}>
				<img src={`/icons/${iconSrc}`} alt={`${label} Icon`} />
				<h3>{label}</h3>
			</div>
		</div>
	);
};

export default ThumbXp;

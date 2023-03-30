import s from './button.module.scss';

type Props = {
	size: 'small' | 'big';
	label: string;
};

const Button = (props: Props) => {
	const { size, label } = props;

	const classesContainer = `${s['button']} ${
		size === 'small' ? s['small'] : ''
	}`;
	const classesLabel = `${s['label']} ${size === 'small' ? s['small'] : ''}`;

	return (
		<div className={classesContainer}>
			<p className={classesLabel}>{label}</p>
		</div>
	);
};

export default Button;

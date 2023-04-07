import s from './input.module.scss';

import { HTMLInputTypeAttribute } from 'react';

type Props = {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute | 'text-area';
};

const defaultProps: Props = {
	label: '',
	name: '',
	type: 'text',
};

const Input = (props: Props) => {
	const { label, name, type } = props;

	return (
		<div className={s['input']}>
			<p className={s['label']}>{label}</p>

			{type === 'text-area' ? (
				<textarea id={'name'} name={name} rows={10}></textarea>
			) : (
				<input id={name} name={name} type={type} />
			)}
		</div>
	);
};

export default Input;

Input.defaultProps = defaultProps;

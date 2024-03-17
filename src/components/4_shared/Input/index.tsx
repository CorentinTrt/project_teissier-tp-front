import s from './input.module.scss';

import { HTMLInputTypeAttribute } from 'react';

type Props = {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute | 'text-area';
	placeholder: string;
};

const defaultProps: Props = {
	label: '',
	name: '',
	type: 'text',
	placeholder: '',
};

const Input = (props: Props) => {
	const { label, name, type, placeholder } = props;

	return (
		<div className={s['input']}>
			<p className={s['label']}>{label}</p>

			{type === 'text-area' ? (
				<textarea
					id={`${name}`}
					name={name}
					rows={10}
					placeholder={placeholder}
				></textarea>
			) : (
				<input id={name} name={name} type={type} placeholder={placeholder} />
			)}
		</div>
	);
};

export default Input;

Input.defaultProps = defaultProps;

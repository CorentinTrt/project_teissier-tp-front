import ActiveLink from '@shared/ActiveLink';
import { ReactNode } from 'react';
import s from './button.module.scss';

type ButtonType = 'submit' | 'link';

type Props = {
	size: 'small' | 'big';
	label: string;
	type: ButtonType;
	href?: string;
};

type WrapperProps = {
	type: ButtonType;
	href?: string;
	children: ReactNode;
};

const defaultProps: Props = {
	size: 'big',
	label: 'label',
	type: 'link',
};

const WrapperButton = (props: WrapperProps) => {
	const { type, href, children } = props;

	return type === 'link' ? (
		<ActiveLink href={href}>{children}</ActiveLink>
	) : (
		<>{children}</>
	);
};

const Button = (props: Props) => {
	const { size, label, type, href } = props;

	const buttonType = type === 'submit' ? 'submit' : 'button';
	const classesContainer = `${s['button']} ${
		size === 'small' ? s['small'] : ''
	}`;
	const classesLabel = `${s['label']} ${size === 'small' ? s['small'] : ''}`;

	return (
		<WrapperButton type={type} href={href}>
			<button type={buttonType} className={classesContainer}>
				<p className={classesLabel}>{label}</p>
			</button>
		</WrapperButton>
	);
};

export default Button;

Button.defaultProps = defaultProps;

import s from './activeLink.module.scss';

import { useRouter } from 'next/router';

import { MouseEvent, ReactNode } from 'react';

type Props = { href: string; children: ReactNode };

const defaultProps: Props = { href: '/', children: <></> };

const ActiveLink = (props: Props) => {
	const { href, children } = props;

	const router = useRouter();

	function handleClick(e: MouseEvent) {
		router.push(href);
		e.preventDefault();
	}

	return (
		<a className={s['active-link']} onClick={handleClick}>
			{children}
		</a>
	);
};

export default ActiveLink;

ActiveLink.defaultProps = defaultProps;

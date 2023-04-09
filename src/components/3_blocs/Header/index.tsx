import { useRouter } from 'next/router';

import s from './header.module.scss';

import ActiveLink from '@shared/ActiveLink';
import Button from '@shared/Button/Button';

const Header = () => {
	const router = useRouter();
	const isOnPageContact = router.pathname === '/contact' ? true : false;

	return (
		<div className={s['header']}>
			<ActiveLink href={'/'}>
				<img src='/images/logo.png' alt='Logo Teissier TP' />
			</ActiveLink>

			<div className={s['right']}>
				<a href={'#expertise'}>{'Expertise'}</a>
				<a href={'#realisation'}>{'Réalisations'}</a>
				{!isOnPageContact && (
					<Button
						size='big'
						label='Contactez-nous'
						type='link'
						href='/contact'
					/>
				)}
			</div>
		</div>
	);
};

export default Header;

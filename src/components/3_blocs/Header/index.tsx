import s from './header.module.scss';

import ActiveLink from '@shared/ActiveLink';
import Button from '@shared/Button/Button';

const Header = () => {
	return (
		<div className={s['header']}>
			<ActiveLink href={'/'}>
				<img src='/images/logo.png' alt='Logo Teissier TP' />
			</ActiveLink>

			<div className={s['right']}>
				<a href={'#expertise'}>{'Expertise'}</a>
				<a href={'#realisation'}>{'Réalisations'}</a>
				<Button size='big' label='Contactez-nous' type='link' href='/contact' />
			</div>
		</div>
	);
};

export default Header;

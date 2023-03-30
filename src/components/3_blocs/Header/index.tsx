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
				<ActiveLink href={'/expertise'}>{'Expertise'}</ActiveLink>
				<ActiveLink href={'/realisations/1'}>{'Réalisations'}</ActiveLink>
				<Button size='big' label='Contactez-nous' />
			</div>
		</div>
	);
};

export default Header;

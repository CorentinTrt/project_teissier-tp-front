import Button from '@shared/Button/Button';
import s from './header.module.scss';

const Header = () => {
	return (
		<div className={s['header']}>
			<img src='/images/logo.png' alt='Logo Teissier TP' />

			<div className={s['right']}>
				<a>{'Expertise'}</a>
				<a>{'Réalisations'}</a>
				<Button size='big' label='Contactez-nous' />
			</div>
		</div>
	);
};

export default Header;

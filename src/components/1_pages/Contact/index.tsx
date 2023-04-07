import s from './contact.module.scss';

import Button from '@shared/Button/Button';
import Input from '@shared/Input';

import { Contact, FooterDetails } from '@c_types/T_footerData';
import { FormEvent } from 'react';

type Props = { details: FooterDetails; contact: Contact };

interface FormData {
	[key: string]: FormDataEntryValue;
}

const defaultProps: Props = {
	details: { shotText: '', location: 'Cavaillon (83)' },
	contact: { cellNumber: '', homeNumber: '', emailAdress: '' },
};

const ContactPage = (props: Props) => {
	const { details, contact } = props;
	const { location } = details;
	const { cellNumber, homeNumber, emailAdress } = contact;

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData: FormData = {};

		const _formData = new FormData(e.target as HTMLFormElement);
		_formData.forEach((value, property: string) => {
			formData[property] = value;
		});

		console.log(formData);
	}

	return (
		<div className={s['contact']}>
			<h2>{'Contactez-nous'}</h2>

			<div className={s['content']}>
				<div className={s['left']}>
					<form onSubmit={handleSubmit}>
						<Input label={'Nom et Prénom'} name={'names'} />

						<Input label={'Email'} name={'email'} type={'email'} />

						<Input label={'Téléphone'} name={'tel'} type={'number'} />

						<Input label={'Message'} name={'message'} type={'text-area'} />

						<Button type={'submit'} label={'Envoyer'} />
					</form>
				</div>

				<div className={s['right']}>
					<img
						className={s['logo']}
						src={'/images/logo_blanc.png'}
						alt={'Logo Teissier TP'}
					/>

					<img
						className={s['contact-img']}
						src={'/images/contact_img.png'}
						alt={'Contact image'}
					/>

					<div className={s['infos']}>
						<div className={s['numbers']}>
							<img src='/icons/phone_white.png' alt='Icon phone' />
							<p className={s['text']}>{`${cellNumber} | ${homeNumber}`}</p>
						</div>

						<div className={s['location']}>
							<img src='/icons/location_white.png' alt='Icon location' />
							<p>{location}</p>
						</div>

						<div className={s['email-adress']}>
							<img src='/icons/mail_white.png' alt='Icon email' />
							<p>{emailAdress}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;

ContactPage.defaultProps = defaultProps;

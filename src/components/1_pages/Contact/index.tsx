import { FormEvent } from 'react';
import s from './contact.module.scss';

import Button from '@shared/Button/Button';
import Input from '@shared/Input';

import { Contact, FooterDetails } from '@c_types/T_footerData';
import { Strings } from '@c_types/T_pageContactData';

type Props = { strings: Strings; details: FooterDetails; contact: Contact };

interface FormData {
	[key: string]: FormDataEntryValue;
}

const defaultProps: Props = {
	strings: { heading_1: 'Contactez-nous' },
	details: { shotText: '', location: 'Cavaillon (83)' },
	contact: { cellNumber: '', homeNumber: '', emailAdress: '' },
};

const ContactPage = (props: Props) => {
	const { strings, details, contact } = props;
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
			<h1>{strings.heading_1}</h1>

			<div className={s['content']}>
				<div className={s['left']}>
					<form onSubmit={handleSubmit}>
						<Input
							label={'Nom et Prénom'}
							name={'names'}
							placeholder={'Jean Pagnol'}
						/>

						<Input
							label={'Email'}
							name={'email'}
							type={'email'}
							placeholder={'jean.pagnol@provence.com'}
						/>

						<Input
							label={'Téléphone'}
							name={'tel'}
							type={'number'}
							placeholder={'0684848484'}
						/>

						<Input
							label={'Message'}
							name={'message'}
							type={'text-area'}
							placeholder={'Comment pouvons-nous vous aider?'}
						/>

						<Button size={'full'} type={'submit'} label={'Envoyer'} />
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

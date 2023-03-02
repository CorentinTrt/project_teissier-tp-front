import {
	ContactPayload,
	FooterData,
	FooterDetailsPayload,
	StrapiPayload,
} from '@c_types/T_footerData';

function isFooterDetails(object: unknown): object is FooterDetailsPayload {
	if (object !== null && typeof object === 'object') {
		return 'location' in object;
	}
	return false;
}

function isContact(object: unknown): object is ContactPayload {
	if (object !== null && typeof object === 'object') {
		return 'email_adress' in object;
	}
	return false;
}

export default function construFooterData(
	payloadDetails: StrapiPayload,
	payloadContact: StrapiPayload
): FooterData {
	const details: unknown = payloadDetails?.data?.attributes?.content;
	const contact: unknown = payloadContact?.data?.attributes?.content;

	if (isFooterDetails(details) && isContact(contact)) {
		return {
			details: {
				shotText: details.short_text,
				location: details.location,
			},
			contact: {
				cellNumber: contact.cell_number,
				homeNumber: contact.home_number,
				emailAdress: contact.email_adress,
			},
		};
	}

	return {
		details: { shotText: '', location: '' },
		contact: { cellNumber: '', homeNumber: '', emailAdress: '' },
	};
}

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
		return 'emailAddress' in object;
	}
	return false;
}

export default function construFooterData(
	payloadDetails: StrapiPayload,
	payloadContact: StrapiPayload
): FooterData {
	const details: unknown = payloadDetails?.data?.content;
	const contact: unknown = payloadContact?.data?.content;

	if (isFooterDetails(details) && isContact(contact)) {
		return {
			details: {
				shotText: details.shortText,
				location: details.location,
			},
			contact: {
				cellNumber: contact.cellNumber,
				homeNumber: contact.homeNumber,
				emailAdress: contact.emailAddress,
			},
		};
	}

	return {
		details: { shotText: '', location: '' },
		contact: { cellNumber: '', homeNumber: '', emailAdress: '' },
	};
}

interface Contact {
	cellNumber: string;
	homeNumber: string;
	emailAdress: string;
}
interface ContactPayload {
	cellNumber: string;
	homeNumber: string;
	emailAddress: string;
}

interface FooterDetails {
	shotText: string;
	location: string;
}
interface FooterDetailsPayload {
	shortText: string;
	location: string;
}

type FooterData = {
	details: FooterDetails;
	contact: Contact;
};

type StrapiPayload = {
	data: {
		content: ContactPayload | FooterDetailsPayload;
	};
};

export type {
	StrapiPayload,
	FooterData,
	Contact,
	ContactPayload,
	FooterDetails,
	FooterDetailsPayload,
};

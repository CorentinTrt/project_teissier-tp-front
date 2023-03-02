interface Contact {
	cellNumber: string;
	homeNumber: string;
	emailAdress: string;
}
interface ContactPayload {
	cell_number: string;
	home_number: string;
	email_adress: string;
}

interface FooterDetails {
	shotText: string;
	location: string;
}
interface FooterDetailsPayload {
	short_text: string;
	location: string;
}

type FooterData = {
	details: FooterDetails;
	contact: Contact;
};

type StrapiPayload = {
	data: {
		attributes: {
			content: ContactPayload | FooterDetailsPayload;
		};
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

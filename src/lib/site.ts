// Central site/contact configuration.
// Change CONTACT_EMAIL or add the Web3Forms key here (or via env) — one place.

export const CONTACT_EMAIL = 'hello@nexatlas.uz';
export const WHATSAPP = ''; // e.g. '+998 90 000 00 00' — shown when set

// Free, server-less form-to-email (https://web3forms.com).
// Get a key (enter your email on their site) and set NEXT_PUBLIC_WEB3FORMS_KEY.
// Until a key is set, the inquiry form shows the success state without sending.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';

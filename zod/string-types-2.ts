import * as z from "zod"

z.email();
z.uuid();
z.url();
z.httpUrl();       // http or https URLs only
z.hostname();
z.e164();          // E.164 phone numbers
z.emoji();         // validates a single emoji character
z.base64();
z.base64url();
z.hex();
z.jwt();
z.nanoid();
z.cuid();
z.cuid2();
z.ulid();
z.ipv4();
z.ipv6();
z.mac();
z.cidrv4();        // ipv4 CIDR block
z.cidrv6();        // ipv6 CIDR block
z.creditCard();    // credit card number (Luhn checksum)
z.currencyCode();  // ISO 4217 currency code
z.iban();          // IBAN (ISO 7064 mod-97 checksum)
z.hash("sha256");  // or "sha1", "sha384", "sha512", "md5"
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();
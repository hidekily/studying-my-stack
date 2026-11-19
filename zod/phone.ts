import * as z from "zod"

// validação de numero de celular eh so isso!

const phone = z.e164();
 
phone.parse("+15555555555"); // ✅
phone.parse("555-555-5555"); // ❌
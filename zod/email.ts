import * as z from "zod"

// o email do zod usa um Regex padrao deles la
z.email();

// para customizar o Regex (se vc for nerd o suficiente):

z.email({ pattern: / coloca seu regex aqui rei /});


//  o zod tem varias varios Regex prontos: 

// Zod's default email regex
z.email();
z.email({ pattern: z.regexes.email }); // equivalent
 
// the regex used by browsers to validate input[type=email] fields
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
z.email({ pattern: z.regexes.html5Email });
 
// the classic emailregex.com regex (RFC 5322)
z.email({ pattern: z.regexes.rfc5322Email });
 
// a loose regex that allows Unicode (good for intl emails)
z.email({ pattern: z.regexes.unicodeEmail });
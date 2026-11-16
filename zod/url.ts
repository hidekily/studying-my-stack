import * as z from "zod"

// o zod trata urls tambem, com regex...
// um exemplo:

const schema = z.url({ hostname: /^example\.com$/ });
 
schema.parse("https://example.com"); // ✅
schema.parse("https://zombo.com"); // ❌

// na maioria dos casos eh melhor usar o z.httpUrl, que basicamente ja faz o tratamento de url por si so
// sem precisar de parametros

z.httpUrl();
 
// equivalent to
z.url({
  protocol: /^https?$/,
  hostname: z.regexes.domain
});
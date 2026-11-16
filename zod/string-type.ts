import * as z from "zod"

// aqui eh uma das partes mais importantes do zod, porque, ele complemente o basico. 

z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().nonempty(); // alias for .min(1) -- aqui o zod fala que eh uma alternativa melhor para o min(1)
z.string().regex(/^[a-z]+$/);
z.string().startsWith("aaa");
z.string().endsWith("zzz");
z.string().includes("---");
z.string().uppercase();
z.string().lowercase();

// essa parte aqui nao tem mto oq explicar, eh mais decoreba mesmo

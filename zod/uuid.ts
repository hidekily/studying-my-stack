import * as z from "zod"

// essa parte aqui nao tem muita coisa, geralmente, voce quer gerar um ID por user, entao voce usa isso aqui:

z.uuid()

// ai tem algumas outras versoes

z.uuidv4()
z.uuidv6()
z.uuidv7()

// nos meus projetos eu geralmente uso o uuid normal mesmo
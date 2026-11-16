import * as z from "zod"

// aqui eh uma das coisas mais importantes do zod. Os types, aqui eh onde seu Schema vai ganhar vida
// definindo os types, voce garante segurança para os dados que chegam do front para o back (JSON) e que no final, vão para o seu DB (mto provavelmente)

// aqui sao os primitive types que o zod disponibiliza:

const schema = z.object({
    name: z.string(),
    xp: z.number(),
    coins: z.bigint(),
    alive: z.boolean(),
    clan: z.symbol(),
    race: z.undefined(),
    mana: z.null()
})

// p falar a verdade, muita das vezes voce vai usar apenas uns 3/4 dessa lista, mas eh bom saber ne
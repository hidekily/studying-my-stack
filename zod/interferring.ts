import * as z from "zod";

const Player = z.object({
    name: z.string(),
    xp: z.number()
})

// agora voce pode extrair e interffer (alterar/transmutar/modificar) o type usando:

type Player = z.infer<typeof Player>;
const player : Player = {name: "Alice", xp: 900}

// o zod explica que: As vezes, o type do input e o output pode variar, entao, voce usa:

// o transform para transformar o type do input
const MySchema = z.string().transform((val) => val.length) // (val) => val.length basicamente pega o value (input) e percorre ele por inteiro transformando ele por conta do transform()

type MySchemaIn = z.input<typeof MySchema>; // entra como string
type MySchemaOut = z.output<typeof MySchema>; // sai como number
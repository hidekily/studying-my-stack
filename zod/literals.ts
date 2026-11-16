import * as z from "zod"

//  o zod tambem utiliza literals (obiviamente)

// literals eh basicamente uma variavel que so aceita valores que sejam passados para ela

// exemplo:

const colors = z.literal(["red", "green", "blue"])

colors.parse("green") // ele aceita ✅
// agora, se voce fizer:
colors.parse("yellow") // ele recusa ❌

// voce pode fazer isso para outros valores tambem:

const nome = z.literal("Alice");
const numero = z.literal(7);
const numeroGrande = z.literal(2n);
const verdade = z.literal(true);

// para voce extrair valores de uma certa lista do zod, seja ela literal ou nao:

colors.values;
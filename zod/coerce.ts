import * as z from "zod"

// o zod tambem tem o COERCE!!!

// ele basicamente faz com que um input se mantenha no type que foi inserido: 

// exemplos:

const schema = z.coerce.string()

schema.parse('alice') // aqui ele faz "alice"
schema.parse(100) // aqui ele faz "100"
schema.parse(null) // auqi ele faz "null"
schema.parse(true) // aqui ele faz "true"

// e voce pode usar isso para qualquer tipo, seja ele (string, number, bigint ou boolean). Com:

const string = z.coerce.string()
const number = z.coerce.number()
const bigint = z.coerce.bigint()
const boolean = z.coerce.boolean()

// temos alguns outros types que ainda nao vimos, mas que, ja usei em alguns projetos 
// (como o uuid crypto e o date (que fazem uma criptografia para seu type, e o date, que gera a data))

// e o date pode ser usado no coerce tambem

const date = z.coerce.date()


// vou deixar aqui o codigo que o zod disponibiliza de como o coerce trata os booleans (muito importante saber disso):

const schemaDoZod = z.coerce.boolean(); // Boolean(input)
 
schema.parse("tuna"); // => true
schema.parse("true"); // => true
schema.parse("false"); // => true
schema.parse(1); // => true
schema.parse([]); // => true
 
schema.parse(0); // => false
schema.parse(""); // => false
schema.parse(undefined); // => false
schema.parse(null); // => false
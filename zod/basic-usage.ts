import * as z from "zod";

// isso aqui eu ja fiz em outros projetos. Eh uma estrutura basica do zod onde>

// eu crio um types
const User = z.object({
    name: z.string().optional(),
})


// o input teria que ter um json em uma aplicação funcional, onde, o json seria armazenado de acordo com o types
const input = {name: "teste"}


// entao, essa const data, basicamente valida o json que vem do front
const data = User.parse(input)


// e aqui, ao inves de ser um console.log, nos poderiamos usar por exemplo um fastify/node.js para retornar um erro ou a data
console.log(data.name)

// adicionalmente, poderiamos usar o drizzle (eu uso com postgres) para pegar essa const data validada, e jogar os dados dentro do db. Vamos ver mais para frente 


// codigo sem comentarios:

const Usuario = z.object({
    nome: z.string().optional(),
})

const inputB = {nome:"teste"}

const datab = Usuario.parse(inputB)

console.log(datab.nome)
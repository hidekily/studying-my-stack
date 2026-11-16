import * as z from "zod"

// o zod tem uma maneira muito boa de lidar com erros. Ao inves de usar try/catch blocks, ele ja faz esse tabalho para voce

// aqui um exemplo:

const Personagem = z.object({
    name: z.string(),
    xp: z.number()
})

const response = Personagem.safeParse({name: "teste", xp: 100}); // note que se voce colocar string no xp e int no name, o zod identifica isso e ja anuncia erro

//  aqui p zod basicamente:

if(!response.success){
    response.error; // se for diferente de sucesso, gera o erro do Zod
}else{
    response.data; // se nao, retorna a data do response
}


// SE, voce so quer saber se algo é valido ou nao, use apenas o .validate

Personagem.validate({name: "Alice", xp: 100}) // aqui ele retorna verdadeiro
Personagem.validate({name: 100, xp: "Alice"}) // aqui ele retorna falso


// condigo sem comentarios:

const char = z.object({
    nome: z.string(),
    exp: z.number() 
})

const res = char.safeParse({nome: "Bob", xp: 200});

if(!res.success){
    res.error;
}else{
    res.data;
}

char.validate({name: "Bob", exp: 200})
char.validate({name: 200, exp: 200})
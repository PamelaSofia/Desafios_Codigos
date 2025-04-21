//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//criar um programa onde tenha uma função para transformar uma entrada simples em algo diferente e especial

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// TODO: Após a váriavel, retorne a palavra pokemon; 
function combinandoNomesPokemons(palavra){
    let palavraGerada = palavra + "saur"
    return palavraGerada
}


// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);

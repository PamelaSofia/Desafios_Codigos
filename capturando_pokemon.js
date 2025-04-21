//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//criar um programa onde qual o jogador entrar no jogo de Pokemon, eçe irá digitar um número e receberá uma mensagem de boas-vindas com o nome do Pokemon escolhido no início, onde cada número corresponde a um pokemon diferente

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else{
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}
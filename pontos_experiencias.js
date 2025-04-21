//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//criar um programa onde a cada vitória, contra o ininmigo, seu nível de xp aumenta

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(gets());    //nível do inimigo
let num2 = parseInt(gets());    //dificuldade da batalha

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");

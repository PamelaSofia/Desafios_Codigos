//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//criar um programa onde um objeto represente um item mágico, onde o objeto deve ter atributos como tipo do item, dano, resistência (variando de acordo com o escolhido). criar também uma função onde será calculado o dano causado por item durante uma luta, levando em consideração o item escolhido

// Definição da classe ItemMagico
class ItemMagico {
//TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
    constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
    }
    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}
    
// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());
    
//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);
// TODO: Imprima os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);

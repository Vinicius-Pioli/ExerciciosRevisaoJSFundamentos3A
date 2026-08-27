// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Animal com o método emitirSom().
// Crie as classes Cachorro e Gato herdando de Animal.
// Sobrescreva emitirSom() em cada classe com um som diferente.
// Coloque os animais em um array e chame o método de cada um.
//
// Escreva sua solução abaixo:

class Animal {
  emitirSom() {
    return "Som de animal";
  }
}

class Cachorro extends Animal {
  emitirSom() {
    return "Au au!";
  }
}

class Gato extends Animal {
  emitirSom() {
    return "Miau!";
  }
}

const animais = [new Cachorro(), new Gato()];

animais.forEach(animal => console.log(animal.emitirSom()));
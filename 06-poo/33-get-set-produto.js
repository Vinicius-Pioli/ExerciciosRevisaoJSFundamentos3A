// EXERCÍCIO 33 - GETTERS E SETTERS
// Crie uma classe Produto com o campo privado #preco.
// Crie get preco e set preco. O setter não deve aceitar valores negativos.
// Crie um produto, altere o preço e mostre o resultado.
//
// Escreva sua solução abaixo:

class Produto {
  #preco = 0;

  get preco() {
    return this.#preco;
  }

  set preco(valor) {
    if (valor >= 0) {
      this.#preco = valor;
    }
  }
}

const produto = new Produto();
produto.preco = 50;
console.log(produto.preco); // Saída: 50
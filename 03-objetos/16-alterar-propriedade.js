// EXERCÍCIO 16 - ALTERANDO PROPRIEDADE
// Crie um objeto produto com nome, preco e estoque.
// Altere o preço e diminua uma unidade do estoque.
// Mostre o objeto antes e depois das alterações.
//
// Escreva sua solução abaixo:

const produto = {
  nome: "Notebook",
  preco: 3000,
  estoque: 10
};

console.log("Antes:", { ...produto });

produto.preco = 2700;
produto.estoque -= 1;

console.log("Depois:", produto);
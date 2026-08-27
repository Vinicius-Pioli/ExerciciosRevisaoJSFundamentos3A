// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco produtos contendo nome e preco.
// Utilize filter() para selecionar apenas os produtos que custam até R$ 100.
// Mostre o novo array.
//
// Escreva sua solução abaixo:

const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Tênis", preco: 250 },
  { nome: "Caneca", preco: 30 },
  { nome: "Mochila", preco: 120 },
  { nome: "Livro", preco: 80 }
];

const produtosBaratos = produtos.filter(produto => produto.preco <= 100);

console.log(produtosBaratos);
// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de filmes.
// Cada filme deve possuir titulo, genero e duracao.
// Percorra o array e mostre o título de cada filme.
//
// Escreva sua solução abaixo:

const filmes = [
  { titulo: "Matrix", genero: "Ficção Científica", duracao: 136 },
  { titulo: "O Senhor dos Anéis", genero: "Fantasia", duracao: 178 },
  { titulo: "O Chefão", genero: "Crime", duracao: 175 }
];
filmes.forEach(filme => {
  console.log(filme.titulo);
});
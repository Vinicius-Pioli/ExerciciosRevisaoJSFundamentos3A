// EXERCÍCIO 10 - FINDINDEX - USUÁRIO
// Crie um array com os nomes: Ana, Carlos, Beatriz e Daniel.
// Utilize findIndex() para descobrir a posição de "Beatriz".
// Mostre o índice encontrado.
//
// Escreva sua solução abaixo:

const nomes = ["Ana", "Carlos", "Beatriz", "Daniel"];
const indice = nomes.findIndex(nome => nome === "Beatriz");

console.log(indice); 
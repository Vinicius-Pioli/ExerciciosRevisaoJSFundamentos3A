// EXERCÍCIO 06 - FOREACH - ALUNOS
// Crie um array com cinco nomes de alunos.
// Utilize forEach() para mostrar cada nome acompanhado de sua posição.
// Exemplo: 1 - Ana
//
// Escreva sua solução abaixo:

const alunos = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"];

alunos.forEach((nome, index) => {
  console.log(`${index + 1} - ${nome}`);
});
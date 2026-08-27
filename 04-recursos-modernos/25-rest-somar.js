// EXERCÍCIO 25 - REST PARAMETERS
// Crie uma função somarNumeros que receba uma quantidade indefinida de números
// utilizando Rest. Use reduce() dentro da função para retornar a soma.
// Teste com pelo menos cinco números.
//
// Escreva sua solução abaixo:

function somarNumeros(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

const resultado = somarNumeros(10, 20, 30, 40, 50);
console.log(resultado); // Saída: 150
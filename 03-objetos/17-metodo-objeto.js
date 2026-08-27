// EXERCÍCIO 17 - MÉTODO DE OBJETO
// Crie um objeto retangulo com largura, altura e um método calcularArea().
// O método deve retornar largura * altura. Mostre a área no console.
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
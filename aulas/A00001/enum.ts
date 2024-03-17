// estrutura de dados não ordenada
// quado tem vário valores e precisa enumerar eles

// atribui valores automaticamente
enum Colors {
  VERMELHO, // 0 // = 1 assumiria os valores sequenciais as utras chaves
  AZUL, // 1
  AMARELO, // 2
  ROXO = "purple",
  VERDE, // sem valor para automaticamente atribuir
  VERDE1 = 1001,
  ROSA, // funciona a partir da atribuição de número acima
}

console.log(Colors);
console.log(Colors[0]);
console.log(Colors[100]); // não alerta a valores não existentes
console.log(Colors.VERMELHO);

enum Cores {
  red = "#FF0000",
}

function setColor(cor: Cores): void {
  console.log(Colors[cor]);
}

setColor(Cores.red);
setColor(123);

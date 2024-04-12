// estrutura de dados não ordenada
// quado tem vário valores e precisa enumerar eles

// atribui valores automaticamente
enum Colorss {
  VERMELHO, // 0 // = 1 assumiria os valores sequenciais as utras chaves
  AZUL, // 1
  AMARELO, // 2
  ROXO = "purple",
  // VERDE, // sem valor para automaticamente atribuir
  VERDE1 = 1001,
  ROSA, // funciona a partir da atribuição de número acima
}

console.log(Colorss);
console.log(Colorss[0]);
console.log(Colorss[100]); // não alerta a valores não existentes
console.log(Colorss.VERMELHO);

enum Cores {
  red = "#FF0000",
}

const Cores2 = {
  red: "#FF0000",
};

function setColor(cor: Cores): void {
  console.log(Cores[cor]);
}

function getColor(cor: keyof typeof Cores): string {
  return Cores[cor];
}

function getColor2(cor: keyof typeof Cores2): string {
  return Cores2[cor];
}

getColor("red");

setColor(Cores.red);
setColor(123);
getColor2("red");

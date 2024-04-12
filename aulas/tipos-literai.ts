/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
let x1 = 10;
x1 = "adadad";

let x2: 100 = 100;
let x3 = 100 as const;
const x4 = 100;

const pessoa = {
  nome: "lalalqa" as const,
  sobrenome: "alteravel",
};

pessoa.nome = "s"; // proibido
console.log(pessoa); // mouse em cima de pessoa mostra o nome

function pickColor(cor: "red" | "green" | "yellow") {
  console.log(cor);
  return cor;
}

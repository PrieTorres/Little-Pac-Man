/* eslint-disable @typescript-eslint/no-unused-vars */
const nome: string = "nome"; // : ... é o type anotation do typescript

// arrays
const myArray: Array<number> = [1, 2, 3];
const myArray2: number[] = [1, 2, 3];

//objetos
const obj1: {
  nome: string;
  idade: number;
  propriedadeOpcional?: string;
} = {
  nome: "",
  idade: 101,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const div: (x: number, y: number) => number = (x, y) => x / y;

console.log(`${nome} ${obj1.propriedadeOpcional}`);

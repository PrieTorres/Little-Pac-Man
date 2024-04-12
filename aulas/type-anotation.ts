/* eslint-disable @typescript-eslint/no-unused-vars */
const nome: string = "nome"; // : ... é o type anotation do typescript

// ? arrays
const myArray: Array<number> = [1, 2, 3];
const myArray2: number[] = [1, 2, 3];

function multiplicAll(...args: Array<number>): number {
  return args.reduce((total, val) => total *= val, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((total, val) => total + val);
  return args.reduce((total, val) => total += val, "");
}

// --- readonly arrays
const array1: readonly string[] = ["nome", "sobrenome"];
const array2: ReadonlyArray<string> = ["nome", "sobrenome"];


// ? Funções ---------------------------------------------------------------------------------- //
function soma(x: number, y: number): number {
  return x + y;
}

const div: (x: number, y: number) => number = (x, y) => x / y;
// const noreturn: void = () => { console.log() }; // erro
function x() { console.log() };
function y(): void { console.log() };

// ? Tupla ----------------------------------------------------------------------------------------- //
const dados: readonly [number, string] = [1, "Nome"];
const dados1: [number, string, string] = [1, "Nome", "teste"];
const dados2: [number, string, string?] = [1, "Nome"];
const dados3: [number, string, ...string[]] = [1, "Nome"];

dados[0] = 1; // erro
dados.push("aaa"); // erro
dados1.push("aaa");
dados1[0] = 1;
dados2[0] = 1;

dados[2] = "teste" // errro não pode atribiur valor a undefenid


// ? objetos ------------------------------------------------------------------------------------- //
const obj1: {
  nome: string;
  idade: number;
  propriedadeOpcional?: string;
  [key: string]: unknown; // aceita qualquer chave, de qualquer valor, difícil ser usado
  readonly naoAlteravel: boolean;
} = {
  nome: "",
  idade: 101,
  naoAlteravel: true
};

const obj2 = {
  prop1: "string",

  exibir(): void {
    console.log(this.prop1);
  }
}

const objUnknown: Record<string, unknown> = {
  prop1: "aaa"
}

obj2.prop1 = "outra string";
obj2.prop2 = "chave nova que dá erro"; // erro
objUnknown.prop2 = "chave nova que dá erro"; // não reconhece o obj
obj1.prop2 = "nova chave" // não vai ter a chave na construção

obj1.naoAlteravel = false;


console.log(`${nome} ${obj1.propriedadeOpcional}`);

// ? null e undefined --------------------------------------------------------------------- //

// cuidade com params opcionais, todo paramentro opcional pode ser undefined
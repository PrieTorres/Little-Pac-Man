// intercessão entre 2 conjuntos
type TemNome = { nome: string; };
type TemSobrenome = { sobrenome: string; };
type TemIdade = { sobrenome: string; };

type Pessoa1 = TemIdade | TemNome | TemSobrenome; // pode ter qualquer um dos items
type Pessoa2 = TemIdade & TemNome & TemSobrenome; // precisa ter todos os tipos

export const pessoa1: Pessoa1 = { // ao avisa q os atributos sao opcionais
  nome: "aaa",
};

export const pessoa2: Pessoa2 = {
  nome: "aaa",
};

type AB = "a" | "b";
type AC = "a" | "c";
type AD = "d" | "a";
type intersecao = AB & AC & AD;

export const a1: intersecao = "a"; // só pode ser a

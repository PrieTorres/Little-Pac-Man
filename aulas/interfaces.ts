// interfaces e types tem o mesmo propósito
// interface é mais para POO e type é mais para programação funcional
interface TemNome { nome: string; };
interface TemSobrenome { sobrenome: string; };
interface NomeCompleto { nomeCompleto(): string; };

interface TipoPessoa extends TemNome, TemSobrenome, NomeCompleto { };
// type TipoPessoa = TemNome & TemSobrenome & NomeCompleto;

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string, public idade: number) {

  }

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

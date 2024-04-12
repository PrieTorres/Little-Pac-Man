class Empresa {
  public readonly nome: string; // public é redundante, é sempre public se não especificado
  private readonly colaboradores: Colaborador[] = []; // read-only Colaborador[], se quiser que o array não seja mutável
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColabs(){
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

const empresa1 = new Empresa("teste", "11.111.111/0001-11");
// empresa1.nome = "troca nao permitida";

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const colaborador1 = new Colaborador("a1", "b1");
const colaborador2 = new Colaborador("a2", "b2");
const colaborador3 = new Colaborador("a3", "b3");

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColabs();

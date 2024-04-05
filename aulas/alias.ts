// pode criar um type
// começar com letra maiúscula
type Idade = number;
type CorRGB = "red" | "blue" | "yellow";
type CorCMYX = "cian" | "orange" | "lime";
type CorPreferida = CorRGB | CorCMYX;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa: Pessoa = { // salario missing
  nome: "sss",
  idade: 1,
  // salario: "", // erro por estar fora do tipo
  corPreferida: "cian", // vai sugerir entre as cores permitidas
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

setCorPreferida(pessoa, "lime");

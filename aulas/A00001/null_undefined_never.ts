// undefined é sempre que o valor não foi definido
export let x;

// parametros opcionais sempre podem ocasionar um undefined
export function creatPerson(
  name: string,
  lastName?: string,
): {
  name: string;
  lastName?: string;
} {
  return {
    name,
    lastName,
  };
}

// null é mais comum,como em retorno de funções para ter uma saída padrão para conferir depois, por exemplo padronização em caso fora do esperado, como não achar um dado no banco de dados

// type NEVER
// poderia usar void, mas simboliza que a função nunca vai retornar nada
// geralmente usada em disparos de erros, parar a aplicação
export function criarError(): never {
  throw new Error("erro");
}

const body = document.querySelector("body");
const body2 = document.querySelector("body")!; // non null assertion - NÃo RECOMENDADO
const body3 = document.querySelector("body") as HTMLBodyElement; // tem todas as tags,
// usar o "as" apenas quando há absoluta certeza do tipo e que ele nunca vai ser null

body.style.color = "red";
if (body) body.style.color = "red";

body2.style.color = "red";

body3.style.color = "red";

// NAO RECOMENDADO -->
// "as" nâo funciona com todos os tipos em todos os casos, precisa ser um subtipo
const body4 = document.querySelector("body") as number;
// se quiser FORÇAR a implemetação é possível usar
const body5 = document.querySelector("body") as unknown as number;

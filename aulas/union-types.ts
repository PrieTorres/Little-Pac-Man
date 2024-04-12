export let a: string | number;

function addOrConcat(a: string | number | boolean, b: string | number | boolean) {
  // return a + b; // not allowec
  if (typeof a == "number" && typeof b == "number") return a + b;
  // if (typeof a == "string" && typeof b == "string") return a + b;
  return `${a}${b}`;
}

addOrConcat(1, 1);
addOrConcat("1", "1");

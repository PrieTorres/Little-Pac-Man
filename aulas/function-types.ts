type mapStringsCb = (item: string) => string; 

function mapStrings(array: string[], cb: mapStringsCb): string[] {
  const arr: string[] = [];

  for(let i = 0; i < array.length; i++){
    arr.push(cb(array[i]));
  }

  return arr;
}

const abc = ["a", "b", "c"];
const abc2 = mapStrings(abc, (str: string) => str.toUpperCase()); // mesmo sem especificar o str como string o typescript já sabe que é por conta do type mapStringsCb

console.log(abc2);

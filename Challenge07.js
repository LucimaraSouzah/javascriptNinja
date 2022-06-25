let arr = [
  "Leonardo",
  30,
  { cor: "preto" },
  true,
  ["Maçã", "Laranja", "Banana"],
];
console.log(arr);

function addItem(item) {
  arr.push(item);
  return arr;
}

console.log(addItem(["Bernardo", 10, false]));
console.log("O segundo elemento do segundo array é " + arr[5][1]);
console.log("O primeiro array tem " + arr.length + " items.");
console.log("O segundo array tem " + arr[5].length + " items.");

let pares = 10;

while (pares <= 20) {
  pares % 2 === 0 ? console.log(pares) : "";
  pares++;
}

console.log("---------------------");
let impares = 10;

while (impares <= 20) {
  impares % 2 != 0 ? console.log(impares) : "";
  impares++;
}

console.log("---------------------");

for(let par = 100; par <= 120; par++) {
    par % 2 === 0 ? console.log(par) : ''
}

console.log("---------------------");

for(let impar = 111; impar <= 125; impar++) {
    impar % 2 != 0 ? console.log(impar) : ''
}
console.log("Number Objects Array:");
let numberObjects = [];
for (let i = 1; i <= 10; i++) {
  numberObjects.push({ number: i });
}
console.log(numberObjects);

let justNumbers = numberObjects.map((item) => item.number);

console.log("\nJust Numbers:");
console.log(justNumbers);

let justMod2Or3 = justNumbers.filter(function (item) {
  return item % 2 == 0 || item % 3 == 0;
});

console.log("\nJust module of division by 2 or 3:");
console.log(justMod2Or3);

let operation = justMod2Or3.reduce(function (acumulado, atual) {
  return (acumulado + 1) * atual;
}, 0);

console.log("\nOperation:" + operation);

let operation2 = justMod2Or3.reduceRight(function (acumulado, atual) {
  return (acumulado + 1) * atual;
}, 0);

console.log("\nOperation 2:" + operation2);

let name = ["LU", "CI", "MA", "RA"];

let reduceP = name.reduce(function (acumulado, atual) {
  return acumulado + "P" + atual;
}, "");

console.log('\nSeu nome na língua do "P":' + reduceP);

let inversedName = name.reduceRight(function (acumulado, atual) {
  return acumulado + atual;
});
console.log("\nInversed Name:" + inversedName);

console.log(numberObjects);

console.log("\nExiste um { number: 2 } em numberObjects?");
if (numberObjects.indexOf({ number: 2 }) > -1) {
  console.log("Existe um objeto { number: 2 } em numberObjects!");
} else {
  console.log("Não existe um objeto { number: 2 } em numberObjects :(");
}

console.log("\nE buscando a partir do último índice, o { number: 2 } existe?");
if (numberObjects.lastIndexOf({ number: 2 }) > -1) {
    console.log("Existe um objeto { number: 2 } em numberObjects!");
  } else {
    console.log("Não existe um objeto { number: 2 } em numberObjects :(");
  }

console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
if(Array.isArray(justMod2Or3) == true) {
    console.log(justMod2Or3.toString())
} else {
    console.log('Não é um array')
}
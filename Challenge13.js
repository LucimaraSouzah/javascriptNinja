let array = [1, 2, 3, 4, 5];

console.log("O array em formato de string é: " + [1, 2, 3, 4, 5].toString());

let sul = ["Paraná", "Santa Catarina", "Rio Grande Do Sul"];
let sudeste = ["Minas Gerais", "São Paulo", "Rio de Janeiro", "Espírito Santo"];

let Brasil = sul.concat(sudeste);

console.log("\nAlguns Estados do Brasil:" + Brasil);
Brasil.unshift("Acre", "Amazonas", "Pará");
console.log("\nAlguns Estados do Brasil:" + Brasil);
console.log("\nEstado removido:" + Brasil.shift());

let newSul = Brasil.slice(2, 5);

console.log("\nEstados do Sul do Brasil:" + newSul);

console.log("\nAlguns Estados do Brasil:" + Brasil);

let nordeste = [
  "Maranhão",
  "São Luís",
  "Piauí",
  "Teresina",
  "Ceará",
  "Fortaleza",
  "Rio Grande do Norte",
  "Natal",
  "Paraíba",
  "João Pessoa",
  "Pernambuco",
  "Recife",
  "Alagoas",
  "Maceió",
  "Sergipe",
  "Aracaju",
  "Bahia",
  "Salvador",
];

console.log("\nEstados do Nordeste:" + nordeste);

let newSudeste = Brasil.splice(4, 4);
console.log("\nEstados em newSudeste:" + newSudeste);

Brasil = Brasil.concat(nordeste);
console.log("\nAlguns estados do Brasil:" + Brasil);

let newBrasil = [];
Brasil.forEach(function (item, index) {
  newBrasil.push({
    id: index,
    estado: item,
  });
});

console.log(newBrasil);

let every = Brasil.every(function (item) {
  return item.length > 7;
});

console.log("\nTodos os estados de `brasil` tem mais de 7 letras? ");
console.log(
  every
    ? "Sim, todos os estados tem mais de 7 letras!"
    : "Nem todos os estados tem mais de 7 letras!"
);

let some = Brasil.some(function (item) {
  return item == "Ceará";
});

console.log("\nCeará está incluído em `brasil`? " + some);

let newArray = newBrasil.map(function (item, index) {
  return {
    id: item.id + 1,
    estado: item.estado + " pertence ao Brasil",
  };
});

console.log("\nnewBrasil agora com mais informações:");
console.log(newArray);

let filter = newArray.filter((item) => item.id % 2 == 0);

console.log("\nEstados com ID par:");
console.log(filter);

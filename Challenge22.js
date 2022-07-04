let person1 = {
  name: "Fábio",
  lastname: "Silva",
};
let person2 = {
  name: "Léticia",
  lastname: "Rodrigues",
};

function getFullName() {
  return this.name + " " + this.lastname;
}

console.log("O nome das pessoas é:");
console.log(getFullName.call(person1));
console.log(getFullName.call(person2));

function sum() {
  return Array.prototype.reduce.call(
    arguments,
    function (accumulated, actualItem) {
      return +accumulated + +actualItem;
    }
  );
}

console.log("\nSomar alguns números:");
console.log(sum(2, 9, 10));

let userEntry = prompt("Entre com alguns números que serão somados.");
console.log("\nEntrada do usuário:");
console.log(userEntry);

function justNumbers(entry) {
  return entry.replace(/\D+/g, ",").split(',')
}

console.log("\nFunção que limpa entrada do usuário (somente números):");
console.log(justNumbers("10ferdi2kdwo45"));

console.log("\nEntrada do usuário limpa. Somente números:");
let numbers = justNumbers(userEntry);
console.log(numbers);

console.log("\nSomar números entrados pelo usuário:");
console.log(sum.apply(sum, numbers));

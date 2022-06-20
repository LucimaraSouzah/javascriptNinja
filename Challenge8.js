let sum = function calculateSum(a, b) {
  return a + b;
};

console.log("A soma de " + 10 + " e " + 20 + " é igual a " + sum(10, 20));

console.log("O nome da função que faz a soma é " + sum.name);

function showName() {
  return "Lucimara";
}

let varShowName = showName;

console.log("A função " + varShowName.name + " retorna " + varShowName());

function calculator(operator) {
  return function (number1, number2) {
    let result;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      case "%":
        result = number1 % number2;
        break;
      default:
        return "Operação não encontrada";
    }
    return (
      "Resultado da operação: " +
      number1 +
      " " +
      operator +
      " " +
      number2 +
      " = " +
      result
    );
  };
}

let summ = calculator("+");
let subtracion = calculator("-");
let multiplication = calculator("*");
let division = calculator("/");
let mod = calculator("%");

console.log(summ(10, 50));
console.log(subtracion(20, 5));
console.log(multiplication(5, 8));
console.log(division(68, 4));
console.log(mod(25, 5));

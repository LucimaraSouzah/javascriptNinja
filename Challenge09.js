function myFunction() {
  var number1 = 10;
  var number2 = 20;
  console.log("Na função `myFunction`, o primeiro número é", number1);
  console.log("Na função `myFunction`, o segundo número é", number2);
  return number1 + number2;
}
myFunction();

function myFunction2() {
  var number1 = 10;
  var number2 = 20;
  var sum = function sum() {
    return number1 + number2;
  };
  console.log("A soma de 10 e 20 é igual a", sum ? sum() : undefined);
  return sum();
}
myFunction2();

function myFunction3() {
  var number1 = 40;
  var number2 = 50;
  console.log("Na função myFunction3, number1 é igual a", number1);
  function sum() {
    return number1 + number2;
  }
  console.log("A soma de 40 e 50 é igual a", sum());
  return sum();
}
myFunction3();

function calculator(numero1, numero2) {
  return function (callback) {
    return callback(numero1, numero2);
  };
}
let soma = calculator(100, 10);
console.log(
  soma(function (numero1, numero2) {
    let resultado = numero1 + numero2
    return 'O resultado da soma é: ' + resultado
  })
);

let subtracao = calculator(100, 10);
console.log(
  subtracao(function (numero1, numero2) {
    let resultado = numero1 - numero2
    return 'O resultado da subtracao é: ' + resultado
  })
);

let multiplicacao = calculator(100, 10);
console.log(
  multiplicacao(function (numero1, numero2) {
    let resultado = numero1 * numero2
    return 'O resultado da multiplicacao é: ' + resultado
  })
);

let divisao = calculator(100, 10);
console.log(
    divisao(function (numero1, numero2) {
    let resultado = numero1 / numero2
    return 'O resultado da divisao é: ' + resultado
  })
);

let modulo = calculator(100, 10);
console.log(
    modulo(function (numero1, numero2) {
    let resultado = numero1 % numero2
    return 'O resultado do resto da divisão é: ' + resultado
  })
);
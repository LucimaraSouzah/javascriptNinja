var five = Number("5");
console.log(five + " é número?", typeof five === "number");

var concat = String(10) + 10;
console.log(
  '"' + concat + '" é uma string? E é igual a "1010"?',
  typeof concat === "string"
);

let operation = {
  "+": function soma(number1, number2) {
    return number1 + number2;
  },
  "-": function subtracao(number1, number2) {
    return number1 - number2;
  },
  "*": function multiplicacao(number1, number2) {
    return number1 * number2;
  },
  "/": function divisao(number1, number2) {
    return number1 / number2;
  },
  "%": function modulo(number1, number2) {
    return number1 % number2;
  },
};

function isOperatorValid(operator) {
  return !!operation[operator];
}

function calculator(operator) {
  if (!isOperatorValid(operator)) {
    return false;
  } else {
    return function (a, b) {
      if (typeof a != "number" && typeof b != "number") {
        return false;
      } else {
        return operation[operator](a, b);
      }
    };
  }
}

function showOperationMessage(operator, number1, number2) {
  return "A operação " + number1 + " " + operator + " " + number2 + " = ";
}

function showErrorMessage(operator) {
  return "Operação " + operator + " não permitida!";
}

let number1 = 0;
let number2 = 0;
let operationSignal;

operationSignal = "+";
let soma = calculator(operationSignal);
if (soma) {
  number1 = 10;
  number2 = 12;
  console.log(
    showOperationMessage(operationSignal, number1, number2),
    soma(number1, number2)
  );
} else {
  console.log(showErrorMessage(operationSignal));
}

operationSignal = "-";
let subtracao = calculator(operationSignal);
if (subtracao) {
  number1 = 10;
  number2 = 12;
  console.log(
    showOperationMessage(operationSignal, number1, number2),
    subtracao(number1, number2)
  );
} else {
  console.log(showErrorMessage(operationSignal));
}

operationSignal = "*";
let multiplicacao = calculator(operationSignal);
if (multiplicacao) {
  number1 = 10;
  number2 = 12;
  console.log(
    showOperationMessage(operationSignal, number1, number2),
    multiplicacao(number1, number2)
  );
} else {
  console.log(showErrorMessage(operationSignal));
}

operationSignal = "/";
let divisao = calculator(operationSignal);
if (divisao) {
  number1 = 10;
  number2 = 12;
  console.log(
    showOperationMessage(operationSignal, number1, number2),
    divisao(number1, number2)
  );
} else {
  console.log(showErrorMessage(operationSignal));
}

operationSignal = "%";
let modulo = calculator(operationSignal);
if (modulo) {
  number1 = 10;
  number2 = 12;
  console.log(
    showOperationMessage(operationSignal, number1, number2),
    modulo(number1, number2)
  );
} else {
  console.log(showErrorMessage(operationSignal));
}

operationSignal = "lala";
let invalid = calculator(operationSignal);
if (invalid) {
  number1 = 10;
  number2 = 12;
  console.log(
    showOperationMessage(operationSignal, number1, number2),
    invalid(number1, number2)
  );
} else {
  console.log(showErrorMessage(operationSignal));
}

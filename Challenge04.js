let isTruthy = function (param) {
  return !!param;
};

isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);

isTruthy(1);

let carro = {
  marca: "fiat",
  modelo: "economic",
  placa: "FIC0218",
  ano: 2010,
  cor: "prata",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};

carro.mudarCor = function (cor) {
  carro.cor = cor;
};

carro.obterCor = function () {
  return carro.cor;
};

carro.obterModelo = function () {
  return carro.modelo;
};

carro.obterMarca = function () {
  return carro.marca;
};

carro.obterMarcaModelo = function () {
  return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
};

carro.adicionarPessoas = function (numeroPessoas) {
  let totalPessoas = carro.quantidadePessoas + numeroPessoas;
  if (numeroPessoas >= carro.assentos) {
    return "O carro já está lotado";
  }

  if (totalPessoas > carro.assentos) {
    let resultado = 0;
    resultado = carro.assentos - carro.quantidadePessoas;
    let pluralOUsingular = resultado === 1 ? "pessoa" : "pessoas";
    return "Só cabem mais " + resultado + " " + pluralOUsingular;
  }

  carro.quantidadePessoas += numeroPessoas;
  return "Já temos " + carro.quantidadePessoas + " no carro!";
};

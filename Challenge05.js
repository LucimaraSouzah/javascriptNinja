let receberArray = [4, 6, 7, 10, 7];

function array(arg) {
  return arg;
}

console.log(array(receberArray[1]));

function doisArgs(array, number) {
  return array[number];
}

console.log(doisArgs(receberArray, 3));

let variosTipos = ["string", 10, [1, 5, 6], { cor: "preto", valor: 0 }, true];

console.log(doisArgs(variosTipos, 0));
console.log(doisArgs(variosTipos, 1));
console.log(doisArgs(variosTipos, 2));
console.log(doisArgs(variosTipos, 3));
console.log(doisArgs(variosTipos, 4));

function book(livro) {
  let todosLivros = {
    CódigoLimpo: {
      quantidadePagina: 400,
      autor: "Robert Cecil Martin",
      editora: "Alta Books",
    },
    ExpressõesRegulares: {
      quantidadePagina: 300,
      autor: "Aurelio Marinho Jargas",
      editora: "Novatec Editora",
    },
    ArquiteturaLimpa: {
      quantidadePagina: 350,
      autor: "Robert Cecil Martin",
      editora: "Alta Books",
    },
  };

  return !livro ? todosLivros : todosLivros[livro];
}

console.log(book());

console.log('O livro Código Limpo tem: '+ (book('CódigoLimpo').quantidadePagina) + ' páginas!')
console.log('O autor do livro Expressões Regulares é: '+ (book('ExpressõesRegulares').autor))
console.log('A editora da Arquitetura Limpa é: '+ (book('ArquiteturaLimpa').editora))



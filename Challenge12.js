let person = {
  name: "Lucimara",
  lastname: "Assis",
  age: 19,
};

console.log('Propridades de "person" :' + Object.keys(person));

let books = [];

books.push(
  { name: "Harry Potter e a Pedra Filosofal", pages: 300 },
  { name: "Código Limpo", pages: 500 },
  { name: "Amor e Gelato", pages: 300 }
);

console.log("\nLista de Livros: ");
console.log(books);

console.log("\nLivro que está sendo removido:");
console.log(books.pop());

console.log("\nAgora sobraram somente os livros:");
console.log(books);

console.log("\nLivros em formato string:");
books = JSON.stringify(books)
console.log(books);

console.log("\nAgora os livros são objetos novamente:");
books = JSON.parse(books)
console.log(books);

for (let i = 0; i <= Object.keys(books).length; i++) {
    for (let prop in books[i]) {
        console.log(prop + ': ' + books[i][prop])
    }
}

let myName = ['L', 'U', 'C', 'I', 'M', 'A', 'R', 'A']

console.log( '\nMeu nome é: ' + myName.join('') );
console.log( '\nMeu nome invertido é: ' + myName.reverse().join(''));
console.log( '\nAgora em ordem alfabética: ' + myName.sort().join(''));
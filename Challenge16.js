let name = 'Lucimara'
for(var i = 0, len = name.length; i < len; i++) {
    console.log(name.charAt(i) + ' é a ' +  (i + 1) + 'ª letra do meu nome.');
}


let fullName = 'lucimara-aparecida-de-souza-assis'
let newFullName = fullName.split('-').map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}).join(' ')
console.log( '\nNome convertido à partir de um slug:' );
console.log(fullName)
console.log(newFullName)

let array = ['Maria', 'João', 'Pedro', 'Gustavo', 'Elisa']
let newArray = array.reduce(function(acumulado, atual, index) {
    var separator = array.length - 1 === index ? ' e ': ', '
    return acumulado + separator + atual
}).concat(' são meus amigos!')
console.log(newArray)

let rob = 'Roberto'
console.log( '\nEra "Roberto", agora é: ' + rob.replace('to', 'ta'));

let fer = 'Fernando'
console.log( '\nParte de uma string: ' + fer.slice(3));

let myName = 'Lucimara'
let myNewName = []
for (let i = 0, len = myName.length; i < len; i ++) {
    myNewName.push(i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase())
}
console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
console.log(myNewName.join(' '))
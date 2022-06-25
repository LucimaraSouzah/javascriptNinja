let qualquer = {}

let pessoa = {
    nome: 'Pedro', 
    sobrenome: 'Augusto',
    sexo: 'Masculino',
    idade: 20, 
    altura: 1.80,
    peso: 70,
    andando: false,
    caminhouQuantosMetros: 0,
}

pessoa.fazerAniversario = function () {
    pessoa.idade++
}

pessoa.andar = function (metros) {
    pessoa.caminhouQuantosMetros += metros 
    pessoa.andando = true
}

pessoa.parar = function () {
    pessoa.andando = false
}

pessoa.nomeCompleto = function () {
    return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome
}

pessoa.mostrarIdade = function () {
    return 'Olá, eu tenho ' + pessoa.idade + ' anos.'
}

pessoa.mostrarPeso = function () {
    return 'Eu peso ' + pessoa.peso + 'Kg'
}

pessoa.mostrarAltura = function() {
    return 'Minha altura é ' + pessoa.altura + 'm'
}

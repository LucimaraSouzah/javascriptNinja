function soma(a,b) {
    return a + b
}

let invocation = soma(2,5) + 5
console.log(invocation)

let novaVariavel 

function declararvalor () {
    novaVariavel = 10
    return `O valor da variável agora é ${novaVariavel}` 
}

declararvalor()

console.log(declararvalor())


function receberArg (a,b,c) {
    if (a == undefined || b == undefined || c == undefined) {
        return 'Preencha todos os valores corretamente'
    }
    return (a * b * c) + 2
}

receberArg(2, 4)

console.log(receberArg(2,4))

console.log(receberArg(2,4,1))


function threeArgs (a,b,c) {
    if (a != undefined && b == undefined && c == undefined) {
        return a
    } else if (a != undefined && b != undefined && c == undefined) {
        return a + b 
    } else if (a != undefined && b != undefined && c != undefined) {
        return (a + b)/c 
    } else if (a == undefined && b == undefined && c == undefined){
        return false
    } else {
        return null
    }
}

console.log(threeArgs(1,2))
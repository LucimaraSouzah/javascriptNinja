function Person(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.getFullName = function getFullName() {
        return this.name + ' ' + this.lastName
    }  
    this.getAge = function getAge() {
        return this.age
    }
    this.addAge = function addAge() {
        this.age += arguments[0]
        return this
    }
}

let Lucimara = new Person('Lucimara', 'Assis', 19)
let Celma = new Person('Celma', 'Assis', 40)
let Jorge = new Person('Jorge', 'Assis', 50)

console.log( 'Novas pessoas criadas à partir de Person:' );
console.log(Lucimara)
console.log(Celma)
console.log(Jorge)

console.log( '\nNomes das pessoas:' );
console.log(Lucimara.getFullName())
console.log(Celma.getFullName())
console.log(Jorge.getFullName())

console.log( '\nIdade das pessoas:' );
console.log(Lucimara.getFullName() + ' tem ' + Lucimara.getAge() + ' anos.')
console.log(Celma.getFullName() + ' tem ' + Celma.getAge() + ' anos.')
console.log(Jorge.getFullName() + ' tem ' + Jorge.getAge() + ' anos.')

console.log( '\nNova idade das pessoas:' );
Lucimara.addAge(2)
Celma.addAge(5)
Jorge.addAge(10)
console.log(Lucimara.getFullName() + ' agora tem ' + Lucimara.getAge() + ' anos.')
console.log(Celma.getFullName() + ' agora tem ' + Celma.getAge() + ' anos.')
console.log(Jorge.getFullName() + ' agora tem ' + Jorge.getAge() + ' anos.')

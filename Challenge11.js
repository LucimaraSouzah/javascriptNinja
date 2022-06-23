let once = false;

do {
  console.log("Entrou ao menos uma vez");
} while (once);

let person = {
  name: "Lucimara",
  age: 19,
  weight: 76,
  birthday: "31/08/2002",
};

let counter = 0;
for (let dados in person) {
  console.log("The " + dados + " of person is " + person[dados]);
  counter++;
}
console.log("The person has " + counter + " properties");

function moreThan(age) {
  return person.age > age;
}
console.log("The person has more than 25 years old?", moreThan(25));

let numbers = [];
for (let i = 0; i <= 20; i++) {
  if (i > 10) {
    break
}
numbers.push(i);
}
console.log(numbers)

numbers = []
for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    continue
}
numbers.push(i);
}
console.log(numbers)
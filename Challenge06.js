let championship = "Copa do Brasil";

console.log(championship);

let teams = ["Cruzeiro", "Atlético", "Flamengo", "Santos", "Vasco"];
console.log("Times que estão participando do campeonato: ", teams);

function showTeamPosition(number) {
  if (number <= teams.length) {
    let position = number - 1;
    return "O time que está em " + number + "º" + " é o " + teams[position];
  } else {
    return "Não temos a informação do time que está nessa posição.";
  }
}

console.log(showTeamPosition(5));
console.log(showTeamPosition(7));

function mostrarNumeros(x) {
  while (x <= 30) {
    console.log(x);
    x++;
  }
}

mostrarNumeros(20);

function convertToHex(cor) {
  let hexa;
  switch (cor) {
    case "red":
      hexa = "#FF0000";
      break;
    case "black":
      hexa = "#000000";
      break;
    case "white":
      hexa = "#FFFFFF";
      break;
    case "green":
      hexa = "#00FF00";
      break;
    case "blue":
      hexa = "#0000FF";
      break;
    default:
      return "Não temos o equivalente hexadecimal para " + cor;
  }
  return "O hexadecimal para a cor " + cor + " é " + hexa;
}

console.log(convertToHex('blue'))
console.log(convertToHex('purple'))
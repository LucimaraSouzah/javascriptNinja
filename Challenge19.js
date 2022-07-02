console.log("Regex para números usando o construtor:");

let justNumbersRegex = new RegExp("^\\d+", "gm");
console.log(justNumbersRegex);

var text =
  "10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.";
console.log("\nNúmeros no início da linha do texto:\n" + text, "\n");
console.log(text.match(justNumbersRegex));

console.log("\nRegex para números somente no final das linhas:");
let numbersAtTheEnd = /\d+$/gm;

var otherText =
  "Silvio Santos, nome artístico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), é um apresentador de televisão e empresário brasileiro.\n Proprietário do Grupo Silvio Santos, que inclui empresas como a Liderança\n Capitalização (administradora da loteria Tele Sena), a Jequiti Cosméticos e o\n Sistema Brasileiro de Televisão (mais conhecido como SBT), Silvio Santos possui\n um patrimônio avaliado em aproximadamente 6\n bilhões de reais.";
console.log("\nNúmeros no final da linha:\n\n", otherText, "\n");
console.log(otherText.match(numbersAtTheEnd));

var markup =
  '<main>\n  <div class="container">\n    <span class="text date"></span>\n    <p class=\'excerpt\'></p>\n  </div>\n</main>';
console.log(
  "\nQuais classes CSS existem na marcação abaixo?\n\n",
  markup,
  "\n"
);

function hasClass(markup, cssClass) {
  let regex = new RegExp('class=["\'].*' + cssClass + '.*["\']');
  return regex.test(markup);
}

let classes = ["container", "text", "date", "excerpt", "main"];
classes.forEach(function (cssClass) {
  console.log(hasClass(markup, cssClass) + " para a classe " + cssClass);
});

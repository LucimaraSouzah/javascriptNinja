// Aprender eventos in line
// https://developer.mozilla.org/en-US/docs/Web/Events#Categories

document.getElementById("myAnchor").addEventListener("click", function (event) {
  event.preventDefault();
});

/* O método preventDefault() cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá.

Por exemplo, isso pode ser útil quando:

Clicar em um botão "Enviar" impede que ele envie um formulário
Clicar em um link, impede que o link siga o URL 

Nem todos os eventos são canceláveis. Use a propriedade cancelável para descobrir se um evento é cancelável.

*/
var x = event.cancelable;

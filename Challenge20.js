(function (win, doc) {
  "use strict";
  let username = prompt("Qual o seu nome?");
  if (!username) {
    username = "Desconhecido";
  } else {
    alert("Bem vindo " + username);
  }
  let email = prompt("Qual é o seu e-mail?");
  let $inputUserName = document.querySelector('input[type="text"]');
  let $inputEmail = document.querySelector('input[type="email"]');
  let $message = document.querySelector("textarea");
  let $button = document.querySelector("button");

  $inputUserName.value = username;
  $inputEmail.value = email;

  $button.addEventListener(
    "click",
    function (event) {
        event.preventDefault()
      if (!$inputUserName.value) return alert("Preencha o nome de usuário!");
      if (!$inputEmail.value) return alert("Preencha o e-mail!");
      if (!$message.value) return alert("Preencha a messagem!");
      if (!isValidEmail($inputEmail.value))
        return alert("Entre com um e-mail válido!");
      if (!confirm("Tem certeza que deseja enviar o formulário?")) {
        return alert("Não enviado.");
      } else {
        return alert("Enviado com sucesso!");
      }
    },
    false
  );

  function isValidEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  }
})(window, document);

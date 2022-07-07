function DOM(elements) {
  this.element = document.querySelectorAll(elements);
}

DOM.prototype.on = function on(eventType, callBack) {
  Array.prototype.forEach.call(this.element, function (element) {
    element.addEventListener(eventType, callBack, false);
  });
};
DOM.prototype.off = function off(eventType, callBack) {
    Array.prototype.forEach.call(this.element, function (element) {
        element.removeEventListener(eventType, callBack, false);
      });
};
DOM.prototype.get = function get() {
  return this.element;
};

var $a = new DOM('[data-js="link"]');
$a.on("click", function handleClick(e) {
  e.preventDefault();
  console.log("clicou");
  $a.off('click',handleClick)
});

console.log("Elementos selecionados:", $a.get());
console.log("$a é filho de body?", $a.get()[0].parentNode === document.body);

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

DOM.prototype.forEach = function forEach() {
  return Array.prototype.forEach.apply(this.element, arguments);
};

DOM.prototype.map = function map() {
  return Array.prototype.map.apply(this.element, arguments);
};

DOM.prototype.filter = function filter() {
  return Array.prototype.filter.apply(this.element, arguments);
};

DOM.prototype.reduce = function reduce() {
  return Array.prototype.reduce.apply(this.element, arguments);
};
DOM.prototype.reduceRight = function reduceRight() {
  return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.prototype.every = function every() {
  return Array.prototype.every.apply(this.element, arguments);
};

DOM.prototype.some = function some() {
  return Array.prototype.some.apply(this.element, arguments);
};

DOM.prototype.isArray = function isArray(param) {
  return Object.prototype.toString.call(param) === "[object Array]";
};

DOM.prototype.isObject = function isObject(param) {
  return Object.prototype.toString.call(param) === "[object Object]";
};

DOM.prototype.isFunction = function isFunction(param) {
  return Object.prototype.toString.call(param) === "[object Function]";
};

DOM.prototype.isNumber = function isNumber(param) {
  return Object.prototype.toString.call(param) === "[object Number]";
};

DOM.prototype.isString = function isString(param) {
  return Object.prototype.toString.call(param) === "[object String]";
};

DOM.prototype.isBoolean = function isBoolean(param) {
  return Object.prototype.toString.call(param) === "[object Boolean]";
};

DOM.prototype.isNull = function isNull(param) {
  return (
    Object.prototype.toString.call(param) === "[object Null]" ||
    Object.prototype.toString.call(param) === "[object Undefined]"
  );
};

let $formCEP = new DOM('[data-js="form-cep"]');
let $inputCEP = new DOM('[data-js="input-cep"]');
let ajax = new XMLHttpRequest();
$formCEP.on("submit", handleSubmitFormCEP);

function handleSubmitFormCEP(event) {
  event.preventDefault();
  let url = getUrl();
  ajax.open("GET", url);
  ajax.send();
  getMessage("loading");
  ajax.addEventListener("readystatechange", handleReadyStateChange);
}

function getUrl() {
  return replaceCEP("https://viacep.com.br/ws/[CEP]/json/")
}

function clearCEP() {
  return $inputCEP.get()[0].value.replace(/\D/g, "");
}

function handleReadyStateChange() {
  if (isRequestOk) {
    fillCEPFields();
    getMessage("ok");
  }
}

function isRequestOk() {
  return ajax.readyState === 4 && ajax.status === 200;
}

function fillCEPFields() {
  let data = parseData();
  if (!data) {
    getMessage("error")
    data = clearData()
  }
  let $logradouro = new DOM('[data-js="logradouro"]');
  let $bairro = new DOM('[data-js="bairro"]');
  let $estado = new DOM('[data-js="estado"]');
  let $cidade = new DOM('[data-js="cidade"]');
  let $cep = new DOM('[data-js="cep"]');
  $logradouro.get()[0].textContent = data.logradouro;
  $bairro.get()[0].textContent = data.bairro;
  $estado.get()[0].textContent = data.uf;
  $cidade.get()[0].textContent = data.localidade;
  $cep.get()[0].textContent = data.cep;
}

function clearData() {
    return {
        logradouro: '-',
        bairro: '-',
        uf: '-',
        localidade: '-',
        cep: '-'
    }
}

function parseData() {
  let result;
  try {
    result = JSON.parse(ajax.responseText);
  } catch (e) {
    result = null;
  }
  return result;
}

function getMessage(type) {
  let messages = {
    loading: replaceCEP("Buscando informações para o CEP [CEP]..."),
    ok: replaceCEP("Endereço referente ao CEP [CEP]:"),
    error: replaceCEP("Não encontramos o endereço para o CEP [CEP]."),
  };
  let $status = new DOM('[data-js="status"]');
  $status.get()[0].textContent = messages[type];
}

function replaceCEP(message) {
  return message.replace("[CEP]", clearCEP());
}

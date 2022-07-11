(function ($) {
  "use strict";

  let app = (function appController() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on("submit", this.handleSubmit);
      },

      handleSubmit: function handleSubmit(event) {
        event.preventDefault();
        let $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        let $fragment = document.createDocumentFragment();
        let $tr = document.createElement("tr");
        let $tdImage = document.createElement("td");
        let $tdBrand = document.createElement("td");
        let $tdYear = document.createElement("td");
        let $tdPlate = document.createElement("td");
        let $tdColor = document.createElement("td");

        $tdImage.setAttribute("src", $('[data-js="image"]').get().value);
        $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
        $tdYear.textContent = $('[data-js="year"]').get().value;
        $tdPlate.textContent = $('[data-js="plate"]').get().value;
        $tdColor.textContent = $('[data-js="color"]').get().value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", "/company.json", true);
        ajax.send();
        ajax.addEventListener("readystatechange", this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app.isReady.call(this)) return;

        let data = JSON.parse(this.responseText);
        let $companyName = $('[data-js="company-name"]').get();
        let $companyPhone = $('[data-js="company-phone"]').get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },
    };
  })();

  app.init();
})(window.DOM);

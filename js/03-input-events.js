// Паттерн - обьект ссылок
const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// chenge - использовать на чекбоксах и радиобатынах
// стандартное событие для работы с input - это input - это каждое изменение внутри этого элемента
refs.input.addEventListener("input", onInputChange);
// когда происходит изменения при change
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// получает значение с поля input
function onInputChange(event) {
  // при каждом ввооде мы получим значение инпута (что в него ввели)
  console.log(event.currentTarget.value);
  // изменили текс элемента span на введенный текс в инпуде
  refs.nameLabel.textContent = event.currentTarget.value;
}

// измеет значение атрибута disabled
function onLicenseChange(event) {
  // свойство checked - хранит в себе true / false выбранный или нет
  console.log(event.currentTarget.checked);

  //   кнопка выключенна когда элемент не выбран
  refs.btn.disabled = !event.currentTarget.checked;
}

// event.currentTarget.value  -это сылка на элемент где лежит слушатель
// value - есть только у инпутов
// checked - есть только у радиокнопок и чекбоксов
// textContent - совйство есть только у текстовых полей

/*
 * На занятии 13 мы научились:
 * - Создавать элементы
 * - Находить элементы
 * - Изменять свойство элементов
 * - Читать свойства элементов
 */

/*
 * События - это реакция браузера на какое-то действие пользователя. Сегодня мы научимся реагировать на действия пользователя
 * Действие пользователя может быть - нажатие клавиши скрол мышки
 * Пользователь кликнул а браузер сгенерил событиу создал это событие и отправил нам
 * Мы как разработчики можем поймать это событие и как-то на него отреагировать (выполнить какой-то код)
 */

/*
 * События
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 * - handle*: handleSubjectEvent
 * - Handler: subjectEventHandler
 * - on*: onSubjectEvent
 * - ссылочная идентичность колбеков
 * - Обьяект события
 */

// Получили ссылку на элемент (кнопку)
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// Добавить слушателя событий
// В скобкам первым аргументом вы передаете тип события который вы хотите реагировать прослушивать
// На копку вы вешаете наверное только слик какой-то Событие передается ввиде строки
// Вторым аргументом вы пердаете колбек функцию которая будет выполнена в момент наступления этого события
addListenerBtn.addEventListener("click", () => {
  // Если не нужно отписываться то вы просто кидаете анонимную функцию
  console.log("Вешаю слушателя события на целевую кнопку");

  targetBtn.addEventListener("click", onTargetButtonClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Снимаю слушателя события с целевой кнопки");

  targetBtn.removeEventListener("click", onTargetButtonClick);
  // тут в скобках указываем от чего нужно отписаться от события клика и сняли функцию чтобы она не реагировала
});

function onTargetButtonClick() {
  console.log("Клик по целевой кнопке");
}

// function logMessage() {
//     console.log('Клик по ыелевой кнопке')
// }

// Нюанс как именовать колбек
// function handleTargetButtonClick() {
//     console.log('Клик')
// }

// function TargetButtonClickHandler() {
//   console.log("Клик");
// }

/*
 * Виды событий. какие они бывают
 */

/*
 * Событие submit
 * - Действие браузера по умолчанию
 * - Свойство elements
 * - Класс FornData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// Сделали ссылку на форму тут блок выборки элементов
// const form = document.querySelector('.js-register-form');

// // Блок подписок
// form.addEventListener('submit', onFormSubmit);

// // Блок всех обработчиков этих подписок
// function onFormSubmit(event) {
//   event.preventDefault();
//   // .preventDafault() - это метод предотвратить по умолчанию
//     const formData = new FormData(event.currentTarget)
//     // мы создали новый экземпляр и при вызове мы в скобках мы передаем ссылку на форму на DOM-узел на саму эту форму целиком
//     // FormData - под капотом собирает все значения всех полей которые есть в форме

//     console.log(formData);
//     // Посмотреть на данные можно через forEach
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name)
//         console.log('onFormSubmit -> value', value)
//     })
// }
// Вот так делаеться отправка формы
// Если нужно собрать данные всей формы то у вас есть один помошник FormData

// Когда у нас отправляеться форма то браузер перезагружаеться это поведение по умолчанию в браузере но нам нужнр предотвратить

/*
 * События инпутов input (полей ввода)
 */

/*
 * Паттерн "Обьект ссылок"
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  license: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// const input = document.querySelector("js-input")
// const nameLabel = document.querySelector("js-button > span")
//   const license = document.querySelector("js-license")
//  const btn = document.querySelector("js-button")

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// Это используеться чтобы получить значение input
refs.input.addEventListener("input", onInputChange);

function onInputFocus() {
  console.log("Инпут получит фокус - событие focus");
}

function onInputBlur() {
  console.log("Инпут потерял фокус - событие blur");
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
}

// function onLicenseChange()
// получаем ссылку (доступ к элементу)
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// добавляем слушателя событий
addListenerBtn.addEventListener("click", (event) => {
  console.log("Вешаю слушателя событий на целевую кнопку");
// добавляем слушателя событий клик и передаем коллбек функцию
  targetBtn.addEventListener("click", onTargetButtonClick);
});

// добавляем слушателя событий
removeListenerBtn.addEventListener('click', event => {
    console.log('Снимаю слушателя событий')
    // снимаем слушателя событий и передаем коллбек функцию
    targetBtn.addEventListener('click', onTargetButtonClick)
})

function onTargetButtonClick(event) {
    console.log(event)
    console.log('Клик по целевой кнопке')
}

// event - обьект настроек это событие мышки событие мышки события формы события инпутов

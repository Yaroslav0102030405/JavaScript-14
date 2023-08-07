// Получили ссылку на элемент (кнопку)
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

function onTargetButtonClick() {
  console.log("Клик по целевой кнопке");
}

/*
 * Мы делаем модальное окно
 * - Открыть и закрыть по кнопке: onModalOpen и onModalClose
 * - Закрыть по клику в бекдроп: onBackDropClick
 * - Закрыть по ESC: onEscapeKeypress
 *
 * - В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  // квадратные скобки - это целектор атрибута
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

// вешаем слущателя
refs.openModalBtn.addEventListener("click", onOpenModal);
// снимаешь действие кнопки
refs.closeModalBtn.addEventListener("click", onCloseModal);
// при нажатии на серый цвет закрылась модалка
refs.backdrop.addEventListener("click", onBackdropClick);

// давайте слушателя событий на window повесим только тогда когда мы модалку открываем а когда закрыли модалку снимем

function onOpenModal() {
  // получаем ссылку на body
  document.body.classList.add("show-modal");
  // добавляем слушателя событий на виндов только при открытии модалки
  window.addEventListener("keydown", onEscKeyPress);
  // мы сделали на виндов потому что мы хотим прослушивать нажатие клавиатуры
}

// делаем чтобы закрыть (то есть снимае класс с боди)
function onCloseModal() {
  document.body.classList.remove("show-modal");
  // убираем слушателя событий виндов при закрытии модалки
  window.removeEventListener("keydown", onEscKeyPress);
}

// Вся модалка это hrml + css а с помощью JS кликом по кнопке мы добавляем стили или снимаем
// JS - это работа с данными и добавление css классов и удаление и создание элементов

// теперь сделаем когда модалка открыта и мы нажимаешь на серый фон чтобы модалка закрылась
// у нас есть ссылка на это серый цвет backdrop
function onBackdropClick(event) {
  // console.log(event.currentTarget)
  // // где висит это событие
  // console.log(event.target)
  // где произошло это событие

  if (event.currentTarget === event.target) {
    onCloseModal();
    // тут мы вызываем закрытие модалки по условию
  }
}

function onEscKeyPress(event) {
  console.log(event);
  onCloseModal();
}

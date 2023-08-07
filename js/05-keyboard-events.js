/*
 * Типы событий: keypress - только символы, keydowmn - любые клавишы даже служебные
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key - хранит символ который бйл введен и KeyboardEvent.code - хранит физическую клавишу
 */

const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};

window.addEventListener("keydown", onKeypress);
refs.clearBtn.addEventListener("click", onClearOutput);

// функция которая записывает введенные символы с клавиатуры
function onKeypress(event) {
  // console.log(event.key)
  refs.output.textContent += event.key;
}

// функция которая очичает строку
function onClearOutput() {
  refs.output.textContent = "";
}

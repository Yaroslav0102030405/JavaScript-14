const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // предотвратить перезагрузку при отправке формы
  event.preventDefault();

  // event.currentTarget - ссылка на целую форму
  // console.log(event.currentTarget.elements)
  //   elements - это когда нужно отдельно порабоать с какими-то элементами
  //   const formElements = event.currentTarget.elements;

  //   // получить значение формы
  //   const mail = formElements.email.value;
  //   const password = formElements.password.value;
  //   const subscription = formElements.subscription.value;

  // //   для отправки на сервер
  // const formDate = { mail, password, subscription }
  // console.log(formDate)

  // если нужно собрать данные всей формы
  // тут мы собираем все значения всех полей что в ней есть
  // и ее можно отправлять на сервер
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  // проверить и посмотреть на данные введнеые в форму
  formData.forEach((name, value) => {
    console.log(name, value);
  });
}

// Data - используеться для отправки  на сервер а на сервер нужно и имя и значения поля
// чтобы сервер узнал что ты ему отправляешь и куда его записыватть в базу данных

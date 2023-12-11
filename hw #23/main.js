//Реалізовуємо форму для реєстрації.
// Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
const form = document.querySelector(".form");
const main = document.querySelector(".main");
const info = document.createElement("div");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData.entries());

  const fieldsWithMultipleValues = ["Languages"];

  fieldsWithMultipleValues.forEach((fieldName) => {
    if (fieldName in formObj) {
      const selectedValues = formData.getAll(fieldName);
      formObj[fieldName] = selectedValues;
    }
  });

  form.style.display = "none";
  info.classList.add("info");

  for (const key in formObj) {
    if (formObj[key]) {
      const row = document.createElement("div");
      row.classList.add('row');

      let value = formObj[key];

      if (Array.isArray(formObj[key])) {
        value = formObj[key].join(', ');
      }

      row.innerHTML = `<span>${key}:&nbsp;</span><span>${value}</span>`;
      info.appendChild(row);
    }
  }

  main.appendChild(info);
});

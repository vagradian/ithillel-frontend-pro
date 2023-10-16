// Напишіть скрипт, який переводить години в секунди і має робити насутпне:
// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
const hours = Number(prompt('Enter number of hours'));
const seconds = hours * 3600;

if (hours > 1) {
  alert(`There are ${seconds} seconds in ${hours} hours`);
} else {
  alert(`There are ${seconds} seconds in ${hours} hour`);
}

// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
const number1 = Number(prompt('Enter your number'));
const number2 = Number(prompt('Enter your number'));
const mathResults = `
${number1} + ${number2} = ${number1 + number2}\n
${number1} - ${number2} = ${number1 - number2}\n
${number1} * ${number2} = ${number1 * number2}\n
${number1} / ${number2} = ${number1 / number2}`

alert(mathResults);

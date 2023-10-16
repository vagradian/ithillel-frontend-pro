// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
const firstNumber = Number(prompt('Enter your number'));
const secondNumber = Number(prompt('Enter your number'));
const mathResults = `
${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`

alert(mathResults);

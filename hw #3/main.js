// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const name = prompt('What is your name?');
const age = prompt('How old are you?');
const city = prompt('What city do you live in?');

alert(`${name} ${age} ${city}`);

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
const fiveDigitNumber = prompt('Type a five-digit number');
const numberArray = fiveDigitNumber.split('').map(Number);

alert(numberArray);

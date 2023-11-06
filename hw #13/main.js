// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const myArray = [12, "apple", 100, "yellow", 8];

const averageOfNums = (array) => {
  const numbers = array.filter(element => typeof element === 'number');

  if (numbers.length === 0) {
    return "There aren't any numbers in this array";
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum / numbers.length;
}

console.log('average of numbers in array:', averageOfNums(myArray));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// const x = parseFloat(prompt("Введіть перше число:"));
// const znak = prompt("Введіть операцію (+, -, *, /, %, ^):");
// const y = parseFloat(prompt("Введіть друге число:"));

function doMath(x, znak, y) {
  const numX = Number(x);
  const numY = Number(y);

  if (isNaN(numX) || isNaN(numY)) {
    return 'Both x and y must be valid numbers';
  }

  switch (znak) {
    case '+':
      return numX + numY;
    case '-':
      return numX - numY;
    case '*':
      return numX * numY;
    case '/':
      return numY !== 0 ? numX / numY : 'You can`t divide by 0';
    case '%':
      return numX % numY;
    case '^':
      return Math.pow(numX, numY);
    default:
      return 'You can only use one of this operators "+, -, *, /, %, ^"';
  }
}

console.log(doMath(x, znak, y));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.
function fill2DArray() {
  const userInput = prompt("Enter data for a two-dimensional array (separate lines with commas, elements in lines with spaces):");
  const rows = userInput.split(",");

  const resultArray = [];
  for (const row of rows) {
    const columns = row.trim().split(" ");
    resultArray.push(columns);
  }

  return resultArray;
}

const twoDimArray = fill2DArray();
console.log(twoDimArray);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
function removeCharacters(inputString, charactersToRemove) {
  const filteredString = inputString.split('').filter(element => !charactersToRemove.includes(element)).join('');
  return filteredString;
}

const modifiedString = removeCharacters("hello world", ['l', 'd']);
console.log(modifiedString); // "heo wor"

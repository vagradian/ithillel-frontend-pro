// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.
let array = [];

const newArray = () => {
  const userInput = prompt('Enter at least 4 numbers separated by commas').split(',');
  const inputLength = userInput.length;

  console.log('initial array', array);

  for (let i = 0; i < inputLength; i++) {
    array.push(+userInput[i]);
  }
  console.log("users' array", array);

  array.sort( (a, b) => a - b );

  console.log('sorted array', array);

  if (array.length >= 4) {
    array.splice(1, 2);
  } else {
    alert('sorry! your array is too short :(');
    newArray();
  }

  console.log('new array', array);
}

newArray();

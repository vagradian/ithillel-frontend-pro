// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
const positiveArray = [];
let sumOfElements = 0;

array.forEach(element => {
  if (element > 0) {
    positiveArray.push(element);
    sumOfElements += element;
  }
});

const numOfElements = positiveArray.length;
console.log('number of positive elements', numOfElements);
console.log('sum of positive elements', sumOfElements);

// Знайти мінімальний елемент масиву та його порядковий номер.
const minNumber = Math.min(...array);
const indexOfMinNumber = array.indexOf(minNumber);

console.log('minimum number', minNumber);
console.log('index of minimum number', indexOfMinNumber);

// Знайти максимальний елемент масиву та його порядковий номер.
const maxNumber = Math.max(...array);
const indexOfMaxNumber = array.indexOf(maxNumber);

console.log('maximum number', maxNumber);
console.log('index of maximum number', indexOfMaxNumber);

// Визначити кількість негативних елементів.
const negativeArray = [];
array.forEach(element => {
  if (element < 0) {
    negativeArray.push(element);
  }
});

const numOfNegativeElements = negativeArray.length;
console.log('number of negative elements', numOfNegativeElements);

// Знайти кількість непарних позитивних елементів.
const evenArray = [];
array.forEach(element => {
  if (element > 0 && element % 2 !== 0) {
    evenArray.push(element);
  }
});

const PositiveOddElements = evenArray.length;

console.log('number of odd positive elements', PositiveOddElements);

// Знайти кількість парних позитивних елементів.
const positiveEvenElements = array.filter(element => element > 0 && element % 2 === 0);
const numOfPositiveEvenElements = positiveEvenElements.length;

console.log('number of even positive elements', numOfPositiveEvenElements);

// Знайти суму парних позитивних елементів.
const sumOfPositiveEvenElements = positiveEvenElements.reduce((sum, element) => sum + element, 0);

console.log('sum of even positive elements', sumOfPositiveEvenElements);

// Знайти суму непарних позитивних елементів.
const sumOfPositiveOddElements = evenArray.reduce((sum, element) => sum + element, 0);

console.log('sum of odd positive elements', sumOfPositiveOddElements);

// Знайти добуток позитивних елементів.
const productOfPositiveElements = positiveArray.reduce((product, element) => product * element, 1);

console.log('product of positive elements', productOfPositiveElements);

// Знайти найбільший серед елементів масиву, остальні обнулити.
array.forEach((element, index) => {
  if (element !== maxNumber) {
    array[index] = 0;
  }
});

console.log("reset array:", array);

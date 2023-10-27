// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

const removeElement = (array, item) => {
  const indexOfItem = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

removeElement(array, 5);
console.log(array);

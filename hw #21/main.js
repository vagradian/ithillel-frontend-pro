// Створити програму для відображення результатів голосування. З наступними умовами:
// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
const list = document.querySelectorAll('ul li');
const listArray = Array.from(list);

// Пройтися по масиву <li> за допомогою forEach
listArray.forEach(function(li) {
  let counter = 0;
  const button = li.querySelector('button');

  button.addEventListener('click', function() {
    const spanElement = li.querySelector('span') || document.createElement('span');
    counter++;
    spanElement.textContent = counter;

    li.appendChild(spanElement);
  });
});

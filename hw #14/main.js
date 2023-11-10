// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8

function createSum() {
  let total = 0;

  function sum(x) {
    total += x;
    return total;
  }

  return sum;
}

const customSum = createSum();

console.log(customSum(3));
console.log(customSum(5));

// Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let stringOfNumbers = "";
//
// for (let i = 10; i <= 20; i++) {
//   stringOfNumbers += i;
//   if (i < 20) {
//     stringOfNumbers += ', ';
//   }
// }
//
// console.log(stringOfNumbers);

// Вивести квадрати чисел від 10 до 20.
// for (let i = 10; i<= 20; i++) {
//   const square = i * i;
//   console.log(`${i} in square = ${square}`);
// }

// Вивести таблицю множення на 7.
// for (let i = 0; i < 10; i++) {
//   const result = i * 7;
//   console.log(`7 * ${i} = ${result}`);
// }

// Знайти суму всіх цілих чисел від 1 до 15.
// let sumOfNumbers = 0;
//
// for (let i = 1; i <= 15; i++) {
//   sumOfNumbers += i;
// }
//
// console.log(sumOfNumbers);

// Знайти добуток усіх цілих чисел від 15 до 35.
// let product = 1;
//
// for (let i = 15; i <= 35; i++) {
//   product *= i;
// }
//
// console.log(`The product of all the numbers from 15 to 35 is: ${product}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let averageOfNumbers = 0;
//
// for (let i = 1; i <= 500; i++) {
//   averageOfNumbers += i / 500;
// }
//
// console.log(`Arithmetic mean of all integers from 1 to 500: ${averageOfNumbers}`);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let sumOfEven = 0;
//
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 == 0) {
//     sumOfEven += i;
//   }
// }
//
// console.log(`The sum of only even numbers in the range from 30 to 80 is: ${sumOfEven}`);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let naturalNum = +prompt('Enter any natural number');
// let count = 0;
//
// for (let i = 2; i <= naturalNum; i++) {
//   if (naturalNum % i === 0) {
//     console.log(`Division of this number: ${i}`);
//   }
// }

// Визначити кількість його парних дільників.
// let naturalNum = +prompt('Enter any natural number');
// let count = 0;
//
// for (let i = 2; i <= naturalNum; i++) {
//   if (naturalNum % i === 0 && i % 2 === 0) {
//     count++;
//   }
// }

// console.log(`Number of even divisors: ${count}`);

// Знайти суму його парних дільників.
// let naturalNum = +prompt('Enter any natural number');
// let sumOfDivisors = 0;
//
// for (let i = 2; i <= naturalNum; i++) {
//   if (naturalNum % i === 0 && i % 2 === 0) {
//     sumOfDivisors += i;
//   }
// }
//
// console.log(`Sum of even divisors: ${sumOfDivisors}`);

// Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const product = i * j;
    console.log(`${i} * ${j} = ${product}`);
  }
  console.log("----------");
}

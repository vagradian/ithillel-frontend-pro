//1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.showInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
}

// 2. Створити сутність "Автомобіль".
// Властивості: марка, модель, рік виписку, номерний знак (або на Ваш розсуд); власник.
// Методи: конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі,
// якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
function Car(make, model, year, plates) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.plates = plates;
  this.owner = null;

  this.assignOwner = function (owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("Owner must be 18 years or older.");
    }
  };

  this.showInfo = function () {
    console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, Plates: ${this.plates}`);
    if (this.owner) {
      console.log("Owner Information:");
      this.owner.showInfo();
    } else {
      console.log("No owner assigned.");
    }
  };
}

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
const person1 = new Person('Joey', 30);
const person2 = new Person('Chandler', 29);
const person3 = new Person('Ross', 29);

// декілька екземплярів класу Автомобіль;
const car1 = new Car('Honda', 'S2000', 2008, 'AA1111AA');
const car2 = new Car('Mercedes', 'E300', 2021, 'AA2222AA');
const car3 = new Car('Ford', 'Fiesta', 2020, 'AA3333AA');

// присвоїти власників автомобілям.
car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);

car1.showInfo();
car2.showInfo();
car3.showInfo();

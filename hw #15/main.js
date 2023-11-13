//1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class Apartment {
  residents = [];

  addResident(resident) {
    this.residents.push(resident);
    return this;
  }

  showResidents() {
    console.log('residents of the apartment:', this.residents);
  }
}

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир,
// і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
class Building {
  constructor(maxApartmentNumber) {
    this.maxApartmentNumber = maxApartmentNumber;
    this.apartments = [];
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartmentNumber) {
      this.apartments.push(apartment);
      console.log('apartments of the building:', this.apartments);
    }
    else {
      console.log('there is no place for new apartment in our building');
    }
  }
}

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
const person1 = new Person('Rachel', 'female');
const person2 = new Person('Monica', 'female');
const person3 = new Person('Joey', 'male');
const person4 = new Person('Chandler', 'male');
const person5 = new Person('Phoebe', 'female');
const person6 = new Person('Ross', 'male');

console.log('friends', person1, person2, person3, person4);

// декілька екземплярів класу Квартира;
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();

// додадити екземпляри класу Людина до екземплярів класу Квартира;
apartment1.addResident(person1).addResident(person2);
apartment2.addResident(person3).addResident(person4);
apartment3.addResident(person5);
apartment4.addResident(person6);

apartment1.showResidents();
apartment2.showResidents();
apartment3.showResidents();
apartment4.showResidents();

// екземпляр класу Будинок;
const building1 = new Building(2);
const building2 = new Building(1);
const building3 = new Building(1);

// додадити екземпляри класу Квартира до екземплярів класу Будинок.
building1.addApartment(apartment1);
building1.addApartment(apartment2);
building2.addApartment(apartment3);
building3.addApartment(apartment4);
building2.addApartment(apartment1);

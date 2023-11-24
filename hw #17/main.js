// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
// І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true,
// коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
// Масив – це властивість, present та absent – методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = Array(25).fill(null);
  }

  ageOfStudent() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  averageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    this.updateAttendance(true);
  }

  absent() {
    this.updateAttendance(false);
  }

  updateAttendance(isPresent) {
    if (this.attendance.length < 25) {
      this.attendance.push(isPresent);
    }
  }

  summary() {
    const avgGrade = this.averageGrade();
    const avgAttendance = this.attendance.filter(Boolean).length / this.attendance.length;

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 70 || avgAttendance > 0.7) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

const student1 = new Student('Joey', 'Tribbiani', 1989);
const student2 = new Student('Phoebe', 'Buffay', 1990);

student1.grades = [95, 85, 90];
student1.present();
student1.present();
student1.absent();

student2.grades = [75, 80, 88];
student2.present();
student2.present();
student2.present();

console.log(`${student1.firstName}'s Summary: ${student1.summary()}`);
console.log(`${student2.firstName}'s Summary: ${student2.summary()}`);

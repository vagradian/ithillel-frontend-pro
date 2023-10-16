// Створити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну,
// столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту,
// то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення –
// “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту.
function userInfo() {
  let age = prompt('How old are you?');
  let city = prompt('What city do you live in?');
  let sport = prompt('What is your favorite sport?');
  const sorryMessage = "So sorry that you didn't want to enter your";
  let ageInfo = "";
  let cityInfo = "";
  let sportInfo = "";
  city = city.toLowerCase();
  sport = sport.toLowerCase();
  age = +age;

  if (age === null || age === 0) {
    ageInfo = `${sorryMessage} age :(`;
  } else {
    ageInfo = `You're ${age} years old.`;
  }

  switch (city) {
    case 'kyiv':
      cityInfo = 'You live in the capital of Ukraine';
      break;
    case 'washington':
      cityInfo = 'You live in the capital of USA';
      break;
    case 'london':
      cityInfo = 'You live in the capital of Great Britain';
      break;
    case null:
    case "":
      cityInfo = `${sorryMessage} city :(`;
      break;
    default:
      cityInfo = `You live in ${city}`;
  }

  switch (sport) {
    case 'tennis':
      sportInfo = 'Cool! Wanna be like Elina Svitolina?';
      break;
    case 'football':
      sportInfo = 'Cool! Wanna be like Andriy Shevchenko?';
      break;
    case 'box':
      sportInfo = 'Cool! Wanna be like Oleksandr Usyk?';
      break;
    case null:
    case "":
      sportInfo = `So sorry that you didn't want to enter your favorite sport :(`;
      break;
    default:
      sportInfo = `Good luck in ${sport}`;
  }

  return (
    alert(`${ageInfo} ${cityInfo} ${sportInfo}`)
  );
}

userInfo();

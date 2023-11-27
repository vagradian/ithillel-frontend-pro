// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const table = document.createElement('table');

const createTable = () => {
  document.querySelector('body').appendChild(table);
  let count = 1;

  for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
      const td = document.createElement('td');
      td.textContent = count++;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
};

createTable();

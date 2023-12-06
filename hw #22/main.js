// Дано 3 блоки
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).
document.addEventListener('DOMContentLoaded', function () {
  const categoryList = document.querySelector('.categoryList');
  const productList = document.querySelector('.productList');
  const infoText = document.querySelector('.infoText');
  const buyButton = document.querySelector('.action');

  const productsData = {
    Fruits: ['Apple', 'Banana', 'Lemon'],
    Vegetables: ['Potato', 'Tomato', 'Cucumber'],
    Drinks: ['Coke', 'Sprite', 'Fanta']
  };

  function createCategoryItem(category) {
    const li = document.createElement('li');
    li.textContent = category;
    li.addEventListener('click', () => displayProducts(category));
    return li;
  }

  Object.keys(productsData).forEach(category => {
    categoryList.appendChild(createCategoryItem(category));
  });

  function createProductItem(product) {
    const li = document.createElement('li');
    li.textContent = product;
    li.addEventListener('click', () => displayProductInfo(product));
    return li;
  }

  function displayProducts(category) {
    productList.innerHTML = '';
    infoText.textContent = '';

    productsData[category].forEach(product => {
      productList.appendChild(createProductItem(product));
    });
  }

  function displayProductInfo(product) {
    infoText.innerHTML = `Information about ${product}`;
    buyButton.style.display = 'block';
    let currentProduct = product;

    buyButton.addEventListener('click', function buyProduct() {
      alert(`You've bought ${currentProduct}`);
      productList.innerHTML = '';
      infoText.textContent = '';
      buyButton.style.display = 'none';

      buyButton.removeEventListener('click', buyProduct);
    });
  }
});

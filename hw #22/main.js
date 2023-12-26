document.addEventListener('DOMContentLoaded', function () {
  const categoryList = document.querySelector('.categoryList');
  const categories = document.querySelector('.categories');
  const productList = document.querySelector('.productList');
  const products = document.querySelector('.products');
  const infoText = document.querySelector('.infoText');
  const info = document.querySelector('.info');
  const buyButton = document.querySelector('.action');
  const myOrdersBtn = document.querySelector('.actionOrders');
  const ordersContainer = document.querySelector('.ordersContainer');
  const ordersList = document.querySelector('.ordersList');

  const productsData = {
    Fruits: ['Apple', 'Banana', 'Lemon'],
    Vegetables: ['Potato', 'Tomato', 'Cucumber'],
    Drinks: ['Coke', 'Sprite', 'Fanta']
  };

  function calculatePrice(product) {
    // Replace this with your actual price calculation logic
    const prices = {
      'Apple': 1.00,
      'Banana': 0.75,
      'Lemon': 0.50,
      'Potato': 1.25,
      'Tomato': 1.50,
      'Cucumber': 1.00,
      'Coke': 2.00,
      'Sprite': 2.00,
      'Fanta': 1.75
    };

    return prices[product] || 0.00;
  }

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
      const order = {
        product: currentProduct,
        date: new Date().toLocaleString(),
        price: calculatePrice(currentProduct) // Assuming you have a function to calculate the price
      };

      saveOrder(order);
      alert(`You've bought ${currentProduct}`);
      productList.innerHTML = '';
      infoText.textContent = '';
      buyButton.style.display = 'none';

      buyButton.removeEventListener('click', buyProduct);
    });
  }

  function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  function displayOrderDetails(order) {
    alert(`Order details:\nProduct: ${order.product}\nDate: ${order.date}\nPrice: $${order.price}`);
  }

  myOrdersBtn.addEventListener('click', function () {
    categories.style.display = 'none';
    products.style.display = 'none';
    info.style.display = 'none';
    ordersContainer.style.display = 'block';
    loadOrders();
  });


  function createOrderItem(order) {
    const li = document.createElement('li');
    li.textContent = `${order.date} - $${order.price}`;

    // Add a delete button for each order
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('action', 'actionDelete');
    deleteButton.addEventListener('click', () => deleteOrder(order));

    li.appendChild(deleteButton);
    return li;
  }

  function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    ordersList.innerHTML = '';

    orders.forEach(order => {
      const orderItem = createOrderItem(order);
      ordersList.appendChild(orderItem);
    });
  }

  function deleteOrder(orderToDelete) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(order => order.date !== orderToDelete.date);
    localStorage.setItem('orders', JSON.stringify(orders));
    loadOrders();
  }

  myOrdersBtn.addEventListener('click', function () {
    categoryList.classList.add('hide');
    productList.classList.add('hide');
    infoText.classList.add('hide');
    ordersContainer.style.display = 'block';
    loadOrders();
  });
});

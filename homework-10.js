import { products } from './products.js';

const productlist = document.querySelector('.catalog__products-list');
const productTemplate = document.querySelector('#product-card-template');

// 1. 
const createProductCard = (product) => {
  
  const cardClone = productTemplate.content.cloneNode(true);
    
  const image = cardClone.querySelector('.product-card__image');
  const category = cardClone.querySelector('.product-card__category');
  const name = cardClone.querySelector('.product-card__name');
  const description = cardClone.querySelector('.product-card__description');
  const compoundList = cardClone.querySelector('.compound__list');
  const priceValue = cardClone.querySelector('.price__value');

  image.src = product.image;
  image.alt = product.title;
  category.textContent = product.skinType;
  name.textContent = product.title;
  description.textContent = product.description;
  priceValue.textContent = `${product.price.toLocaleString('ru-RU')}р`;

  product.compound.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'compound__item';
    li.textContent = item;
    compoundList.appendChild(li);
  });

  return cardClone;

};


// 2. Функция рендера массива карточек (принимает массив аргументом)
const renderProducts = (productsArray) => {
  const fragment = document.createDocumentFragment();

  productsArray.forEach((product) => {
    fragment.appendChild(createProductCard(product));
  });

  productlist.appendChild(fragment);
};

renderProducts(products);

// 3. Функция запроса количества карточек с проверкой.
const getCardsCount = () => {
  const userInput = prompt('Сколько карточек отобразить? От 1 до 5');

  if (userInput === null || userInput.trim() === '') {
    alert('Вы не ввели число. будут отображены все 5 карточек.');
    return products.length;
  }


const count = Number(userInput);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert('Ошибка! Нужно ввести целое число от 1 до 5. Отображаем все 5 карточек.');
    return products.length;
  }

  return count;
};

// Запуск при старте страницы.
const cardCount = getCardsCount();
const selectedProducts = products.slice(0, cardCount);
renderProducts(selectedProducts);


// Пункт 4: массив объектов { название: описание } через reduce 
const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, [] );


console.log(productDescriptions);
  


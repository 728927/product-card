// 3. Мои данные 

const user = {
  name: "Айнагул",
  age: 25,
  lastName: "Каримова",
  email: "ainagul.karimova@example.com",
  work: "Frontend Developer",
  position: "Middle",
  country: "Kyrgyzstan",
  city: "Bishkek",
  hobby: ["reading", "traveling", "coding"],
  dream: "reading Koran Arabic",
  drawing: "neiroGrafics", 
}

console.log(user);


// 4 . Мой автомобиль. 

const car = {
  brand: "MersedesBens",
  model: "GLC 300",
  year: 2022,
  color: "black",
  engine: "2.0L 4-cylinder",
  licensePlate: "B1234567",
  owner: {
    name: "Айнагул",
    age: 25,
    licenseNumber: "B1234567",
  }
}

console.log(car);

// 5. Функция проверки максимальную скорость автомобиля

 
function addMaxSpeed(obj) {
  if ("максимальная скорость" in obj) {
    return;}

  obj["максимальная скорость"] = 210;  
  }

addMaxSpeed(car);
console.log(car); 


// 6. Функция, аргументы, вывести значения.


function printProperty(obj, key) {
  console.log(obj[key]);
}


const painting = {
  title: "Мона Лиза",
  author: "Леонардо да Винчи",
  year: 1503,
} 

printProperty(painting, "title") // Скотный двор
//printProperty(book, "author"); // Джордж Оруэлл
//printPropperty(book, "year"); // 1945


// 7. Массив - продукты.

//const products = [хлеб, соль, сахар, рис, масло]; 



// 8 . Массив - книги.

const books = [
  {
    title: "451 по Фаренгейту",
    author: "Рэй Бредбери",
    year: 2025,
    coverColor: "Черный",
    genre: "Роман",
    series: "Зарубежная классика",
    publishingHouse: "Эксмо"
  },

  {
    title: "Триумфальная арка",
    author: "Эрих Мария Ремарк",
    year: 2013,
    coverColor: "Красный",
    genre: "Роман",
    series: "Зарубежная классика",
    publishingHouse: "Ремарк"
  },

  {
    title: "Мезгил сабактары",
    author: "Шайдоот",
    year: 2016,
    coverColor: "Белый",
    genre: "Эзотерика",
    series: "Доор чакырыгы",
    publishingHouse: "Аалам"
  },
];

books.push({
    title: "Как жить",
    author: "Джон Селларс",
    year: 2022,
    coverColor: "Синий",
    genre: "Философия",
    series: "Уроки стоицизма",
    publishingHouse: "Альпина"
});

console.log(books);



// 9. Объединение массива.

const books1 = [
  {
    title: "Коран",
    author: "Мухаммед",
    year: 610,
    coverColor: "Зеленый",
    genre: "Религия",
    series: "Ислам",
    publishingHouse: "Умма"
  },

  { 
    title: "Библия",
    author: "Иисус Христос",
    year: 100,
    coverColor: "Красный",
    genre: "Религия",
    series: "Христианство",
    publishingHouse: "Никея"
  },

  {
    title: "Тора",
    author: "Моисей",
    year: 1312,
    coverColor: "Желтый",
    genre: "Религия",
    series: "Иаудаизм",
    publishingHouse: "Бытие"
  },

  {
    title: "Ганджур",
    author: "Будда",
    year: 1300,
    coverColor: "Желтый",
    genre: "Религия",
    series: "Буддизм",
    publishingHouse: "Дерген"
  
  }
];

const allBooks = [...books, ...books1];

console.log(allBooks);




// 10. Массив по методу map.

function markRareBooks(books3) {
  return books3.map((book) => ({
    ...book,
    isRare: book.year < 2000,
  }));
}

const books3 = [
  {
    title: "Ганджур",
    author: "Будда",
    year: 1300,
    coverColor: "Желтый",
    genre: "Религия",
    series: "Буддизм",
    publishingHouse: "Дерген",
  },
];

const updatedBooks = markRareBooks(books3);
console.log(updatedBooks);














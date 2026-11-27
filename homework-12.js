// 1. Родительский (базовый) класс
class Device {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.isTurnedOn = false;
  }

  turnOn() {
    this.isTurnedOn = true;
    console.log(`${brand} ${this.model} включён.`);
  }

  turnOff() {
    this.isTurnedOn = false;
    console.log(`${this.brand} ${this.model} выключен.`);
  }

  getInfo() {
    return `Устройство: ${this.brand} ${this.model}, цена:
    ${this.price.toLocaleString('ru-RU')} руб.`;
  }
}

// 2. Дочерний класс №1: Смартфон наследует от Device)
class Smartphone extends Device {
  constructor(brand, model, price, cameraMp, simCount) {
    //Вызываем конструктор родителя, 
    // чтобы записать brand, model и price
    super(brand, model, price);
    this.cameraMp = cameraMp;
    this.simCount = simCount;
  }

  takePhoto() {
    if (!this.isTurnedOn) {
      console.log(`Сначала включите смартфон ${this.brand} ${this.model}!`);
        return;
    }
    console.log(`${this.brand} ${this.model} 
      сделал фото на камеру ${this.cameraMp} Мп.`);
  }

  // Переопределяем метод родителя(полиморфизм)
  getInfo() {
    return `${super.getInfo()}, камера: ${this.cameraMp} Мп, SIM-карт: ${this.simCount}`;
  }
}

// 3. Дочерний класс №2: Ноутбук (наследует от Device)
class Laptop extends Device {
  constructor(brand, model, price, screenDiagonal) {
    super(brand, model, price);
    this.ramGb = this.ramGb;
    this.screenDiagonal = screenDiagonal;
  }

  runCodeEditor() {
    if (!this.isTurnedOn) {
      console.log(`Сначала включите ноутбук ${this.brand} ${this.model}!`);
      return;
    }
    console.log(`На ноутбуке ${this.brand} ${this.model} (${this.ramGb} ГБ ОЗУ) запущен VS Code.`); 
  }

  getInfo() {
    return `${super.getInfo()}, экран: ${this.screenDiagonal}", ОЗУ: ${this.ramGb} ГБ`;
  }
}

// --- Проверка работы ---
const iphone = new Smartphone('Apple', 'iPhone 15', 85000, 48, 2);
const macbook = new Laptop('Apple', 'MacBook Air M2', 115000, 16, 13.6);

console.log(iphone.getInfo());
iphone.takePhoto(); // Попросит сначала включить
iphone.turnOn();
iphone.takePhoto();

console.log(macbook.getInfo());
macbook.turnOn();
macbook.runCodeEditor();
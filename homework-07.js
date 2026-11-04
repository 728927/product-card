

function weather(sity, temp) {
  
  console.log(`Сейчас, в ${sity} температура ${temp} градусов по Цельсию!`)
}

weather("Бишкеке", '20');





const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if(speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света")
  }
}

checkSpeed(500000000);
checkSpeed(100000);
checkSpeed(299792458);



 
const productName = "Витамин С";
const productPrice = 590;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`"${productName}" приобретен. Спасибо за покупку!`);
  } else {
    const cashNeeded = productPrice - budget;
    console.log(`Вам не хватает ${cashNeeded}$, пополните баланс`); 
  }
}

console.log("--- Проверка 1: Бюджета хватает ---");
buyProduct(700);

console.log("\n--- Проверка 2: Бюджета впритык ---");
buyProduct(590); 

console.log("\n--- Проверка 3: Бюджета не хватает ---");
buyProduct(207); 




function greetUser(name) {
  return `Привет, ${name}!`;
}
console.log(greetUser("Aйнагул")); 




const userName = "Айнагул";
let userAge = 25;
let isOnline = true; 


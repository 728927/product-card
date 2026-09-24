//Покраска первой карточки

const firstProductCard = document.querySelector(".card__item");
const changeColorFirstCardButton = document.querySelector("#change-color-first-card");


changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = "blueColorHash"
})


// Открыть Google 

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", () => {
  window.open("https://google.com")
    })
    
  


// Открыть Google 

function openGoogle () {
  const answer = confirm("Вы действительно хотите открыть Google?");

    if (answer === true) {
      window.open("https://google.com")
    } else {
      return;
    }
  }


// Покраска первой карточки 
//const firstProductCard = document.querySelector(".catalog__container container");
//const changeColorFirstCardButton = document.querySelector("#change-color-first-card");

//changeColorFirstCardButton.addEventListener("click", () => { 
  //firstProductCard.style.backgroundColor = blueColorHash;
//})



// Покраска всех карточек

// const productCard = document.querySelector(".card-container");
//const changeColorAllCardButton = document.querySelector('#change-color-all-card');
//const greenColorHash = '#00FF00';
//const blueColorHash = "#0000ff"; 
//const googleURL = "https://google.com";

//changeColorAllCardButton.addEventListener('click', () => {
     //productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
//})
 


// Открыть Google 

//function openGoogle () {
  //const answer = confirm("Вы действительно хотите открыть Google?");

  //if (answer === true) {
    //window.open("https://google.com")
  //} else {
    //return;
  //}
//}

// Открыть Google button

//const openGoogleButton = document.querySelector("#open-google");

//openGoogleButton.addEventListener("click", openGoogle)

//function openGoogle() {
  //const answer = confirm("Вы действительно хотите открыть Google?");

  //if (answer === true) {
    //window.open("https://google.com")
  //} else {
    //return;
  //}
//}

// Вывод консоль лог

// const outputLogButton = document.querySelector("#output-console-log");

// outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №6"))

// function outputConsoleLog(message) {
  // alert(message)
  // console.log(message)
// }



// const mainTitle = "product card"; // camelCase
// const MAINTITLE = "product card"; // upperCase
// const main_title = "product card"; // snake_case


// const j = document.querySelector(".card-container");

// const productCard = document.querySelector('.card-container');

// const j = document.querySelector(".card-container");


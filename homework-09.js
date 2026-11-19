//Уровень - 1.
// 2. 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = number.slice(5, 10 )

console.log(newArray) // (5) [6, 7, 8, 9, 10]



// 3. 
const painterTools = ["Карандаши", "Уголь", "Пастель", "Тушь", "Чернила", "Cангина" ]

const newArray1 = painterTools.includes ("сепия")

console.log(newArray1) // false


// 4. 1.
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

number1.reverse(number1)

console.log(number1) // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


// 4. 2.
const painterTools1 = ["Карандаши", "Уголь", "Пастель", "Тушь", "Чернила", "Cангина" ]

painterTools1.reverse(painterTools1)

console.log(painterTools1) 


// Уровень - 2.

// 6. 
import {comments} from "./comments.js";

console.log(comments);


// 7. 
const comComments = comments.filter(comment => comment.email.includes(".com"));

console.log(comComments);


// 8. 
const updatedComments = comments.map(comment => ({
  ...comment,
  postid: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);


// 9.
const simplifiedComments = comments.map(({id, name}) => ({id, name}));

console.log(simplifiedComments);


// 10. 
const updatedComments1 = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(updatedComments);



// Уровень - 3.
// 11.
const emailsWithReduse = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsWithReduse);



const emailsWithMap = comments.map((comment) => comment.email);

console.log(emailsWithMap);


// 12.
const emails = [
  "Eliseo@gardner.biz",
  "Jayne_Kuhic@sydney.com",
  "Nikita@garfield.biz",
  "Lew@alysha.tv",
  "Hayden@althea.biz",
  "Presley.Mueller@myrl.com",
  "Dallas@ole.me",
  "Mallory_Kunze@marie.org",
  "Meghan_Littel@rene.us",
  "Carmen_Keeling@caroline.name"
];

const result = emails.toString();

console.log(result); 



const emails0 = [
  "Eliseo@gardner.biz",
  "Jayne_Kuhic@sydney.com",
  "Nikita@garfield.biz",
  "Lew@alysha.tv",
  "Hayden@althea.biz",
  "Presley.Mueller@myrl.com",
  "Dallas@ole.me",
  "Mallory_Kunze@marie.org",
  "Meghan_Littel@rene.us",
  "Carmen_Keeling@caroline.name"
];

const resultWithSpase = emails.join(";  ");
console.log(resultWithSpase); 


const resultCompact = emails.join(";");
console.log(resultCompact);




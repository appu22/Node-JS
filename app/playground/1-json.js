const fs = require('fs')


//********** crating json file */
// const book = {
//     title:'ego is the enemy',
//     author:'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// //it will create one json file and store object properties
// fs.writeFileSync('1-json.json',bookJSON)

//************  reading json file  ************ */
// const dataBuffer = fs.readFileSync('1-json.json')//coming binary data 
// const dataJSON =dataBuffer.toString();//converted binary to string 
// const data =JSON.parse(dataJSON)//data to object 
// console.log(data.title);//accessing properties 



const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name='uppa',
user.age=15


const userJSON =JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)








// //object access
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);

// //object properties access
// const bookParse = JSON.parse(bookJSON)
// console.log(bookParse.author);



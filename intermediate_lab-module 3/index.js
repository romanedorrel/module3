//#1

// function ucFirstLetters(str) {
//     let newString = '';
//     let words = str.split(' ');
// for(let word of words){
//     if(newString.length !=0) newString += ' '
//     newString += word.charAt(0).toUpperCase() + word.substring(1)
// }
// return newString;

// }
// console.log(ucFirstLetters("los angeles"))
// console.log(ucFirstLetters("republic of congo"))

//#2

// function truncate(str, max)
// {
//     if(str.length > max){
//         return str.substring(0,max) +'...';
//     }
//     else
//     {
//     return str;
//     }
// }
// function truncate(str, max){
//     return (str.length > max) ? str.substring(0,max) + '...': str;
// }

// console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...

//#3

// const animals = ['Tiger', 'Giraffe']

// animals.push('Monkey','Elephant');
// console.log(animals)

// animals.unshift('Lion', 'Wolf');
// console.log(animals)

// animals.sort();
// console.log(animals);

// function replaceMiddleAnimal(newValue) { 
//     let halfway = animals.length/2 - 1;
//     animals[halfway] = newValue;
//     return animals
// }

// console.log(replaceMiddleAnimal('Dog'));

// function findMatchingAnimals(beginsWith){
//     return animals.filter( animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
// }

// console.log(findMatchingAnimals('T'));

//#4

// function camelCase(cssProp){
//      let newString = '';
//      let words = cssProp.split('-');
//      for(let word in words){
//         if(word == 0){
//             newString += words[word];
//         }
//         else{
//            newString += words[word].charAt(0).toUpperCase() + words[word].substring(1);
//         }
//      }
//      return newString
// }

//#5
// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = twentyCents.toFixed(2) 
// let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTwenty + fixedTen) //why is this not working? //Tofixed returns a string, the + sign then concats the two strings

// function currencyAddition(float1, float2){
//     let sumFloat = (float1 + float2).toFixed(2);
//     console.log(sumFloat);
// }
// currencyAddition(twentyCents, tenCents);

// function currencyOperation(float1, float2, operation){
    
//     let results = 0;

//     switch(operation){
//         case '+': 
//                 results = (float1 + float2).toFixed(2);
//                 break;
//         case '-':
//                 results = (float1 - float2).toFixed(2);
//                 break;
//         case '*':
//                 results = (float1 * float2).toFixed(2);
//                 break;
//         case '/':
//                 results = (float1 / float2).toFixed(2);
//                 break;
//         default:
//                 results = (float1 + float2).toFixed(2);
                                            
//     }
//     return results;
// }
// console.log(currencyOperation(twentyCents,tenCents,'/'));

// function currencyOperation2(float1, float2, operation, numDecimals) { 

//     let results = 0;

//     switch(operation){
//         case '+': 
//                 results = (float1 + float2).toFixed(numDecimals);
//                 break;
//         case '-':
//                 results = (float1 - float2).toFixed(numDecimals);
//                 break;
//         case '*':
//                 results = (float1 * float2).toFixed(numDecimals);
//                 break;
//         case '/':
//                 results = (float1 / float2).toFixed(numDecimals);
//                 break;
//         default:
//                 results = (float1 + float2).toFixed(numDecimals);
                                            
//     }
//     return results;
// }
// console.log(currencyOperation2(twentyCents, tenCents,'*',3));

//#6

// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']; 
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]; 

// function unique(duplicatesArray) { 

// const newArray = []; 

// for (let element of duplicatesArray) { 
//     if (!newArray.includes(element)) { 
//         newArray.push(element); 
//     }  
// } 
// return newArray; 
// } 
// console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ] 

//#7

// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//     ];

//     function getBookTitle(bookId){
//       let matchingBook = books.find(book => book.id == bookId)
//         return matchingBook.title;
//     }
//     console.log(getBookTitle(2));
    
//     function getOldBooks() { 
//         return books.filter(book => book.year < 1950) 
//         } 
//         console.log(getOldBooks());

//         function addGenre() { 
//             books.map(book => book.genre = 'Classic'); 
//             } 
//             addGenre(); 
//            // console.log(books); 
    
//         function getTitles(authorInitial) { 
//             return books.filter(book =>book.author.toLowerCase()
//             .startsWith(authorInitial.toLowerCase())).map(book => book.title); 
//             } 
//             console.log(getTitles('G')) 
                        
//         function latestBook(){
//             let mostRecent = 1;
//             books.forEach(book => {
//                 if(mostRecent < book.year){
//                     mostRecent = book.year;
//                 }
//             } );
//             return books.find(book => book.year == mostRecent);
//         }  
//         console.log(latestBook())

//#8

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// let newArray = [
//     ['David', '2456789934'],
//     ['Frank', '0124567567'],
//     ['Eden', '9036742903']
// ];

// const phoneBookDEF = new Map(newArray);

// phoneBookABC.set('Caroline', '9543074568');

// function printPhoneBook(contacts){
//     for( let names of contacts){
//         console.log(names);
//     }
// }
// printPhoneBook(phoneBookDEF);

// const phoneBook = new Map([...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]));

// printPhoneBook(phoneBook);

//#9

// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
//     };

//     function sumSalaries(salaries){

//         let totalSalaries = 0;

//         for(let salary in salaries){
//             totalSalaries += salaries[salary];
//             }
//         return totalSalaries;
//     }
//     console.log(sumSalaries(salaries));

//     function topEarner(salaries){
//         let highSalary = 1;
//         let highEarner = '';
//         for(let [name, salary] of Object.entries(salaries)){
//             if(salary > highSalary){
//                 highSalary = salary;
//                 highEarner = name;
//             }
//         }
//         return highEarner;
//     }
//     console.log(topEarner(salaries));

//#10

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed so far today');
console.log((today.getHours()*60 + today.getMinutes()*60 + today.getSeconds()) + ' seconds have passed so far today');

const myBirthday = new Date('1992-08-06');

let year = today.getFullYear() - myBirthday.getFullYear();
let month = today.getMonth() - myBirthday.getMonth();
let day = today.getDate() - myBirthday.getDate();
if(month < 0){
    year -= 1;
    month = 12 + month;
}
console.log(`I am ${year} years, ${month} months and ${day} days old.`);

function daysInBetween(date1, date2){
    let differenceMS = date2 - date1;  
    let millisecondsPerDay = 24 * 60 * 60 * 1000;  
    let daysBetween = Math.floor(differenceMS / millisecondsPerDay);  
    return Math.abs(daysBetween); 
    
}
console.log(`The days between ${myBirthday.toLocaleDateString()} and 
${today.toLocaleDateString()} is`,daysInBetween(myBirthday, today), 'days.');
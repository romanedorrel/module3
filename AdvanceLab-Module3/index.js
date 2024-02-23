// const step1 = 'Started preparing pizza ...';

// function pizzaProcess(str){
//     const step2 = 'Made the base';
//     console.log(str);
//     pizzaProcess1(step2);
// }

// const pizzaProcess1 = (str1) => 
// {const step3 = 'Added the sauce and cheese';console.log(str1);pizzaProcess2(step3);}

// const pizzaProcess2 = function(str2) 
// {const step4 = 'Added the pizza toppings';console.log(str2);pizzaProcess3(step4);}

// function pizzaProcess3(str3){
//     const step5 = 'Cook the pizza';
//     console.log(str3);
//     pizzaProcess4(step5);
// }

// const pizzaProcess4 = (str4) => 
// {
//     const step6 = 'Pizza is ready';
//     console.log(str4);
//     pizzaProcess5(step6);
// }

// let pizzaProcess5 = function(str5) {console.log(str5);}


// pizzaProcess(step1);

// const step1 = 'Started preparing pizza ...';

// function pizzaProcess(str){
//     const step2 = 'Made the base';
//     console.log(str);
//     setTimeout(pizzaProcess1, 1000, `${step2}`);
// }

// const pizzaProcess1 = (str1) => 
// {
//     const step3 = 'Added the sauce and cheese';
//     console.log(str1);
//     setTimeout(pizzaProcess2, 1000, `${step3}`);
// }

// const pizzaProcess2 = function(str2) 
// {
//     const step4 = 'Added the pizza toppings';
//     console.log(str2);
//     setTimeout(pizzaProcess3, 1000, `${step4}`);
// }

// function pizzaProcess3(str3){
//     const step5 = 'Cook the pizza';
//     console.log(str3);
//     setTimeout(pizzaProcess4, 1000, `${step5}`);
// }

// const pizzaProcess4 = (str4) => 
// {
//     const step6 = 'Pizza is ready';
//     console.log(str4);
//     setTimeout(pizzaProcess5, 1000, `${step6}`);
// }

// let pizzaProcess5 = function(str5) 
// {
//     console.log(str5);
// }

// pizzaProcess(step1);

// //#1

// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;
//     };
// }
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

// let counter2 = makeCounter();
// counter2();

// function makeCounter2(startFrom) {
//     let currentCount = startFrom;
//     return function() {
//     currentCount++;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }

// let counter3 = makeCounter2(2);
// counter3();  
// counter3();  

// function makeCounter3(startFrom, incrementBy) {
//     let currentCount = startFrom;
//     return function() {
//     currentCount+= incrementBy;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }

// let counter4 = makeCounter3(1, 2);
//     counter4();  
//     counter4();   

//#2

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');// This will print last
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); // This will print third
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); // This will print second
// delayMsg('#4: Not delayed at all'); // This will print first

// const delayMsg2 = (msg) => console.log(`This message will be printed after a delay: ${msg}`)

// setTimeout(delayMsg2, 100, '#1: Delayed by 100ms');// This will print last
// setTimeout(delayMsg2, 20, '#2: Delayed by 20ms'); // This will print third
// setTimeout(delayMsg2, 0, '#3: Delayed by 0ms'); // This will print second
// delayMsg2('#4: Not delayed at all'); // This will print first
// let delayFive = setTimeout(delayMsg2, 10000,'#5: Delayed by 10s');
// clearTimeout(delayFive);

//#3

// function debounce(func) { 
//     let timeout; 
//     return function() { 
    
//     clearTimeout(timeout); 
    
//     timeout = setTimeout(func, 1000); 
//     }; 
//     } 
//     function printMe() {
//         console.log('printing debounced message')
//         }
//         // printMe = debounce(printMe); //create this debounce function for a)
//         // //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//         // setTimeout( printMe, 100);
//         // setTimeout( printMe, 200);
//         // setTimeout( printMe, 300);   

//         function debounce2(func, ms) { 
//             let timeout; 
//             return function() { 
            
//             clearTimeout(timeout); 
            
//             timeout = setTimeout(func, ms); 
//             }; 
//             }       

//             printMe = debounce2(printMe, 3000); 
//             //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//             setTimeout( printMe, 100);
//             setTimeout( printMe, 200);
//             setTimeout( printMe, 300);

//             function debounce3(func, ms) { 
//                 let timeout; 
//                 return function(msg) { 
                
//                 clearTimeout(timeout); 
                
//                 timeout = setTimeout(func, ms, msg); 
//                 }; 
//                 }  
            
//             function printMe2(msg) {
//                 console.log(`printing debounced message ${msg}`)
//                 }

//             // printMe2 = debounce3(printMe2, 3000); 
//             // //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
//             // setTimeout( printMe2, 100, 'first');
//             // setTimeout( printMe2, 200, 'second');
//             // setTimeout( printMe2, 300, 'last called');    

//#4

// function printFibonacci(){
//     let firstNumber  = 1;
//     let secondNumber = 1;

//     console.log(firstNumber, secondNumber);

//     setInterval(function printNext(){
//     let next = firstNumber + secondNumber
//     console.log(next);
//     firstNumber = secondNumber;
//     secondNumber = next;},1000)
//} 

//printFibonacci();

// function printFibonacciTimeouts() { //using nested setTimeout 
//         let firstNumber  = 1;
//         let secondNumber = 1;
    
//         console.log(firstNumber, secondNumber);
      
//         setTimeout(function printNext() {  
//         let next = firstNumber + secondNumber; 
//         console.log(next); 
//         firstNumber = secondNumber;
//         secondNumber = next;
//         //call the same function again with different argument values 
//         setTimeout(printNext, 1000);  
//         }, 1000); 
//         } 

    //    printFibonacciTimeouts();
        
// function printFibonacci(limit){
//     let firstNumber  = 1;
//     let secondNumber = 1;
//     let counter = 2;
//     console.log(firstNumber);
//     console.log(secondNumber);

//     let trackInterval = setInterval(function printNext(){
//     let next = firstNumber + secondNumber
//     console.log(next);
//     firstNumber = secondNumber;
//     secondNumber = next;
//     counter++;
//     if( counter == limit) clearInterval(trackInterval);
// },1000)
        
// } 
// printFibonacci(5);

// //#5

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
    
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
//     };
//     car.description(); //works
//     setTimeout(car.description, 200); //fails This fails because the function 
//     //description uses this to point to the make model and year,
//     // and this is only relevent inside the function it is being referred to.

//     setTimeout(() => car.description(), 200);

//     car = {...car, year: 2024} //Description will now print updated year as the objects has been changed

//     let carDescription = car.description.bind(car);
//     setTimeout(carDescription, 1000);

//     car = { ...car, model: 'Panamera'};

//#6

// Function.prototype.delay = function(ms) { 
//     let originalFunction = this; 
//     return function(arg1, arg2) { 
//     setTimeout(originalFunction, ms, arg1, arg2); 
//     } 
//     }; 
//     multiply.delay(200)(5, 5); // prints 25 after 200 milliseconds 
    

// function multiply(a, b) {
//     console.log( a * b );
//     }
//     multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//     Function.prototype.delayB = function(ms) { 
//         let originalFunction = this; 
//         return function() { 
//         setTimeout(() => originalFunction.apply(this, arguments), ms); 
//         } 
//         }; 
//     multiply.delayB(1000)(5, 5);

//     function multiply2(a, b, c, d) {
//         console.log( a * b * c * d);
//         }
//         multiply2.delayB(500)(5, 4, 3, 2);

//#7

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     }

//     Person.prototype.toString = function(){
//         return `${this.name} ${this.age} ${this.gender}`
//     }
//     const person1 = new Person('James Brown', 73, 'male')
//     console.log('person1: '+person1)

//     const person2 = new Person('Bobby Brown', 55, 'male')
//     console.log('person 2: ' +person2);

// function Student(name, age, gender, cohort) {
//     Person.call(this, name, age, gender);
//     this.cohort = cohort;
// }    
// Student.prototype.toString = function(){
//     return `${this.name} ${this.age} ${this.gender} ${this.cohort}`
// }

// const student = new Student('Jacob Laney', 23, 'Male', 'what-ever-a-cohort-is')
// console.log('student 1: ' +student);

// const student2 = new Student('Janey Hope', 20, 'Female', 'whatever-a-cohort-is')
// console.log('Student 2: ' +student2);

//#8

// class DigitalClock {
//     constructor(prefix) {
//     this.prefix = prefix;
//     }
//     display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//     date.getSeconds()];
//     if (hours < 10) hours = '0' + hours;
//     if (mins < 10) mins = '0' + mins;
//     if (secs < 10) secs = '0' + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//     clearInterval(this.timer);
//     }
//     start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//     }
//     }
//     const myClock = new DigitalClock('my clock:')
//     myClock.start()

// class  PrecisionClock extends DigitalClock {
//     constructor(prefix, precision) { 
//         super(prefix); 
//         this.precision = precision ? precision : 1000; 
//         } 
//         start() {
//             this.display();
//             this.timer = setInterval(() => this.display(), this.precision);
//             }
            
// }

// const myPrecisionClock = new PrecisionClock('my clock1: ', 2000);
// myPrecisionClock.start();

// class AlarmClock extends DigitalClock { 
//     constructor(prefix, wakeupTime) { 
//     super(prefix); 
//     this.wakeupTime = wakeupTime ? wakeupTime : '07:00' 
//     } 
//     checkDisplay() { 
//     const now = new Date(); 
//     const wakeupHours = this.wakeupTime.substring(0, 2); 
//     const wakeupMins = this.wakeupTime.substring(3) 
//     if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) { console.log('Wake Up!'); 
//     this.stop(); 
//     } else { 
//     this.display(); 
//     } 
//     } 
//     start() { 
//     this.checkDisplay(); 
//     this.timer = setInterval(() => this.checkDisplay(), 1000); 
//     }  
//     }
//     const myAlarmClock = new AlarmClock('my alarm clock:', '17:00') 
//     myAlarmClock.start() 
    
//#9

// function randomDelay() {

//     let timeOut = Math.ceil(Math.random()*10);
//     return new Promise((resolve) => setTimeout(resolve, timeOut*1000)) // your code
//     }
//     randomDelay().then(() => console.log('There appears to have been a delay.'));

//     function randomDelay2() {

//         let timeOut = Math.ceil(Math.random()*10);
//         return new Promise((resolve, reject) => setTimeout((timeOut % 2 ===0) ? resolve: reject, timeOut*1000,timeOut)) // your code
//     }    
//     randomDelay2() // consume the promise by responding to outcomes when they happen
//         .then( (timeOut) => console.log('Success! '+timeOut) ) // prints resolve msg
//         .catch( (timeOut) => console.log('Error! ' +timeOut) ) //   

// //# 10

// import fetch from 'node-fetch'
// globalThis.fetch = fetch
// function fetchURLData(url) {
// let fetchPromise = fetch(url).then(response => {
// if (response.status === 200) {
// return response.json();
// } else {
// throw new Error(`Request failed with status ${response.status}`);
// }

// });
// return fetchPromise;
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));
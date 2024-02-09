const doubleQuote = "String that can include 'single quotes'"
const singleQuote = 'String that can include "double quotes"'
const backTicks = `String that can include variables - ${singleQuote}`;

//console.log(backTicks)


#1

console.log('Hello'); console.log('World'); //Hello newline World
console.log("" + 1 + 0); //10
console.log("" -1 + 0); //-1
console.log(true + false) //1
console.log(6/"3") //2
console.log("2"*"3") //6
console.log(4 + 5 + "px") //45px
console.log("$" + 4 + 5) //$45
console.log("4" - 2) //2
console.log("4px" - 2) //NaN
console.log(" -9 " + 5) //-95
console;log(" -9 " - 5) //-14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(" \t \n" - 2) //-2

#2

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four //34 Wrong + concat strings
let addition2 = Number(three) + Number(four); //converts string to number before addition.
let multiplication = three * four // 12 right multipication converts numbers in strings to numbers 
let division = three / four // 0.75 right division converts numbers in strings to numbers
let subtraction = three - four // -1 right subtraction converts numbers in strings to numbers
let lessThan1 = three < four //true right three comes before four alphabetically
let lessThan2 = thirty < four // true wrong thirty comes before four alphabetically
let lessthan3 = Number(thirty) < Number(four) // false right converts string to number before comparison

#3

if (0) console.log('#1 zero is true') // zero results in false does not print 
if ("0") console.log('#2 zero is true') // strings results in true will print
if (null) console.log('null is true') // null results in false does not print
if (-1) console.log('negative is true') // non-zero numbers results in true will print
if (1) console.log('positive is true') // none-zero number results in true will print

#4

let a = 2, b = 3;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10': 'greater than 10';

//+= adds the selction to current value of results

#5

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

const getGreetingA = function(name){
    return 'Hello ' + name + '!';
}    

const getGreetingB = (name) => 'Hello ' + name + '!';

console.log(getGreeting('John'))
console.log(getGreetingA('Jean'))
console.log(getGreetingB('Joseph'))

#6

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName:'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
         person.numFingers > 5 ?'You killed my father. Prepare to die.': 'Nice to meet you.'
    
}
    inigo.greeting(westley)
    inigo.greeting(rugen)

#7

const basketballGame = {
    score: 0,
    foulCount: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    foul(){
    this.foulCount++;
    return this;
    },
    halfTime() {
    console.log('Halftime score is '+this.score + ' The foul count is: ' +this.foulCount);
    return this;
    },
    fullTime(){
        console.log('Fulltime score is ' + this.score + ' The foul count is: ' +this.foulCount);
        return this;
    }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime()
    .foul().basket().threePointer().freeThrow().fullTime();

#8

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
   
const melbourne = {
    name: 'Melbourne',
    population: 2456789,
    state: 'Unsure',
    founder: 'At some point',
    timezone: 'Australia/Melbourne',
    size: 'Unknown'
}    
function printCityProperties(cityObject){
    for(objs in cityObject){
        console.log(objs + ' = ' + cityObject[objs])
    }
    console.log(' \n')
}
printCityProperties(sydney);
printCityProperties(melbourne);
   
#9

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = {name: 'Fluffy', breed: 'Siberian'};

let moreSports = teamSports;
moreSports.push('Football');
moreSports.unshift('Basketball');

let dog2 = dog1;
dog2 = 'Rocky';

// let cat2 = cat1;
// cat2.name = 'hairy';

console.log(teamSports); // Values reflect changes to moreSports as they were set equal to each other
console.log(dog1); // The string passes a value instead of a refernce, allowing the orignal string to remain the same after changes to dog2
console.log(cat1);// Values reflect changes to cat2 as they were set equal to each other

let cat3 = {};

for (let key in cat1){
    cat3[key] = cat1[key];
}
cat3.name = 'hairy'

let moreSports2 = [...teamSports];
moreSports2.push('Track');

console.log(moreSports2)
console.log(cat3)

#10

 function Person (name, age) {
         this.name = name;
         this.age = age;
         this.human = true;
         this.canDrive = () => this.age >= 16
     }

 let person1 = new Person('Howie', 23);
 let person2 = new Person('Joan', 30);

 class PersonClass {
     constructor(name, age){
         this.name = name;
         this.age = age;
         this.human = true;
     }
     canDrive() {
         return this.age >= 16;
     }
 }
 let person3 = new Person('Josie', 15);
 console.log(person1)
 console.log(person2)
 console.log(person3)
if (person1.canDrive()) console.log(person1.name + ' is ' + person1.age + ' and is old enough to drive.')
if (person2.canDrive()) console.log(person2.name + ' is ' + person2.age + ' and is old enough to drive.')
if (person3.canDrive()) console.log(person3.name + ' is ' + person3.age + ' and is old enough to drive.')
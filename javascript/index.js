console.log("This is Javascript");
console.log(2 * 2);
console.log("This works separately");

let myName = "Alice";

// let is a declaration keyword
// myName is the variable name
// = is the assign operator
// "Alice" is the data of String type
// ; is at the end of a line of code

let age = 25;
myName = "Seyi";
console.log(myName, age);

const tutor = "Ini";
console.log(tutor);

let a = "Inijones";
let b = 27;
let c = true;
let d;
let e = "Something";
e = null;

console.log("The data type for a is " + typeof a);
console.log("The data type for b is " + typeof b);
console.log("The data type for c is " + typeof c);
console.log("The data type for d is " + typeof d);
console.log(e);

let x = 10;

// Comment
/* */ //  Multiline Comment

x = "Now I'm a string!";
console.log(typeof x); // string

// Objects
let michael = {
  name: "Michael",
  age: 24,
  height: "180cm",
};

michael.age = 54;
michael["age"] = 30;

console.log(michael);

// Array
let students = ["Michael", "Seyi", "Motunrayo", "Feranmi"];

console.log(students[1]);

students.push("Chris");
console.log(students);

students.pop();
console.log(students);

students.shift();
console.log(students);

// Functions

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Chris"));

const greeting = (name, age) =>
  "Hello, " + name + ", and I am " + age + " years old.";

console.log(greeting("Ini", 27));

const myday = (day, night) =>
  `I ate rice by ${day} and I ate amala by ${night}.`;

console.log(myday("9am", "8pm"));

const getSeyisAge = (yearOfBirth) => {
  let thisYear = 2025;
  let herYear = yearOfBirth;
  let age = thisYear - herYear;
  console.log("Seyi's age is " + age); // Concatenation
};

getSeyisAge(2003);

const substract = (x, y) => y - x;

console.log(`The difference between x and y is ${substract(10, 20)}`);

// Operators in Javascript
// Conditions and Loops

// Operator

// 1. Arithmetic
// 2. Comparison
// 3. Assignment
// 4. Logical
// 5. String = Concatenation

// Arithmetic Operators or Symbols in JS

/// + = Addition
/// - = Substraction
/// / = Division
/// * = Multiplication
/// % = Modulus

let firstNumber = 3;
let secondNumber = 2;
console.log("The modulus of 3 and 2 is " + (firstNumber % secondNumber));
console.log("The addition of 3 and 2 is " + (firstNumber + secondNumber));
console.log("The substraction of 3 from 2 is " + (firstNumber - secondNumber));
console.log("The division of 3 and 2 is " + firstNumber / secondNumber);
console.log("The multiplication of 3 and 2 is " + firstNumber * secondNumber);

// ** = Exponential
let number = 2;
let power = 3;
console.log("2 raised to the power of 3 is ", number ** power);

// -- = Decrement
let thatNumber = 20;
let decrement = --thatNumber;
console.log("The decrement on 20 is", decrement);

// ++ = Increment
let thoseNumber = 20;
let increment = ++thoseNumber;
console.log("The increment on 20 is", increment);

// Comparison Operators and Symbols
/// > = Greater Than
/// < = Less Than
/// === = Equal to (Strict)
/// == = Equals to (Loose)
// != = Not Eqauls to (Loose)
// !== = Not Equals to (Strict)
/// >= = Greater Than or Equal to
/// <= = Less Than or Equal to

let anotherNumber = 4;
let thisOtherNumber = 5;
let someOtherNumber = 4;

console.log(thisOtherNumber > anotherNumber);
console.log(thisOtherNumber < anotherNumber);
console.log(anotherNumber === someOtherNumber);
console.log(anotherNumber === "4");
console.log(anotherNumber == "4");

console.log(anotherNumber !== someOtherNumber);
console.log(anotherNumber != "4");

// Assignment Operators or Symbol

/// = = Assign Symbol
let seyiName = "Seyi";

// += = Add and Assign
let myNumber = 2;
myNumber += 2;
console.log(myNumber);

// -= = Subtract and Assign
myNumber -= 3;
console.log(myNumber);

// *= = Multiply and Assign
myNumber *= 11;
console.log(myNumber);

// /= = Divide and Assign
myNumber /= 11;
console.log(myNumber);

/// Logical Operators

// && = AND Operator
console.log(4 === 4 && 5 === 5);
// The left side is TRUE while the right side is TRUE
// So TRUE && TRUE = TRUE
// Any FALSE tend to FALSE
console.log(true && false);

// || = OR Operator
console.log(4 === 4 || 5 === 5);
console.log(4 === 5 || 5 === 5);
console.log(4 === 3 || 5 === 2);

// ! = NOT Operator
let myStory = true;
let yourStory = false;
console.log(!myStory);
console.log(!(myStory || yourStory));

// String Operator
// Inside String, + means CONCATENATION
console.log("Hello " + "Feranmi, " + "How are you doing today?");

// Condition
/// Conditionals make your code make
/// decision based on certain situation(s).

// 1. If
// 2. Else
// 3. Else If

// Example: Voting Age
let feranmiAge = 17;

if (feranmiAge >= 18) {
  console.log("Feranmi is an adult.");
} else if (feranmiAge >= 16) {
  console.log("Feranmi can write Jamb into higher instution.");
} else {
  console.log("Feranmi is too young.");
}

// Ternary Operator (Short Form of If-Else Statement)
let message =
  feranmiAge >= 18 ? "Adult" : feranmiAge >= 16 ? "Go write jamb" : "Too Young";

console.log(message);

// Switch Statement
// This is useful when comparing the same variable against multiple values.
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Invalid Color");
}

// Loops (Repetitions)
// Loop lets your code repeat actions multiple times

// For Loop
// for (initialize, stopping condition, action

for (let i = 1; i < 5; i++) {
  console.log("Count" + i);
}

// While Loop
let j = 2;
while (j < 6) {
  console.log("While Count " + j);
  j++;
}

// Do While
let k = 1;
do {
  console.log("Do While Count " + k);
  k++;
} while (k <= 5);

// Algorithms
// Even numbers between 1 and 7
// 1. Even and Odd
for (i = 1; i <= 7; i++) {
  if (i % 2 === 1) {
    console.log("An odd number between 1 and 7 is " + i);
  }
}

// 2. Multiplication table
// Do this for 2
// for (initialize i, let it stop at 12, increase i)
//{
// log: ... + (2 * i)
//}
for (i = 1; i <= 12; i++) {
  console.log("2 * " + i + " = " + 2 * i);
}

// 3. Check if number is positive or negative
let z = -5;

if (z > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

// 4. Check the Largest of three numbers
let u = 100;
let v = 200;
let w = 300;

if (u > v && u > w) {
  console.log("u is the largest");
} else if (v > u && v > w) {
  console.log("v is the largest");
} else {
  console.log("w is the largest");
}

// 5. Sum of the first N numbers
let n = 5;
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("the sum of the first n numbers is " + sum);

// 6. Sum of even numbers up to n
let q = 10;
let sumEven = 0;

for (let i = 1; i <= q; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
console.log("the sum of the even numbers up to n is " + sumEven);

// 7. Print all the odd numbers in a range
let start = 3;
let end = 20;

for (let i = start; i <= end; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// 8. Find the average number of an array
let arr = [2, 4, 6, 8];
let sumArr = 0;
let lengthArr = arr.length;

for (let i = 0; i < lengthArr; i++) {
  sumArr += arr[i];
}

console.log("The average of the array is " + sumArr / lengthArr);

// 9. Find the longest word in a sentence
let sentence = "I love coding";

let words = sentence.split(" ");
console.log(words);
let longest = words[0];

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log("The longest word in the sentence is " + longest);

// Bye Bye Algorithm: The pepper that you have showed me is enough

// Class
// Class is a template of creating an Object.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
  }
}

const person1 = new Person("Ini", 27);

console.log(person1);
console.log(person1.name);
console.log(person1.age);
person1.greet();


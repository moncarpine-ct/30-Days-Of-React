/*
  1. Get user input using prompt(“Enter your age:”). 
  If user is 18 or older , give feedback:'You are old enough to drive' 
  but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/
const age = prompt('Enter your age:');

if (age >= 18) {
  alert('You are old enough to drive');
} else {
  const yearsToWait = 18 - age;
  alert(`Wait for ${yearsToWait} years to turn 18.`);
}

/*
  2. Compare the values of myAge and yourAge using if … else. 
  Based on the comparison and log the result to console stating who is older (me or you). 
  Use prompt(“Enter your age:”) to get the age as input.
*/
const myAge = 21;
const yourAge = prompt('Enter your age:');

if (myAge > yourAge) {
  console.log('I am older than you.');
} else if (yourAge < myAge) {
  console.log('You are older than me.');
} else {
  console.log('We have the same age.');
}

/* 
  3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
  Try to implement it in two ways:
  - using if else
  - ternary operator.
*/
const a = 10;
const b = 20;

if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than b');
}

a > b ? console.log('a is greater than b') : console.log('a is less than b');

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const number = 123;

if (number % 2 === 0) {
  console.log('number is even.');
}


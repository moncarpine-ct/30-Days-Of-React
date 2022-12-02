/* 
  1. Write a code which can give grades to students according to theirs scores:
  - 90-100, A
  - 70-89, B
  - 60-69, C
  - 50-59, D
  - 0-49, F
*/
const score = prompt('Enter score:');

switch (true) {
  case score >= 90:
    console.log('A');
    break;
  case score >= 70:
    console.log('B');
    break;
  case score >= 60:
    console.log('C');
    break;
  case score >= 50:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}

/*
  2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  - September, October or November, the season is Autumn.
  - December, January or February, the season is Winter.
  - March, April or May, the season is Spring
  - June, July or August, the season is Summer
*/
const month = prompt('Enter month:');

switch (month) {
  case 'September':
  case 'October':
  case 'November':
    console.log('The season is Autumn');
    break;
  case 'December':
  case 'January':
  case 'February':
    console.log('The season is Winter');
    break;
  case 'March':
  case 'April':
  case 'May':
    console.log('The season is Spring');
    break;
  case 'June':
  case 'July':
  case 'August':
    console.log('The season is Summer');
    break;
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
const day = prompt('What is the day today?');
if (day.toUpperCase() === 'SATURDAY' || day.toUpperCase() === 'SUNDAY') {
  console.log(`${day} is a weekend.`); // format `day` to title case.
} else {
  console.log(`${day} is a working day.`); // format `day` to title case.
}
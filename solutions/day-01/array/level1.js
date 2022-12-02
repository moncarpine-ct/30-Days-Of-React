// 1. Declare an empty array;
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const fiveElements = [1, 2, 3, 4, 5];

// 3. Find the length of your array
fiveElements.length;

// 4. Get the first item, the middle item and the last item of the array
fiveElements[0];
fiveElements[2];
fiveElements[fiveElements.length - 1];

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 2, 'tree', 'for', 5.5, [6, 7]];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
itCompanies.forEach(e => console.log(e));

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(e => console.log(e.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const indexOfCompany = itCompanies.indexOf('Facebook');
indexOfCompany !== -1 ? console.log(itCompanies[indexOfCompany]) : console.log('company not found');

// 14. Filter out companies which have more than one 'o' without the filter method
// const filteredCompanies = itCompanies.map(e => e.split().includes('o'));

// 15. Sort the array using sort() method
itCompanies.sort();

// 16. Reverse the array using reverse() method
itCompanies.reverse();

// 17. Slice out the first 3 companies from the array
itCompanies.slice(0, 3);

// 18. Slice out the last 3 companies from the array
itCompanies.slice(4);
itCompanies.slice(itCompanies.length - 3);

// 19. Slice out the middle IT company or companies from the array
itCompanies.slice(3, 4);

// 20. Remove the first IT company from the array
itCompanies.shift();

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(3, 1);

// 22. Remove the last IT company from the array
itCompanies.pop();

// 23. Remove all IT companies
itCompanies.splice();
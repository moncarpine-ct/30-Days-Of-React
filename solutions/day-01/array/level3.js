import countries from "./countries";

/*
1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

- Sort the array and find the min and max age 
- Find the median age(one middle item or two middle items divided by two) 
- Find the average age(all items divided by number of items) 
- Find the range of the ages(max minus min) 
- Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// median
const totalAge = ages.reduce((total, age) => total + age, 0);
const averageAge = totalAge / ages.length;
const ageRange = maxAge - minAge;
// abs()

// 2. Slice the first ten countries from the countries array
countries.slice(0, 10);

// 3. Find the middle country(ies) in the countries array


// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
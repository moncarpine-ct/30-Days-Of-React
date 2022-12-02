import React from "react";

const numbers = Array.from(new Array(32), (x, i) => 'limegreen');

numbers.forEach((element, index, array) => {
  if (isPrime(index)) {
    array[index] = 'tomato';
  } else if (isOdd(index)) {
    array[index] = 'khaki';
  }
});

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function isOdd(num) {
	return num % 2 !== 0;
}

const NumberBox = ({number, color}) => (
  <div style={{ backgroundColor: color, width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ color: 'white' }}>{number}</h1>
  </div>
);

const NumbersGrid = () => {
  const list = numbers.map((color, index) => 
    <NumberBox key={index} number={index} color={color} />
  );
  return  (
    <React.Fragment>
      <h1>30 Days of React</h1>
      <h2>Number Generator</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, fit-content(100%))', gap: '2px'}}>
        {list}
      </div>
    </React.Fragment>
  )
};

export default NumbersGrid;
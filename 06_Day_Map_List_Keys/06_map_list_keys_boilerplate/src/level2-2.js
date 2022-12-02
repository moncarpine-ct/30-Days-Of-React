import React from "react";

const colors = Array.from(new Array(32), (x, i) => getRandomColor());

const ColorBox = ({ color }) => (
  <div style={{ backgroundColor: color, width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h2 style={{ color: 'white' }}>{color}</h2>
  </div>
);

const ColorsGrid = () => {
  const list = colors.map((color, index) => 
    <ColorBox key={index} color={color} />
  );
  return  (
    <React.Fragment>
      <h1>30 Days of React</h1>
      <h2>Hexadecimal Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, fit-content(100%))', gap: '2px'}}>
        {list}
      </div>
    </React.Fragment>
  )
};

function getRandomColor() {
  return "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
}

export default ColorsGrid;
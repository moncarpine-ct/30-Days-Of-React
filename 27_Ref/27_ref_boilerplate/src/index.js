import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [colorsGrid, setColorsGrid] = useState([]);

  const getRandomColor = () => 
    "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);

  const ColorBox = ({ color }) => (
    <div style={{ backgroundColor: color, width: '150px', height: '150px', 
                  display: 'grid', justifyContent: 'center', alignItems: 'center',
                  borderRadius: '5px' }}>
      <h3 style={{ color: 'white', fontWeight: 'bold' }}>{color}</h3>
      <button style={{ fontSize: '16px', color: 'white', backgroundColor: 'transparent', 
                       border: 'none', cursor: 'pointer' }}
              onClick={() => handleCopy(color)}>
        Copy
      </button>
    </div>
  );

  // Using async await to avoid `DOMException: Document is not focused` error.
  const handleCopy = async (color) => {
    await navigator.clipboard.writeText(color);
    alert(`Color ${color} copied!`);
  };

  const handleGenerate = useCallback(() => {
    const colorsList = Array.from(new Array(32), (x, i) => getRandomColor());
    const grid = colorsList.map((color, index) => 
      <ColorBox key={index} color={color} />
    );
    setColorsGrid(grid);
  }, []);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return  (
    <center>
      <h1>30 Days of React</h1>
      <h2>Hexadecimal Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, fit-content(100%))', 
                    gap: '10px', justifyContent: 'center', padding: '20px'}}>
        {colorsGrid}
      </div>
      <button style={{ fontSize: '24px', color: 'white', backgroundColor: 'mediumslateblue', 
                       padding: '12px', width: '300px', border: 'none', borderRadius: '5px',
                       cursor: 'pointer' }}
              onClick={() => handleGenerate()}>
        GENERATE
      </button>
    </center>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

import React, { useState } from 'react';

function Header() {
  const [noCircle, setNoCircle] = useState(0);
  const [colors,setColors] = useState([]) //array for color

  const handleClick = () => {
    // setCircles((prevCircles) => [...prevCircles, prevCircles.length]);
    setColors((prevColors) => [...prevColors, 'red']);
    setNoCircle(noCircle + 1);
  };

  const handleRefresh = () => {
    // setCircles([]);
    setColors([])
    setNoCircle(0);

  }
  const handleColorChange = (index) => {
    setColors((prevColors)=>{
        const newColors = [...prevColors];
        newColors[index] = newColors[index] === 'red'? 'blue': 'red';
        return newColors;
    });
      
  };

  return (
    <div>
      <button onClick={handleClick}>Add Circle</button>
      <p>The number of circles: {noCircle}</p>
      <button onClick={handleRefresh}>Reset</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {/* Render the circles dynamically */}
        {colors.map((color , index ) => (
          <div
            key={index}
            onClick={() => handleColorChange(index)} 
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: color,
              margin: '10px',
              cursor: 'pointer', 
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;

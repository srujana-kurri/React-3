import { useState } from 'react';
import './App.css';
import colorArray from './colors';
import List from './list';

function App() {
  const [color, setColor] = useState(colorArray);
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <center>
      <div id='container'>
        {showList && <List colors={color}/>}
      </div>
        <p>Color Picker</p>
      <h2 id="display"></h2>
      <button onClick={handleButtonClick}>Pick a color</button>
    </center>
  );
}

export default App;


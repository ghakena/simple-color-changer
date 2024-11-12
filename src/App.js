import Square from "./Square";
import Input from "./Input";
import { useState } from "react";
import './index.css';

function App() {
  const [colorValue, setColorValue] = useState('Empty Value');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <div className='App'>
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText} 
      />
    </div>
  );
}

export default App;

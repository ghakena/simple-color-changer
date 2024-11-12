import React from 'react';
import colornames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter color name: </label>
      <input
        autoFocus
        type='text'
        placeholder='Enter color name'
        required
        value={colorValue}
        onChange={
            (e) => {
                setColorValue(e.target.value)
                setHexValue(colornames(e.target.value))
            }
        }
      />
      <button
        type='button'
        onClick={(e) => setIsDarkText(!isDarkText)}
      >Toggle Text Color</button>
    </form>
  )
}

export default Input;

import { ShowError } from './ShowError';
import React from 'react';
import { useAppContext } from './App';
export function CardNumber({ inputBorderStyle }) {
  const {
    handleChangeInput,
    input,
    isCardNumStr,
    isCardNumFullLen,
    handleOnCardNumBlur,
    handleOnCardNumFocus,
    userInput,
    isSubmitCardNumber,
  } = useAppContext();
  return (
    <div className="card-holder-number">
      <label htmlFor="number">CARD NUMBER</label>

      <input
        placeholder="e.g. 1234 5678 9101"
        type="text"
        name="number"
        style={isSubmitCardNumber || isCardNumStr || isCardNumFullLen ? inputBorderStyle : {}}
        value={input}
        onChange={(e) => handleChangeInput(e)}
        id="number"
        onBlur={handleOnCardNumBlur}
        onFocus={handleOnCardNumFocus}
      />

      <ShowError
        isSubmitCardNumber={isSubmitCardNumber}
        userInput={userInput}
        isCardNumStr={isCardNumStr}
        isCardNumFullLen={isCardNumFullLen}
      />
    </div>
  );
}

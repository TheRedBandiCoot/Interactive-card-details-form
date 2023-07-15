import React from 'react';
import { useAppContext } from './App';
import { ShowError } from './ShowError';
export function CardName({ inputBorderStyle }) {
  const { cardNameInputRef, cardNameInput, handleCardNameInput, isSubmitCardName, handleOnCardNameFocus } =
    useAppContext();
  return (
    <div className="card-holder-name">
      <label htmlFor="name">CARDHOLDER NAME </label>
      <input
        placeholder="e.g. Jane Austin"
        ref={cardNameInputRef}
        value={cardNameInput}
        onChange={handleCardNameInput}
        type="text"
        name="name"
        id="name"
        style={isSubmitCardName ? inputBorderStyle : {}}
        onFocus={handleOnCardNameFocus}
      />
      <ShowError isSubmitCardName={isSubmitCardName} />
    </div>
  );
}

import { ExpDateAndYear } from './ExpMonthAndYear';
import React from 'react';
import { useAppContext } from './App';
import { ShowError } from './ShowError';

export function CardExpCvc({ inputBorderStyle }) {
  const { cvcInputRef, handleChangeCvc, cvc, handleOnCvcBlur, isCvcFullLen, handleOnCvcFocus, isSubmitCvc } =
    useAppContext();
  return (
    <div className="card-holder-exp-date-cvc">
      {/*//* exp date */}
      <ExpDateAndYear inputBorderStyle={inputBorderStyle} />
      {/*//* cvc */}
      <div className="cvc">
        <label htmlFor="cvc">cvc</label>
        <input
          placeholder="e.g. 123"
          ref={cvcInputRef}
          value={cvc}
          onBlur={handleOnCvcBlur}
          onChange={handleChangeCvc}
          type="number"
          id="cvc"
          name="cvc"
          style={isSubmitCvc || isCvcFullLen ? inputBorderStyle : {}}
          onFocus={handleOnCvcFocus}
        />
        <ShowError isSubmitCvc={isSubmitCvc} isCvcFullLen={isCvcFullLen} />
      </div>
    </div>
  );
}

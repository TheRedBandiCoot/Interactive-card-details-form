import { CardExpCvc } from './cardExpCvc';
import { CardName } from './CardName';
import React from 'react';
import { CardNumber } from './CardNumber';
import { useAppContext } from './App';
export function Form() {
  const { buttonInputRef, handleSubmit } = useAppContext();
  const inputBorderStyle = { border: '0.1rem solid hsl(0, 100%, 66%)' };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/*//* card holder name */}
      <CardName inputBorderStyle={inputBorderStyle} />
      {/*//* card holder number */}
      <CardNumber inputBorderStyle={inputBorderStyle} />
      {/*//* card holder exp date & cvc */}
      <CardExpCvc inputBorderStyle={inputBorderStyle} />
      <button className="btn" ref={buttonInputRef} type="submit">
        Confirm
      </button>
    </form>
  );
}

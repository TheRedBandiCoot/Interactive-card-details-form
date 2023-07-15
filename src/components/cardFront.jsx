import React from 'react';
import { useAppContext } from './App';
export function CardFront({ img2 }) {
  const { input, month, year, cardNameInput } = useAppContext();
  return (
    <div className="card-front">
      <div>
        <img src={img2} alt="" />
      </div>
      <p>{input || '0000 0000 0000'}</p>
      <div>
        <p>{cardNameInput.toUpperCase() || 'JANE AUSTIN'}</p>
        <p>
          {month || '00'}/{year || '00'}
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { useAppContext } from './App';
export function CardBack() {
  const { cvc } = useAppContext();
  return (
    <div className="card-back">
      <div>{cvc || '000'}</div>
    </div>
  );
}

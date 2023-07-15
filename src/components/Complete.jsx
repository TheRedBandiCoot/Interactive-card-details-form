import React from 'react';
import { useAppContext } from './App';
export function Complete({ img }) {
  const { handleComplete } = useAppContext();
  return (
    <div className="complete">
      <img src={img} alt="" />
      <h1>THANK YOU</h1>
      <p>We've added your card details</p>
      <button type="button" onClick={handleComplete} className="btn btn-complete">
        Continue
      </button>
    </div>
  );
}

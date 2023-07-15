import React from 'react';
import { useAppContext } from './App';
import { ShowError } from './ShowError';

let date = new Date();
let getYear = date.getFullYear() - 2000;

export function ExpDateAndYear({ inputBorderStyle }) {
  const {
    handleChangeMonth,
    month,
    monthInputRef,
    yearInputRef,
    year,
    handleChangeYear,
    handleOnExpYearBlur,
    handleOnExpMonthBlur,
    isSubmitMonth,
    handleOnMonthInputFocus,
    isSubmitYear,
    handleOnYearInputFocus,
  } = useAppContext();

  return (
    <div className="exp-date">
      <label htmlFor="">EXP. DATE (MM/YY)</label>
      {/*//* exp Month input */}
      <div className="exp-date-input">
        <div className="month-input">
          <input
            placeholder="MM"
            type="number"
            ref={monthInputRef}
            value={month}
            onChange={(e) => handleChangeMonth(e)}
            name="month"
            min="1"
            max="12"
            onBlur={handleOnExpMonthBlur}
            style={isSubmitMonth ? inputBorderStyle : {}}
            onFocus={handleOnMonthInputFocus}
          />
          <ShowError isSubmitMonth={isSubmitMonth} />
        </div>

        {/*//* exp Year input */}
        <div className="year-input">
          <input
            placeholder="YY"
            ref={yearInputRef}
            type="number"
            value={year}
            onChange={(e) => handleChangeYear(e)}
            name="year"
            min={getYear}
            onBlur={handleOnExpYearBlur}
            style={isSubmitYear ? inputBorderStyle : {}}
            onFocus={handleOnYearInputFocus}
          />
          <ShowError isSubmitYear={isSubmitYear} />
        </div>
      </div>
    </div>
  );
}

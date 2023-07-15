import { useRef, useState } from 'react';

let date = new Date();
let getYear = date.getFullYear() - 2000;

export default function handleFunc() {
  const [input, setInput] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [userInput, setUserInput] = useState('');
  const [cardNameInput, setCardNameInput] = useState('');
  const [isToggle, setIsToggle] = useState({
    isYear: false,
    isCardNumStr: false,
    isCardNumFullLen: false,
    isCvcFullLen: false,
    isSubmitCardNumber: false,
    isSubmitCvc: false,
    isSubmitCardName: false,
    isSubmitMonth: false,
    isSubmitYear: false,
    isComplete: false,
  });
  const {
    isYear,
    isCvcFullLen,
    isCardNumStr,
    isCardNumFullLen,
    isSubmitCardNumber,
    isSubmitCvc,
    isSubmitCardName,
    isSubmitMonth,
    isSubmitYear,
    isComplete,
  } = isToggle;
  const yearInputRef = useRef();
  const cvcInputRef = useRef();
  const buttonInputRef = useRef();

  const handleChangeInput = (e) => {
    const value = e.target.value.replace(/\s/g, '');
    setUserInput(value.slice(-1));
    if (isNaN(value)) return setIsToggle((prev) => ({ ...prev, isCardNumStr: true }));
    setIsToggle((prev) => ({ ...prev, isCardNumStr: false }));
    const formatted = [];
    for (let i = 0; i < value.length; i += 4) {
      formatted.push(value.slice(i, i + 4));
    }
    setInput(formatted.join(' '));
    // console.log(input);
  };

  const handleChangeMonth = (e) => {
    let value = e.target.value;
    if (value.length > 2) return;
    (value.length && !(value.length % 2) && yearInputRef.current.focus()) || isYear;
    if (Number(value) > 12) {
      // console.log(value);
      let split = value.split('');
      value = '0' + split[0];
      setMonth(value);
    } else {
      setMonth(value);
    }
    if (isYear) {
      setYear(getYear);
    }
    setIsToggle((prev) => ({ ...prev, isYear: true }));
  };

  const handleChangeYear = (e) => {
    const value = e.target.value;
    value.length && !(value.length % 2) && cvcInputRef.current.focus();
    Number(value) <= 99 && setYear(value);
    value.length > 1 && Number(value) < getYear && setYear(getYear);
  };

  const handleChangeCvc = (e) => {
    const value = e.target.value;
    if (value.length === 4) return buttonInputRef.current.focus();
    value.length && !(value.length % 3) && buttonInputRef.current.focus();
    Number(value) <= 999 && setCvc(value);
  };

  const handleOnCvcBlur = (e) => {
    setIsToggle((prev) => ({ ...prev, isCvcFullLen: false }));
    const value = e.target.value;
    if (value.length && value.length < 3) return setIsToggle((prev) => ({ ...prev, isCvcFullLen: true }));
    setIsToggle((prev) => ({ ...prev, isCvcFullLen: false }));
  };

  const handleOnExpMonthBlur = (e) => {
    let value = e.target.value;
    if (value === '0') return setMonth('01');
    if (value.length === 1) {
      value = '0' + value;
      setMonth(value);
      yearInputRef.current.focus();
      setYear(getYear);
    }
  };

  const handleOnExpYearBlur = (e) => {
    let value = e.target.value;
    if (value.length && value.length < 2) return setYear(getYear);
  };

  const handleOnCvcFocus = () => {
    setIsToggle((prev) => ({ ...prev, isSubmitCvc: false }));
    setIsToggle((prev) => ({ ...prev, isCvcFullLen: false }));
  };

  const handleCardNameInput = (e) => {
    setCardNameInput(e.target.value);
  };

  const handleOnCardNameFocus = () => {
    setIsToggle((prev) => ({ ...prev, isSubmitCardName: false }));
  };

  const handleOnMonthInputFocus = () => {
    setIsToggle((prev) => ({ ...prev, isSubmitMonth: false }));
  };

  const handleOnYearInputFocus = () => {
    setIsToggle((prev) => ({ ...prev, isSubmitYear: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotOkay =
      cvc.length < 3 || input.length < 14 || cardNameInput.length < 1 || month.length < 1 || year.length < 1;

    if (isNotOkay) {
      setIsToggle((prev) => ({
        ...prev,
        isSubmitCvc: cvc.length < 3,
        isSubmitCardNumber: input.length < 14,
        isSubmitCardName: cardNameInput.length < 1,
        isSubmitMonth: month.length < 1,
        isSubmitYear: year.length < 1,
      }));
      // console.log('Not Okay');
    } else {
      setIsToggle((prev) => ({ ...prev, isComplete: true }));
      // console.log('Okay');
    }
  };

  const handleComplete = () => {
    [setInput, setMonth, setCardNameInput, setYear, setCvc].forEach((f) => f(''));
    setIsToggle((prev) => ({ ...prev, isComplete: false }));
  };

  return {
    handleChangeInput,
    handleChangeMonth,
    input,
    month,
    yearInputRef,
    year,
    handleChangeYear,
    setYear,
    cvcInputRef,
    handleChangeCvc,
    cvc,
    buttonInputRef,
    handleOnCvcBlur,
    isCardNumStr,
    setIsToggle,
    isCardNumFullLen,
    handleOnExpYearBlur,
    handleOnExpMonthBlur,
    isCvcFullLen,
    handleOnCvcFocus,
    userInput,
    handleSubmit,
    cardNameInput,
    handleCardNameInput,
    setInput,
    isSubmitCardNumber,
    isSubmitCvc,
    isSubmitCardName,
    handleOnCardNameFocus,
    isSubmitMonth,
    handleOnMonthInputFocus,
    isSubmitYear,
    handleOnYearInputFocus,
    isComplete,
    handleComplete,
  };
}

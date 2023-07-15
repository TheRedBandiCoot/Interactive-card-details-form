import { useEffect, useRef } from 'react';
import handleFunc from '../components/handleFunc';
const useInputHandlerChange = () => {
  const cardNameInputRef = useRef();
  const monthInputRef = useRef();

  const {
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
  } = handleFunc();

  useEffect(() => {
    // cardNameInputRef.current.focus();
    // setYear('');
  }, []);

  useEffect(() => {
    // if (input.length > 0 && input.length % 5 === 0 && input[input.length - 1] !== ' ') {
    //   setInput((prevInput) => prevInput + ' ');
    // }
    if (input.length >= 14) {
      // setIsToggle((prev) => ({ ...prev, isCardNumFullLen: false }));
      monthInputRef.current.focus();
    }
  }, [input]);
  // console.log(input.length);
  const handleOnCardNumBlur = () => {
    setIsToggle((prev) => ({ ...prev, isCardNumStr: false }));
    if (input.length && input.length < 14)
      return setIsToggle((prev) => ({ ...prev, isCardNumFullLen: true }));
    setIsToggle((prev) => ({ ...prev, isCardNumFullLen: false }));
  };
  const handleOnCardNumFocus = () => {
    setIsToggle((prev) => ({ ...prev, isCardNumFullLen: false }));
    setIsToggle((prev) => ({ ...prev, isSubmitCardNumber: false }));
  };

  return {
    handleChangeInput,
    monthInputRef,
    cardNameInputRef,
    input,
    month,
    handleChangeMonth,
    yearInputRef,
    year,
    handleChangeYear,
    cvcInputRef,
    handleChangeCvc,
    cvc,
    buttonInputRef,
    handleOnCvcBlur,
    isCardNumStr,
    isCardNumFullLen,
    handleOnCardNumBlur,
    handleOnCardNumFocus,
    handleOnExpYearBlur,
    handleOnExpMonthBlur,
    isCvcFullLen,
    handleOnCvcFocus,
    userInput,
    handleSubmit,
    cardNameInput,
    handleCardNameInput,
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
};

export default useInputHandlerChange;

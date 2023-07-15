import React from 'react';
export function ShowError({
  isCardNumStr,
  isCardNumFullLen,
  isCvcFullLen,
  userInput,
  isSubmitCardNumber,
  isSubmitCvc,
  isSubmitCardName,
  isSubmitMonth,
  isSubmitYear,
}) {
  return (
    <div className="alert">
      {isCardNumStr && (
        <p>
          Wrong Input <strong>'{userInput}'</strong>, Number Only
        </p>
      )}
      {isCardNumFullLen && <p>Please fill numbers</p>}
      {isCvcFullLen && <p>Please Enter full CVC</p>}
      {isSubmitCvc || isSubmitCardNumber || isSubmitCardName || isSubmitMonth || isSubmitYear ? (
        <p>Can't be blank</p>
      ) : null}

      {/* {isSubmitCvc && <p>Can't be blank</p>}
      {isSubmitCardNumber && <p>Can't be blank</p>}
      {isSubmitCardName && <p>Can't be blank</p>} */}
    </div>
  );
}

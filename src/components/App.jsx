import { CardBack } from './cardBack';
import { CardFront } from './cardFront';
import { Complete } from './Complete';
import { createContext, useContext } from 'react';
import useInputHandlerChange from '../hooks/useInputHandlerChange';
import { Form } from './Form';
const AppContext = createContext();
import img from '../assets/icon-complete.svg';
import img2 from '../assets/card-logo.svg';
import imgDesk from '../assets/bg-main-desktop.png';
import imgMob from '../assets/bg-main-mobile.png';

// Custom Hook (Context API)
export const useAppContext = () => useContext(AppContext);

function App() {
  const property = useInputHandlerChange();
  const { isComplete } = property;
  return (
    <AppContext.Provider value={{ ...property }}>
      {/* <img src={imgDesk} className="main-img" alt="" /> */}
      {/*//⛔ main container */}
      <div className="main-container">
        {/*//@ Card */}
        <div className="card">
          <CardFront img2={img2} />
          <CardBack />
        </div>
        {/*//@ Form */}
        {/* <Complete img={img} /> */}
        {/* <Form /> */}
        {isComplete ? <Complete img={img} /> : <Form />}
      </div>
    </AppContext.Provider>
  );
}

export default App;

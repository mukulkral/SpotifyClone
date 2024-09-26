import { createContext, useRef, useState } from "react";

export const ContextData = createContext();

function Context({ children }) {
  const [curr, setCurr] = useState("");

  const inputData = useRef();

  const clickHandler = () => {
    setCurr(inputData.current.value);
    inputData.current.value = "";
  };
  


  const keyHandler = (e) => {
    if(e.key == 'Enter'){
     clickHandler()
    }
  };


  
  return (
    <>
      <ContextData.Provider value={{ clickHandler, inputData, keyHandler ,curr}}>
        {children}
      </ContextData.Provider>
    </>
  );
}

export default Context;

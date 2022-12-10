import react, { useState, createContext } from "react";
import App from "./App";
export const multiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  console.log(finalData);
  const submitData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    console.log(finalData);
  };

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};
export default StepContext;

import './App.css';
import { Stepper, Step, StepLabel } from "@mui/material";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import { useContext, useState } from 'react';
import { multiStepContext } from "./Stepercontext";
import Borrower from '../src/component/Borrower'
import Gurantercheck from '../src/component/Gurantercheck'
import Investorcheck from '../src/component/Investorcheck'
import Garenter from '../src/component/Garenter'
import Investor from '../src/component/Investor'
import Preview from './component/Preview';
// export const multiStepContext = createContext();


function App() {

  const { currentStep, finalData } = useContext(multiStepContext);

  // yes or no state
  const [showguarantor, setshowguarantor] = useState(false);
  const [showinvestor, setshowinvestor] = useState(false);
  // const [showDoc,setshowDoc] = useState(false);
  // yes or no function
  const getInvShow = (show) => {
    setshowinvestor(show);
  }
  const getGuarShow = (show) => {
    setshowguarantor(show);
  }
  // const getDocShow = (show) => {
    // setshowDoc(show);
  // }


  const showStep = (step) => {
    switch (step) {
      case 1:
        return (<Borrower />);
      case 2:
        return (
          <Gurantercheck getGuarShow={getGuarShow} />
        );
      case 3:

        if (showguarantor === "true") {
          return (

            <Garenter />
          )
        }
      case 4:
        return (
          <Investorcheck getInvShow={getInvShow} />
        );
      case 5:

        if (showinvestor === "true") {
          return (

            <Investor />
          )
        }
      // case 6:
      //   return (
      //     <Investorcheck geInvShow={getInvShow}/>
      //   )
      // case 7:
      //   if(showinvestor === "true"){
      //     return (
      //       <Document/>
      //     )
      //   }
      case 6:
        return( <Preview/>)
      default:
        return "Thank you";
    }


  }


  return (
    <>
      <CssBaseline />

      <Stepper className='steper' activeStep={currentStep - 1} >
        <Step>
          <StepLabel className='steperLabel'>Borrower</StepLabel>
        </Step>
        <Step>
          <StepLabel className='steperLabel'>Guarantor Check</StepLabel>
        </Step>
        {
          showguarantor === "true" ?
            (
              <Step>
                <StepLabel className='steperLabel'>Guarantor Details</StepLabel>
              </Step>
            ) : null
        }
        <Step>
          <StepLabel className='steperLabel'>Investor Check</StepLabel>
        </Step>
        {
          showinvestor === "true" ?
            (
              <Step>
                <StepLabel className='steperLabel'>Investor Details</StepLabel>
              </Step>
            ) : null
        }
        {/* <Step>
          <StepLabel className='steperLabel'>Investor Details</StepLabel>
        </Step> */}
        {/* {
          showinvestor === "true" ?
            (
              <Step>
                <StepLabel className='steperLabel'>Document</StepLabel>
              </Step>
            ) : null
        } */}
        <Step>
          <StepLabel className='steperLabel'>Preview</StepLabel>
        </Step>
      </Stepper>

      {showStep(currentStep)}
    </>

  );
}

export default App;
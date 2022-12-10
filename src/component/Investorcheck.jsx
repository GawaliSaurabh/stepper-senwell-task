import React, { useState, useContext } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { multiStepContext } from "../Stepercontext";
import { Button } from "@mui/material";
import "./Investorcheck.css";

const Investorcheck = (props) => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

    const [click , setClick] = useState(false);
    console.log(click);

    const submitAllData = () => {
      submitData();
      setCurrentStep(5)
    }

  const toShow = (e) => {
    e.preventDefault();
    props.getInvShow(e.target.value);
    setClick(e.target.value);
  };

  return (
    <>
      <div className="check">
        <div className="garentC">
          <div className="guranterH">
            <h4>Investor</h4>
          </div>
        </div>

        <div className="guranterR">
          <h4>
            Investor Available <span style={{ color: "red" }}>*</span>
          </h4>

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={(e) => toShow(e)}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
      </div>
     


      <div className="bton">
                <Button className='button1' variant='contained' color="primary" onClick={() => setCurrentStep(2)} >Back</Button>
                {
                    click === "true" ? (<Button variant='contained' color="primary" onClick={() => setCurrentStep(5)} >Next
                    </Button>):<Button variant='contained' color="primary" onClick={()=>submitAllData()} >Preview</Button>
            }

            </div>



    </>
  );
};

export default Investorcheck;

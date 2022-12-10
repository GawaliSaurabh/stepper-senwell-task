import React, { useState, useContext } from "react";
import "./Gurantercheck.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { multiStepContext } from "../Stepercontext";
import { Button } from "@mui/material";

const Gurantercheck = (props) => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  const [click, setClick] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
  };

  const toShow = (e) => {
    e.preventDefault();
    props.getGuarShow(e.target.value);
    setClick(e.target.value)
  };

  return (
    <>
      <div className="check">
        <div className="garentC">
          <div className="guranterH">
            <h4>Guranter</h4>
          </div>
        </div>

        <div className="guranterR">
          <h4>
            Guranter Available <span style={{ color: "red" }}>*</span>
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
        <Button
          className="button1"
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            click === "true" ? setCurrentStep(3) : setCurrentStep(4);
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Gurantercheck;

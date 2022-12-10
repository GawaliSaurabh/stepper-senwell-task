import { Container } from "@mui/system";
import React from "react";
import "./Preview.css";
import { Button, TableRow } from "@mui/material";
import { multiStepContext } from "../Stepercontext";
import { useContext } from "react";

const Preview = () => {
  const { setCurrentStep, userData, finalData, setUserData } =
    useContext(multiStepContext);
  console.log(finalData);
  return (
    <>
      <Container>
        <div className="Bh3">
          <h2>Borrower:</h2>
        </div>
        <div className="Bh4">
          <h3>Borrower Personal Details</h3>
        </div>
        <div className="detail">
          {finalData.map((row) => {
            console.log(row);
            return (
              <>
                <div className="row">
                  <p className="border">Salutation</p>
                  <p className="border">:</p>
                  <p className="border">{row.BSatulation}</p>
                </div>

                <div className="row">
                  <p className="border">First Name</p>
                  <p className="border">:</p>
                  <p className="border">{row.Bfirstname}</p>
                </div>

                <div className="row">
                  <p className="border">Last Name</p>
                  <p className="border">:</p>
                  <p className="border">{row.Blastname}</p>
                </div>

                <div className="row">
                  <p className="border">title/Role</p>
                  <p className="border">:</p>
                  <p className="border">{row.Brole}</p>
                </div>

                <div className="row">
                  <p className="border">Google Address</p>
                  <p className="border">:</p>
                  <p className="border">{row.Bgaddress}</p>
                </div>

                <div className="row">
                  <p className="border">Address</p>
                  <p className="border">:</p>
                  <p className="border">{row.Baddress}</p>
                </div>

                <div className="row">
                  <p className="border">City</p>
                  <p className="border">:</p>
                  <p className="border">{row.BCity}</p>
                </div>

                <div className="row">
                  <p className="border">State</p>
                  <p className="border">:</p>
                  <p className="border">{row.Bstate}</p>
                </div>

                <div className="row">
                  <p className="border">Postcode</p>
                  <p className="border">:</p>
                  <p className="border">{row.BPostcode}</p>
                </div>

                <div className="row">
                  <p className="border">Email</p>
                  <p className="border">:</p>
                  <p className="border">{row.Bemail}</p>
                </div>

                <div className="row">
                  <p className="border">Number</p>
                  <p className="border">:</p>
                  <p className="border">{row.Bnumber}</p>
                </div>

                <div className="row">
                  <p>DOB</p>
                  <p>:</p>
                  <p>{row.Bdate}</p>
                </div>
              </>
            );
          })}
        </div>

        <br />

        <div className="Bh3">
          <h2>Guarantor:</h2>
        </div>
        <div className="Bh4">
          <h3>Guarantor Personal Details</h3>
        </div>
        <div className="detail">
          {finalData.map((row) => {
            console.log(row);
            return (
              <>
                <div className="row">
                  <p className="border">Relationship</p>
                  <p className="border">:</p>
                  <p className="border">{row.Greletion}</p>
                </div>

                <div className="row">
                  <p className="border">Salutation</p>
                  <p className="border">:</p>
                  <p className="border">{row.Gsalutation}</p>
                </div>

                <div className="row">
                  <p className="border">First Name</p>
                  <p className="border">:</p>
                  <p className="border">{row.Gfirstname}</p>
                </div>

                <div className="row">
                  <p className="border">Last Name</p>
                  <p className="border">:</p>
                  <p className="border">{row.Glastname}</p>
                </div>

                <div className="row">
                  <p className="border">Role</p>
                  <p className="border">:</p>
                  <p className="border">{row.Grole}</p>
                </div>

                <div className="row">
                  <p className="border">Goggle Address</p>
                  <p className="border">:</p>
                  <p className="border">{row.Ggaddress}</p>
                </div>

                <div className="row">
                  <p className="border">Address</p>
                  <p className="border">:</p>
                  <p className="border">{row.Gaddress}</p>
                </div>

                <div className="row">
                  <p className="border">State </p>
                  <p className="border">:</p>
                  <p className="border">{row.Gstate}</p>
                </div>

                <div className="row">
                  <p className="border">Postcode</p>
                  <p className="border">:</p>
                  <p className="border">{row.Gpostcode}</p>
                </div>

                <div className="row">
                  <p className="border">Email</p>
                  <p className="border">:</p>
                  <p className="border">{row.Gemail}</p>
                </div>

                <div className="row">
                  <p className="border">Number</p>
                  <p className="border">:</p>
                  <p className="border">{row.Gnumber}</p>
                </div>

                <div className="row">
                  <p>DOB</p>
                  <p>:</p>
                  <p>{row.Gbirth}</p>
                </div>
              </>
            );
          })}
        </div>

        <br />

        <div className="Bh3">
          <h2>Investor:</h2>
        </div>
        <div className="Bh4">
          <h3>Investor Personal Details</h3>
        </div>
        <div className="detail">
          {finalData.map((row) => {
            console.log(row);
            return (
              <>
                <div className="row">
                  <p className="border">Salutation</p>
                  <p className="border">:</p>
                  <p className="border">{row.Isalutation}</p>
                </div>

                <div className="row">
                  <p className="border">First Name</p>
                  <p className="border">:</p>
                  <p className="border">{row.Ifirstname}</p>
                </div>

                <div className="row">
                  <p className="border">Last Name</p>
                  <p className="border">:</p>
                  <p className="border">{row.Ilastname}</p>
                </div>

                <div className="row">
                  <p className="border">Role</p>
                  <p className="border">:</p>
                  <p className="border">{row.Irole}</p>
                </div>

                {/* <div className="row">
                  <p className="border">Role</p>
                  <p className="border">:</p>
                  <p className="border">{row.Grole}</p>
                </div> */}

                <div className="row">
                  <p className="border">Goggle Address</p>
                  <p className="border">:</p>
                  <p className="border">{row.Igaddress}</p>
                </div>

                <div className="row">
                  <p className="border">Address</p>
                  <p className="border">:</p>
                  <p className="border">{row.Iaddress}</p>
                </div>

                <div className="row">
                  <p className="border">City </p>
                  <p className="border">:</p>
                  <p className="border">{row.Icity}</p>
                </div>

                <div className="row">
                  <p className="border">State</p>
                  <p className="border">:</p>
                  <p className="border">{row.Istate}</p>
                </div>

                <div className="row">
                  <p className="border">Postcode</p>
                  <p className="border">:</p>
                  <p className="border">{row.Ipostcode}</p>
                </div>

                <div className="row">
                  <p className="border">Email</p>
                  <p className="border">:</p>
                  <p className="border">{row.Iemail}</p>
                </div>

                <div className="row">
                  <p className="border">Number</p>
                  <p className="border">:</p>
                  <p className="border">{row.Inumber}</p>
                </div>

                <div className="row">
                  <p>DOB</p>
                  <p>:</p>
                  <p>{row.Ibirth}</p>
                </div>
              </>
            );
          })}
        </div>
        <br />

        <div className="Bh3">
          <h2>Document:</h2>
        </div>

        <div className="Bh4">
          <h3>Identity</h3>
        </div>
        <div className="detail">
          {finalData.map((row) => {
            console.log(row);
            return (
              <>
                <div className="row">
                  <p className="border">Passport</p>
                  <p className="border">:</p>
                  <p className="border">{row.IPassport}</p>
                </div>

                <div className="row">
                  <p className="border">Driving Licence</p>
                  <p className="border">:</p>
                  <p className="border">{row.ILicence}</p>
                </div>

                <div className="row">
                  <p >Driving Licence</p>
                  <p>:</p>
                  <p>{row.ILicence}</p>
                </div>
              </>
            );
          })}
        </div>
        <br />

        <div className="Bh4">
          <h3>Financial</h3>
        </div>
        <div className="detail">
          {finalData.map((row) => {
            console.log(row);
            return (
              <>
                <div className="row">
                  <p className="border">Salary Slips</p>
                  <p className="border">:</p>
                  <p className="border">{row.ISalary}</p>
                </div>

                <div className="row">
                  <p className="border">Payg</p>
                  <p className="border">:</p>
                  <p className="border">{row.IPayg}</p>
                </div>

                <div className="row">
                  <p>Misc</p>
                  <p>:</p>
                  <p>{row.IMisc}</p>
                </div>
              </>
            );
          })}
        </div>
        <br/>


        <div className="Bh4">
          <h3>Miscellaneous</h3>
        </div>
        <div className="detail">
          {finalData.map((row) => {
            console.log(row);
            return (
              <>
                <div className="row">
                  <p className="border">Other Document</p>
                  <p className="border">:</p>
                  <p className="border">{row.Miscell1}</p>
                </div>

                <div className="row">
                  <p>Other Document</p>
                  <p>:</p>
                  <p >{row.Miscell2}</p>
                </div>

              </>
            );
          })}
        </div>


      </Container>

      <div className="bton">
        <Button
          className="button1"
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(4)}
        >
          Back
        </Button>
        {}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </>
  );
};

export default Preview;

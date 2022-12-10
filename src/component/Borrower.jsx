import React, { useContext } from "react";
import "./Borrower.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { multiStepContext } from "../Stepercontext";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";

const Borrower = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    setCurrentStep(2);
  };
  console.log(userData);

  return (
    <>
      <Container className="containerB">
        <form onSubmit={handleSubmit(submitHandler)}>
          <Paper
            className="media"
            sx={{ p: 1, mt: 10, backgroundColor: "#f5f6f2" }}
          >
            {/* form section start */}
            {/* <div className="formMain"> */}
            <h2 className="gHead">Personal Deatails</h2>

            <Box sx={{ bgcolor: "", width: "100%", flexGrow: 1 }}>
              <Box
                className="detailBox"
                component="form"
                sx={{ "& > :not(style)": { m: 2, width: "28ch" } }}
                noValidate
                autoComplete="off"
              >
                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg main"
                >
                  <label className="heading">
                    Salutation <span className="redClr">*</span>
                  </label>
                  <Select
                    {...register("Bsatulation", { required: true })}
                    value={userData["Bsatulation"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Bsatulation: e.target.value })
                    }
                  >
                    <MenuItem value="mr">Mr</MenuItem>
                    <MenuItem value="mrs">Mrs</MenuItem>
                    <MenuItem value="ms">Ms</MenuItem>
                    <MenuItem value="miss">Miss</MenuItem>
                    <MenuItem value="TBD">TBD</MenuItem>
                  </Select>
                  {(errors.Bsatulation && !userData.Bsatulation) && 
                    <h4 className="err">Salutation Is Required.</h4>
                  }
                </FormControl>

                <FormControl>
                  <label className="heading">
                    First Name <span className="redClr">*</span>
                  </label>
                  <TextField
                    {...register("Bfirstname", { required: true })}
                    id="filled-basic"
                    placeholder="First Name"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Bfirstname"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Bfirstname: e.target.value })
                    }
                  ></TextField>
                  {(errors.Bfirstname && !userData.Bfirstname)&&(
                    <h4 className="err">First Name Is Required.</h4>
                  )}
                </FormControl>

                <FormControl>
                  <label className="heading">
                    Last Name <span className="redClr">*</span>
                  </label>
                  <TextField
                    {...register("Blastname", { required: true })}
                    id="filled-basic"
                    placeholder="Last Name"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Blastname"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Blastname: e.target.value })
                    }
                  ></TextField>
                  {(errors.Blastname && !userData.Blastname)&&(<h4 className="err">Last Name Is Required.</h4> )}
                </FormControl>

                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg"
                >
                  {/* <InputLabel >Select Role</InputLabel> */}
                  <label className="heading">
                    Title/Role <span className="redClr">*</span>
                  </label>
                  <Select
                    {...register("Brole", { required: true })}
                    value={userData["Brole"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Brole: e.target.value })
                    }
                  >
                    <MenuItem value="">Title/Role</MenuItem>
                    <MenuItem value="self">Self</MenuItem>
                    <MenuItem value="Other Individul">Other Individul</MenuItem>
                    <MenuItem value="Director">Director</MenuItem>
                  </Select>
                  {(errors.Brole && !userData.Brole) && <h4 className="err">* Role Is Required.</h4>}
                </FormControl>
              </Box>

              <Box
                className="detailBox"
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                noValidate
                autoComplete="off"
              >
                <label className="heading">
                  Google Address<span className="redClr"></span>
                </label>
                <TextField
                  type="text"
                  id="filled-basic"
                  placeholder="Google Address"
                  variant="outlined"
                  className="inputBg"
                  value={userData["Bgaddress"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Bgaddress: e.target.value })
                  }
                />
              </Box>

              <Box
                className="detailBox"
                component="form"
                sx={{ "& > :not(style)": { m: 2, width: "28ch" } }}
                noValidate
                autoComplete="off"
              >
                <FormControl>
                  <label className="heading">
                    Address <span className="redClr"></span>
                  </label>
                  <TextField
                    type="text"
                    id="filled-basic"
                    placeholder="Address"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Baddress"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Baddress: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <label className="heading">
                    City <span className="redClr"></span>
                  </label>
                  <TextField
                    type="text"
                    id="filled-basic"
                    placeholder="City"
                    variant="outlined"
                    className="inputBg"
                    value={userData["BCity"]}
                    onChange={(e) =>
                      setUserData({ ...userData, BCity: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg"
                >
                  {/* <InputLabel id="demo-simple-select-filled-label">
                    Select State
                  </InputLabel> */}
                  <label className="heading">
                    Select State <span className="redClr"></span>
                  </label>
                  <Select
                    value={userData["Bstate"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Bstate: e.target.value })
                    }
                  >
                    <MenuItem value="">State/Province/Territory</MenuItem>
                    <MenuItem value="New South Wales">New South Wales</MenuItem>
                    <MenuItem value="Victoria">Victoria</MenuItem>
                    <MenuItem value="Queensland">Queensland</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <label>Postcode</label>
                  <TextField
                    type="number"
                    id="filled-number"
                    placeholder="Postcode"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["BPostcode"]}
                    onChange={(e) =>
                      setUserData({ ...userData, BPostcode: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <label>Email</label>
                  <TextField
                    id="filled-basic"
                    type="email"
                    placeholder="saurabh@somthing.com"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Bemail"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Bemail: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <label>Number</label>
                  <TextField
                    type="number"
                    id="filled-number"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Bnumber"]}
                    placeholder="Number"
                    onChange={(e) =>
                      setUserData({ ...userData, Bnumber: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <label>DOB</label>
                  <TextField
                    id="filled-date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Bdate"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Bdate: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </Box>
          </Paper>
          <div className="bton">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // onClick={() => setCurrentStep(2)}
            >
              Next
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Borrower;

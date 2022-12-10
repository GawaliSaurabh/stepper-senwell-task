import React, { useState, useContext } from "react";
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

const Borrower = (props) => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    setCurrentStep(4);
  };
  console.log(userData);

  return (
    <>
      <Container >
        <form onSubmit={handleSubmit(submitHandler)}>
          <Paper sx={{ p: 1, mt: 10, backgroundColor: "#f5f6f2" }}>
            <h2 className="gHead">Garenter Deatails</h2>
            <Box sx={{ bgcolor: "", width: "100%" }}>
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
                  <label>Choose Relationship<span className="redclr">*</span></label>
                  <Select
                    {...register("Greletion", { required: true })}
                    value={userData["Greletion"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Greletion: e.target.value })
                    }
                  >
                    <MenuItem value="mr">Family</MenuItem>
                    <MenuItem value="mrs">Friend</MenuItem>
                    <MenuItem value="ms">Related Entity</MenuItem>
                  </Select>
                  {(errors.Greletion && !userData.Greletion) && (
                    <h4 className="err">Relationship Is Required.</h4>
                  )}
                </FormControl>
                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg main"
                >
                  <label>Select Satulation<span className="redclr">*</span></label>
                  <Select
                    {...register("Gsalutation", { required: true })}
                    value={userData["Gsalutation"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gsalutation: e.target.value })
                    }
                  >
                    <MenuItem value="mr">Mr</MenuItem>
                    <MenuItem value="mrs">Mrs</MenuItem>
                    <MenuItem value="ms">Ms</MenuItem>
                    <MenuItem value="miss">Miss</MenuItem>
                    <MenuItem value="TBD">TBD</MenuItem>
                  </Select>
                  {(errors.Gsalutation && !userData.Gsalutation) && (
                    <h4 className="err">Satulation Is Required.</h4>
                  )}
                </FormControl>
                <FormControl>
                <label>First Name<span className="redclr">*</span></label>
                  <TextField
                    {...register("Gfirstname", { required: true })}
                    id="filled-basic"
                    // placeholder="First Name"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Gfirstname"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gfirstname: e.target.value })
                    }
                  ></TextField>
                  {(errors.Gfirstname && !userData.Gfirstname) && (
                    <h4 className="err">First Name Is Required.</h4>
                  )}
                </FormControl>

                <FormControl>
                <label>Last Name<span className="redclr">*</span></label>
                  <TextField
                    {...register("Glastname", { required: true })}
                    id="filled-basic"
                    // placeholder="Last Name"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Glastname"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Glastname: e.target.value })
                    }
                  ></TextField>
                  {(errors.Glastname && !userData.Glastname) &&(
                    <h4 className="err">Last Name Is Required.</h4>
                  )}
                </FormControl>

                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg"
                >
                  <label>Select Role<span className="redclr">*</span></label>
                  <Select
                    {...register("Grole", { required: true })}
                    value={userData["Grole"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Grole: e.target.value })
                    }
                  >
                    <MenuItem value="">Select Role</MenuItem>
                    <MenuItem value="self">Self</MenuItem>
                    <MenuItem value="Other Individul">Other Individul</MenuItem>
                    <MenuItem value="Director">Director</MenuItem>
                  </Select>
                  {(errors.Grole && !userData.Grole) &&<h4 className="err">Role Is Required.</h4>}
                </FormControl>
              </Box>

              <Box
                className="detailBox"
                component="form"
                sx={{ "& > :not(style)": { width: "100%" } }}
              >
              <label>Google Address</label>
                <TextField
                  id="filled-basic"
                  // placeholder="Google Address"
                  variant="outlined"
                  value={userData["Ggaddress"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Ggaddress: e.target.value })
                  }
                />
              </Box>

              {/* <Box
                className="detailBox"
                sx={{ display: "flex", flexWrap: "wrap" }}
              >
                <FormControl
                  fullWidth
                  sx={{ m: 1 }}
                  variant="outlined"
                  className="inputBg"
                >
                  <InputLabel type="text" htmlFor="filled-adornment-amount">
                    Google Address
                  </InputLabel>
                  <FilledInput
                    placeholder="Google Address"
                    value={userData["Igaddress"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Igaddress: e.target.value })
                    }
                    startAdornment={
                      <InputAdornment position=""></InputAdornment>
                    }
                  />
                </FormControl>
              </Box> */}
              <Box
                className="detailBox"
                component="form"
                sx={{ "& > :not(style)": { m: 2, width: "28ch" } }}
                noValidate
                autoComplete="off"
              >
                <FormControl>
                <label>Address<span className="redclr">*</span></label>
                  <TextField
                    {...register("Gaddress", { required: true })}
                    type="text"
                    id="filled-basic"
                    // placeholder="Address"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Gaddress"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gaddress: e.target.value })
                    }
                  />
                  {(errors.Gaddress && !userData.Gaddress) && (
                    <h4 className="err">Address Is Required.</h4>
                  )}
                </FormControl>

                <FormControl>
                <label>City<span className="redclr">*</span></label>
                  <TextField
                    {...register("Gcity", { required: true })}
                    type="text"
                    id="filled-basic"
                    // placeholder="City"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Gcity"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gcity: e.target.value })
                    }
                  />
                  {(errors.Gcity && !userData.Gcity) && <h4 className="err">City Is Required.</h4>}
                </FormControl>
                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg"
                >
                  <label>
                    Select State
                    <span className="redclr">*</span>
                  </label>
                  <Select
                    {...register("Gstate", { required: true })}
                    value={userData["Gstate"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gstate: e.target.value })
                    }
                  >
                    <MenuItem value="">State/Province/Territory</MenuItem>
                    <MenuItem value="New South Wales">New South Wales</MenuItem>
                    <MenuItem value="Victoria">Victoria</MenuItem>
                    <MenuItem value="Queensland">Queensland</MenuItem>
                  </Select>
                  {(errors.Gstate && !userData.Gstate) && <h4 className="err">State Is Required.</h4>}
                </FormControl>

                <FormControl>
                <label>Postcode<span className="redclr">*</span></label>
                  <TextField
                    {...register("Gpostcode", { required: true })}
                    type="number"
                    id="filled-number"
                    // placeholder="Postcode"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Gpostcode"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gpostcode: e.target.value })
                    }
                  />
                  {(errors.Gpostcode && !userData.Gpostcode) && (
                    <h4 className="err">Postcode Is Required.</h4>
                  )}
                </FormControl>

                    <FormControl>
                    <label>Email</label>
                <TextField
                  id="filled-basic"
                  // placeholder="saurabh@somthing.com"
                  variant="outlined"
                  className="inputBg"
                  value={userData["Gemail"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Gemail: e.target.value })
                  }
                />
                </FormControl>

                <FormControl>
                <label>Number</label>
                <TextField
                  type="number"
                  name="number"
                  id="filled-number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  className="inputBg"
                  value={userData["Gnumber"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Gnumber: e.target.value })
                  }
                />
                </FormControl>

                <FormControl>
                <label>DOB<span>*</span></label>
                  <TextField
                    {...register("Gbirth", { required: true })}
                    id="filled-date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Gbirth"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Gbirth: e.target.value })
                    }
                  />
                  {(errors.Gbirth && !userData.Gbirth) && (
                    <h4 className="err">BirtDate Is Required.</h4>
                  )}
                </FormControl>
              </Box>
            </Box>
            {/* <input type="submit" value="submit" /> */}

            {/* </form> */}
          </Paper>
          <div className="bton">
            <Button
              className="button1"
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(2)}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // onClick={() => setCurrentStep(4)}
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

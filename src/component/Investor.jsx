import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { multiStepContext } from "../Stepercontext";
import "./Investor.css";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";

const Investor = (props) => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();
  const [file6, setFile6] = useState();




  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    submitData();
    setCurrentStep(6);
  };
  console.log(userData);
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Paper sx={{ p: 1, mt: 10, backgroundColor: "#f5f6f2" }}>
            <h2 className="gHead">Investor Deatails</h2>
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
                  <label>
                    Salutation<span></span>
                  </label>
                  <Select
                    // label="Salutation"
                    {...register("Isalutation", { required: true })}
                    value={userData["Isalutation"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Isalutation: e.target.value })
                    }
                  >
                    <MenuItem value="mr">Mr</MenuItem>
                    <MenuItem value="mrs">Mrs</MenuItem>
                    <MenuItem value="ms">Ms</MenuItem>
                    <MenuItem value="miss">Miss</MenuItem>
                    <MenuItem value="TBD">TBD</MenuItem>
                  </Select>
                  {(errors.Isalutation && !userData.Isalutation) &&  (
                    <h4 className="err">Salutation Is Required.</h4>
                  )}
                </FormControl>

                <FormControl>
                  <label>
                    Firstname<span className="redclr">*</span>
                  </label>
                  <TextField
                    {...register("Ifirstname", { required: true })}
                    id="filled-basic"
                    // placeholder="First Name"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Ifirstname"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Ifirstname: e.target.value })
                    }
                  ></TextField>
                  {(errors.Ifirstname && !userData.Ifirstname) &&(
                    <h4 className="err">Firstname Is Required.</h4>
                  )}
                </FormControl>

                <FormControl>
                  <label>
                    Lastname<span className="redclr">*</span>
                  </label>
                  <TextField
                    {...register("Ilastname", { required: true })}
                    id="filled-basic"
                    // placeholder="Last Name"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Ilastname"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Ilastname: e.target.value })
                    }
                  ></TextField>
                  {(errors.Ilastname && !userData.Ilastname) &&(
                    <h4 className="err">Lastname Is Required.</h4>
                  )}
                </FormControl>

                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg"
                >
                  <label>
                    Select Role<span className="redclr">*</span>
                  </label>
                  <Select
                    {...register("Irole", { required: true })}
                    value={userData["Irole"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Irole: e.target.value })
                    }
                  >
                    <MenuItem value="">Title/Role</MenuItem>
                    <MenuItem value="self">Self</MenuItem>
                    <MenuItem value="Other Individul">Other Individul</MenuItem>
                    <MenuItem value="Director">Director</MenuItem>
                  </Select>
                  {(errors.Irole && !userData.Irole) &&<h4 className="err">Role Is Required.</h4>}
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
                  value={userData["Igaddress"]}
                  onChange={(e) =>
                    setUserData({ ...userData, Igaddress: e.target.value })
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
                  <label>
                    Address<span className="redclr">*</span>
                  </label>
                  <TextField
                    {...register("Iaddress", { required: true })}
                    type="text"
                    id="filled-basic"
                    // placeholder="Address"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Iaddress"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Iaddress: e.target.value })
                    }
                  />
                  {(errors.Iaddress && !userData.Iaddress) && (
                    <h4 className="err">Address Is Required.</h4>
                  )}
                </FormControl>

                <FormControl>
                  <label>
                    City<span className="redclr">*</span>
                  </label>
                  <TextField
                    {...register("Icity", { required: true })}
                    type="text"
                    id="filled-basic"
                    placeholder="City"
                    variant="outlined"
                    className="inputBg"
                    value={userData["Icity"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Icity: e.target.value })
                    }
                  />
                  {(errors.Icity && !userData.Icity) &&  <h4 className="err">City Is Required.</h4>}
                </FormControl>

                <FormControl
                  variant="outlined"
                  sx={{ m: 1, minWidth: 120 }}
                  className="inputBg"
                >
                  <label id="demo-simple-select-filled-label">
                    Select State<span className="redclr">*</span>
                  </label>
                  <Select
                    {...register("Istate", { required: true })}
                    value={userData["Istate"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Istate: e.target.value })
                    }
                  >
                    <MenuItem value="">State/Province/Territory</MenuItem>
                    <MenuItem value="New South Wales">New South Wales</MenuItem>
                    <MenuItem value="Victoria">Victoria</MenuItem>
                    <MenuItem value="Queensland">Queensland</MenuItem>
                  </Select>
                  {(errors.Istate && !userData.Istate) &&  <h4 className="err">State Is Required.</h4>}
                </FormControl>

                <FormControl>
                  <label>
                    Postcode<span className="redclr">*</span>
                  </label>
                  <TextField
                    {...register("Ipostcode", { required: true })}
                    type="number"
                    id="filled-number"
                    placeholder="Postcode"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Ipostcode"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Ipostcode: e.target.value })
                    }
                  />
                  {(errors.Ipostcode && !userData.Ipostcode) &&   (
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
                    value={userData["Iemail"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Iemail: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <label>Number</label>
                  <TextField
                    type="number"
                    name="number"
                    // label="Number"
                    id="filled-number"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Inumber"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Inumber: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <label>
                    DOB<span className="redclr">*</span>
                  </label>
                  <TextField
                    {...register("Ibirth", { required: true })}
                    id="filled-date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    className="inputBg"
                    value={userData["Ibirth"]}
                    onChange={(e) =>
                      setUserData({ ...userData, Ibirth: e.target.value })
                    }
                  />
                  {(errors.Ibirth && !userData.Ibirth) && (
                    <h4 className="err">BirthDate Is Required.</h4>
                  )}
                </FormControl>
              </Box>
            </Box>
          </Paper>

          <Paper>
            <div className="doc-m">
              <div className="other-details">
                <p>Other details</p>
              </div>
              <div className="doc">
                <p id="doc">Document</p>
              </div>
            </div>
          </Paper>

          <div>
            <p className="idn">Identity</p>
          </div>

          <Paper sx={{ p: 3, mt: 5, backgroundColor: "#f5f6f2" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <label>
                  <h3>Passport</h3>
                </label>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      IPassport: e.target.files[0].name,
                    });
                    setFile(e.target.files[0].name);
                  }}
                />
                {<h4>{file}</h4>}
              </Grid>

              <Grid item xs={8}>
                <label>
                  <h3>Driving Licence</h3>
                </label>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      ILicence: e.target.files[0].name,
                    });
                    setFile1(e.target.files[0].name);
                  }}
                />
                {<h4>{file1}</h4>}
              </Grid>
            </Grid>
          </Paper>

          <div className="finance">
            <p className="titl">Financial</p>
          </div>

          <Paper sx={{ p: 3, mt: 5, backgroundColor: "#f5f6f2" }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <label>
                  <h3>Salary Slips</h3>
                </label>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      ISalary: e.target.files[0].name,
                    });
                    setFile2(e.target.files[0].name);
                  }}
                />
                {<h4>{file2}</h4>}
              </Grid>

              <Grid item xs={4}>
                <label>
                  <h3>Payg</h3>
                </label>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({ ...userData, IPayg: e.target.files[0].name });
                    setFile3(e.target.files[0].name);
                  }}
                />
                {<h4>{file3}</h4>}
              </Grid>

              <Grid item xs={4}>
                <label>
                  <h3>Misc</h3>
                </label>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({ ...userData, IMisc: e.target.files[0].name });
                    setFile4(e.target.files[0].name);
                  }}
                />
                {<h4>{file4}</h4>}
              </Grid>
            </Grid>
          </Paper>

          <div className="finance">
            <p className="titl">Miscellaneous</p>
          </div>

          <Paper sx={{ p: 3, mt: 5, backgroundColor: "#f5f6f2" }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={3}>
                <TextField
                  placeholder="Enter Doc Name"
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                />
              </Grid> */}
              {/* 
              <Grid item xs={9}>
                <TextField
                className="imp"
                  placeholder="Enter Doc Name"
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                />
              </Grid> */}

              <Grid item xs={4}>
                <h3>Other Document</h3>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      Miscell1: e.target.files[0].name,
                    });
                    setFile5(e.target.files[0].name);
                  }}
                />
                {<h4>{file5}</h4>}
              </Grid>

              <Grid item xs={4}>
                <h3>Other Document</h3>
                <TextField
                  id="outlined-basic"
                  type="file"
                  variant="outlined"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      Miscell2: e.target.files[0].name,
                    });
                    setFile6(e.target.files[0].name);
                  }}
                />
                {<h4>{file6}</h4>}
              </Grid>
            </Grid>
          </Paper>

          <div className="bton">
            <Button
              className="button1"
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep(4)}
            >
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Preview
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Investor;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function getSteps() {
  return ["REMIT LOCATION", "BANK INFORMATION", "TAX INFORMATION"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState("female");
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleSelectChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleChange = (event) => {
    // setValue(event.target.value);
  };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className="frame">
        <AppBar position="static">
          <Toolbar variant="dense"></Toolbar>
        </AppBar>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <h2>Remittance Capability</h2>
          <p>Select the Remittance Capability</p>
        </div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="CTX"
            name="CTX"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="CTX"
              control={<Radio />}
              label="CTX(DXC)"
            />
            <span className="ml">
              Together - Funds and remittance details set to bank
            </span>
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="CCD(DCC)"
            />
            <span className="ml">
              Separate - Funds sent to Bank .Basic remittance information set to
              Vendor via EDI (e.g gross Amount etc)
            </span>
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="CCD+(DZC)"
            />
            <span className="ml">
              Separate - Funds sent to Bank .Detailed remittance information set
              to Vendor via EDI (e.g Invoice numbers,gross Amount,discount
              Amount etc)
            </span>
          </RadioGroup>
        </FormControl>
        <div>
          <h2>Bank Account Information</h2>
          <p>
            Select the bank type and enter the required information for the
            banking institution
          </p>
          <div className="bankType">
            <p>Bank Type :</p>
          </div>
          <FormControl component="fieldset" className="bankDetails">
            <RadioGroup
              aria-label="CTX"
              name="bankname"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="CTX"
                control={<Radio />}
                label="United States Bank"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Factor Financial Bank"
              />

              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Foreign Bank/Intermediary Bank"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="unitedStateBank">
          <p className="currencyType">Currency Type USD</p>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Banking Institution Name"
              variant="outlined"
            />
            <p>Enter The Name of the Banking Institution</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Routing Number"
              variant="outlined"
            />
            <p>Enter The Name 9-digit routing Number</p>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label=" Account Number"
                variant="outlined"
              />
              <p>Enter the Account Number</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Confirm Account Number"
                variant="outlined"
              />
              <p>Re Enter the Account Number</p>
            </Grid>
          </Grid>
        </div>
        <div className="factorFinancialBank">
          <Grid item xs={12} sm={10}>
            <TextField
              id="outlined-basic"
              label="Banking Institute Information"
              variant="outlined"
            />
            <p>Enter the Name of the banking Institute</p>
          </Grid>
          <Grid item xs={12} sm={10}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Country
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Country"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            {/* <InputLabel htmlFor="age-native-simple">Country</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              label="Age"
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select> */}
            <p>Select the country of the Banking Institution</p>
          </Grid>

          <Grid item xs={12} sm={10}>
            <TextField
              id="outlined-basic"
              label="Street Address 1"
              variant="outlined"
            />
          </Grid>
          <p></p>
          <Grid item xs={12} sm={10}>
            <TextField
              id="outlined-basic"
              label="Street Address 2"
              variant="outlined"
            />
          </Grid>
          <p></p>
        </div>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              className="address"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                State
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Country"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
              className="address"
            />
            <p></p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Work</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Country"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <p></p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              className="address"
            />
            <p></p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-basic"
              label="Extention - Optional"
              variant="outlined"
              className="address"
            />
            <p></p>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            className="address"
          />
          <p>Enter the Email Address for bank contact</p>
        </Grid>
        <div className="footerBtn">
          <Button variant="contained" color="primary">
            Save
          </Button>
        </div>
        <div>
          {/* {activeStep === steps.length ? (
            <div>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          )} */}
        </div>
      </Container>
    </div>
  );
}

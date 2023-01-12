import {
  createTheme,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

import "../App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8FAFC",
    },
    secondary: {
      main: "#0F172A",
    },
  },
  typography: {
    allVariants: {
      color: "#4657A1",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
});

const theme2 = createTheme({
  palette: {
    primary: {
      main: "#F8FAFC",
    },
    secondary: {
      main: "#0F172A",
    },
  },

  typography: {
    allVariants: {
      color: "#4657A1",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
});

function Form() {
  return (
    <Stack>
      <ThemeProvider theme={theme}>
        <Stack
          paddingTop={2}
          bgcolor="primary.main"
          paddingLeft={5}
          paddingRight={5}
        >
          <Typography>Income & Loan Details</Typography>
          <Grid container my={2} rowSpacing={2} columnSpacing={30}>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Annual Income</Stack>
              <TextField
                color="secondary"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Down Payment</Stack>
              <TextField
                fullWidth
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Loan Term (Years)</Stack>
              <TextField color="secondary" fullWidth />
            </Grid>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Annual Interest Rate On Mortgage</Stack>
              <TextField
                fullWidth
                color="secondary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PercentOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </ThemeProvider>

      {/* 2nd component */}

      <Stack paddingTop={2} color="primary" paddingLeft={5} paddingRight={5}>
        <FormControl>
          <Typography>
            Do you know your total monthly recurring debt payments?
          </Typography>

          <RadioGroup row>
            <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
            <FormControlLabel control={<Radio />} label="No" value="No" />
          </RadioGroup>
        </FormControl>

        <Grid container my={2} rowSpacing={2} columnSpacing={30}>
          <Grid item xs={10} md={6}>
            <Stack p={2}>Car loan or lease payment(s)</Stack>
            <TextField
              color="secondary"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <Stack p={2}>Student loan payment(s)</Stack>
            <TextField
              fullWidth
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <Stack p={2}>Minimum credit card payment(s)</Stack>
            <TextField
              fullWidth
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <Stack p={2}>Other Payments</Stack>
            <TextField
              fullWidth
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Stack>
      {/* 2nd component end */}

      {/* 3rd component */}
      <ThemeProvider theme={theme2}>
        <Stack
          paddingTop={2}
          bgcolor="primary.main"
          paddingLeft={5}
          paddingRight={5}
        >
          <Typography>Monthly Payments</Typography>
          <Grid container my={2} rowSpacing={2} columnSpacing={30}>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Car loan or lease payment(s)</Stack>
              <TextField
                color="secondary"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Student loan payment(s)</Stack>
              <TextField
                fullWidth
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <Stack p={2}>Minimum credit card payment(s)</Stack>
              <TextField
                fullWidth
                color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </ThemeProvider>
    </Stack>
  );
}

export default Form;

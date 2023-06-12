import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });
  const handleChange = (type, value) => {
    switch (type) {
      case "email":
        {
          if (value) {
            setFormData({
              ...formData,
              email: { ...formData.email, value: value },
            });
          } else {
            setFormData({
              ...formData,
              email: {
                ...formData.email,
                error: "Email Feild can not be Empty",
              },
            });
          }
        }
        break;
      case "password": {
        if (value) {
          setFormData({
            ...formData,
            password: { ...formData.password, value: value },
          });
        } else {
          setFormData({
            ...formData,
            password: {
              ...formData.password,
              error: "Password Field can not be Empty",
            },
          });
        }
      }
    }
  };
  const checkValidation = () => {
    let formDataTemp = {...formData}
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (emailValid.test(formDataTemp.email.value)) {
      formDataTemp = { ...formDataTemp, email: { ...formDataTemp.email, error: "" } }
      
    } else {
      formDataTemp = {...formDataTemp,email: { ...formDataTemp.email, error: "Please Enter a Valid Email" } };
      
    }
    if (passwordValid.test(formDataTemp.password.value)) {
      formDataTemp = {...formDataTemp, password: { ...formDataTemp.password, error: "" }}
     
    } else {
      formDataTemp = {...formDataTemp, password: {...formDataTemp.password,error: "Please Enter Valid Password"}};
    }
    setFormData(formDataTemp);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m:1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Typography component="p" color="error">
                {formData.email.error} 
              </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <Typography component="p" color="error">
                {formData.password.error} 
              </Typography>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={checkValidation}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/signup  ">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signin;

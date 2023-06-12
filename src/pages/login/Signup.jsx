import React from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(`Email: ${values.email} & Password: ${values.password} & Name: ${values.name}`);
    },
  validate: (values) => {
     const nameValid = /^[a-zA-Z]+ [a-zA-Z]+$/;
     const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
     let errors = {}
     if(!values.name){
        errors.name = "Name Required"
     }else if(!nameValid.test(values.name)){
         errors.name = "Invalid Full Name"
     }if(!values.email){
      errors.email = "Email Required"
     }else if(!emailValid.test(values.email)){
      errors.email = "Invalid Email"
     }if(!values.password){
      errors.password = "Password Required"
     }else if(!passwordValid.test(values.password)){
      errors.password = "Invalid Password Format"
     }if(!values.confirmPassword){
      errors.confirmPassword = "Confirm Password"
     }else if(values.password !== values.confirmPassword ){
      errors.confirmPassword = "Password did not match"
     }
     return errors
  }
  });
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          width: "80vw",
          height: "80vh",
          margin: "50px auto",
        }}
      >
        <Grid
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: "10px 0px 0px 10px",
            backgroundColor: "#e6e6e6",
          }}
        >
          <Box>
            <Box sx={{ m: 5, textAlign: "center", fontSize: "30px" }}>
              <Typography variant="h4">Sign Up</Typography>
            </Box>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{ margin: "10px 100px 10px 100px" }}
            >
              <TextField
                size="small"
                fullWidth
                required
                label="Fullname"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <Typography component="p" color="error">
                      {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                    </Typography>
              <TextField
                size="small"
                sx={{ mt: 3 }}
                fullWidth
                required
                label="Email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Typography component="p" color="error">
                      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
                    </Typography>
              <TextField
                type="password"
                size="small"
                sx={{ mt: 3 }}
                fullWidth
                required
                label="Create Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Typography component="p" color="error">
                      {formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    </Typography>
              <TextField
                type="password"
                size="small"
                sx={{ mt: 3 }}
                fullWidth
                required
                label="Confirm Password"
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              <Typography component="p" color="error">
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                    </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                fullWidth
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        <Grid>
            <Box sx={{textAlign:"center", mt: 2}}>
                <NavLink to="/signin">
                  {"Already have an Acoount? Sign-In"}
                </NavLink>
            </Box>
        </Grid>
        </Grid>
        <Grid
          sx={{
            width: "50%",
            height: "100%",
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0px 10px 10px 0px",
          }}
        ></Grid>
      </Grid>
    </>
  

  );
};

export default Signup;

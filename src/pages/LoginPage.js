import React, { useState } from "react";
import { Grid, Typography, Container, Paper, Box, Button } from "@mui/material";
import Login from "../components/Login";
import Register from "../components/Register";
import TokenVerifyButton from "../components/TokenVerifyButton";


const LoginPage = () => {
  const [state, setState] = useState(true);
  const handleState=()=>{
    setState(true)
  }
  return (
    <Container
      component="main"
      maxWidth="xs"
      className="flex justify-center items-center pt-20"
    >
      <Paper elevation={3} className="p-6">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {state ? <Login /> : <Register handleState={()=>handleState()}/>}
        </Box>
        {state ? (
          <div onClick={() => setState(!state)} className="flex gap-2 ">
            <p>Don't have an account? </p>
            <p className="text-blue-700 cursor-pointer">Register</p>
          </div>
        ) : (
          <div className="flex gap-2">
            <p>Already have an account? </p>
            <Box onClick={() => setState(true)} className="cursor-pointer">
              <p className="text-blue-700">Login.</p>
            </Box>
          </div>
        )}

        <div className="mt-8 justify-center align-center">
          --------------------------------- or ---------------------------------
          <p className="text-blue-700"> Google Sign Up</p>
          {/* <TokenVerifyButton/> */}
        </div>
      </Paper>
    </Container>
  );
};

export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

const Register = ({handleState}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_BC_URL}/api/auth/register`,
        { email, password }
      );

      if (response.status === 201) {
        handleState(true);
        alert("Registration successful");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          // alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" className=" mb-4">
          REGISTER
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            className="bg-primary-600 hover:bg-primary-700 text-white py-3"
          >
            Register
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Register;

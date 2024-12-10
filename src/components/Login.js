import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CLIENT_BC_URL}/api/auth/login`,
        { email, password },
        {withCredentials: true,}
      );
      // const token = response.data.token;
      // localStorage.setItem('token', token);
      window.location.href = `${process.env.REACT_APP_ADMIN_UI_URL}`;

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
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
            InputLabelProps={{
              shrink: true, // Ensures label shrinks if email is autofilled or already typed
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            // name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
            InputLabelProps={{
              shrink: true, // Ensures label shrinks if password is autofilled or already typed
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            className="bg-primary-600 hover:bg-primary-700 text-white py-3"
          >
            Log In
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;

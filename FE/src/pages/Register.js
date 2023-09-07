import React, { useState } from "react";
import { Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const paperStyle = {
    padding: "25px 10px",
    width: "50%",
    margin: "20px auto",
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const user = { fullName, email, password, confirmPassword, gender };
    console.log(user);

    fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
        <div>
          <h2>Register Page</h2>
          <form
            component="form"
            sx={{ "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
            style={{ padding: "50px 20px", margin: "20px" }}
          >
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Confirm-Password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                fullWidth
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              style={{ margin: "25px" }}
              onClick={handleClick}
            >
              <Link to="/Login">Register</Link>
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
}

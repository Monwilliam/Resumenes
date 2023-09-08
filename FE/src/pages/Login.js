import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const loginTry = { email, password };
    console.log(loginTry);
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginTry),
      });
      const data = await response.json();
      console.log(data.token);
      fetch("http://localhost:8080/auth/me", {
        method: "GET",
        headers: { Authorization: "Bearer " + data.token },
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("logged", "true");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Paper
        elevation={10}
        style={{ padding: "25px 10px", width: "50%", margin: "20px auto" }}
      >
        <h2>Login Page</h2>
        <OutlinedInput
          style={{ padding: "5px", margin: "5px" }}
          placeholder="Email"
          fullWidth={true}
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <OutlinedInput
          style={{ padding: "5px", margin: "5px" }}
          fullWidth={true}
          placeholder="Password"
          size="small"
          onChange={(e) => setPassword(e.target.value)}
          type={showPass ? "text" : "password"}
        />
        <Button
          fullWidth={true}
          variant="contained"
          style={{ margin: "5px 5px" }}
          onClick={handleClick}
        >
          <Link to="/">Login</Link>
        </Button>
        <Button
          fullWidth={true}
          variant="contained"
          style={{ margin: "10px 5px", backgroundColor: "green" }}
          onClick={() => navigate("/Register")}
        >
          Create New Account
        </Button>
      </Paper>
    </div>
  );
}

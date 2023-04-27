import { Button, TextField } from "@mui/material";
import google from "./google.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import "./Login.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLogin } from "./Atom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setlogin] = useRecoilState(isLogin);

  function handleLogin() {
    const Users = JSON.parse(localStorage.getItem("user") || []);

    const user = Users.find((user) => {
      return (
        user.name.toString() === username.toString() ||
        user.email.toString() === username.toString() ||
        user.phone.toString() === username.toString()
      );
    });

    if (user) {
      if (user.password.toString() === password.toString()) {
        alert("success");
        setlogin(!islogin);
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("User not found");
    }
  }

  return (
    <>
      <TwitterIcon sx={{ color: "skyblue" }} />
      <h1>Sign in to Twitter</h1>
      <Button
        sx={{
          borderRadius: "100px",
          backgroundColor: "white",
          color: "black",
          marginTop: "10px",
        }}
        variant="contained"
      >
        <img src={google} alt="google" /> Sign in with Gmail
      </Button>
      <br />
      <Button
        sx={{
          borderRadius: "100px",
          backgroundColor: "white",
          color: "black",
          marginTop: "15px",
        }}
        variant="contained"
      >
        <AppleIcon />
        Sign in with Apple
      </Button>
      <br />
      <form>
        <TextField
          id="filled-basic"
          label="phone,email or username"
          variant="filled"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <TextField
          type="password"
          id="filled-basic"
          label="Password"
          variant="filled"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <Button
          sx={{
            borderRadius: "100px",
            backgroundColor: "white",
            color: "black",
            marginTop: "15px",
          }}
          variant="contained"
        >
          Forgot Password
        </Button>
        <br />
        <Button
          sx={{
            borderRadius: "100px",
            backgroundColor: "white",
            color: "black",
            marginTop: "15px",
          }}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <br />
      </form>
      <p>
        Don t have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
}

export default Login;

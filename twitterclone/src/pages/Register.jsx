import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let initialValues;
  if (localStorage.getItem("user")) {
    initialValues = JSON.parse(localStorage.getItem("user"));
  } else {
    initialValues = [];
  }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState(initialValues);
  const navigate = useNavigate();

  function handleRegister() {
    let user = {
      email: email,
      name: username,
      phone: phone,
      password: password,
    };
    setUserdata([...userdata, user]);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userdata));
  }, [userdata]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TwitterIcon />
        <br />
        <TextField
          type="email"
          id="filled-basic"
          label="email"
          variant="filled"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <TextField
          id="filled-basic"
          label="username"
          variant="filled"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <TextField
          id="filled-basic"
          label="phone"
          variant="filled"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br />
        <TextField
          type="password"
          id="filled-basic"
          label="Password"
          variant="filled"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <Button type="submit" variant="contained" onClick={handleRegister}>
          {" "}
          Register{" "}
        </Button>
      </form>
      <p>
        already have an account <button>Login</button>
      </p>
    </div>
  );
}

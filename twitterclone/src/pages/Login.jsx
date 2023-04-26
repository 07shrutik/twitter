

import {  Button, TextField } from '@mui/material'
// import Step from '@mui/material/Step';
// import './App.css'
import google from './google.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import styles from './Login.module.css'
import { useState } from 'react';

function Login() {
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [password,setpassword]=useState("")
  // const [result,setResult]=useState(false);

  function handleLogin(){
    const Users = JSON.parse(localStorage.getItem('user') || []);
    let usernameMatchFound = false;
  
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].name.toString() === username.toString() || Users[i].email.toString() === username.toString() ||Users[i].phone.toString() === username.toString()) {
        usernameMatchFound = true;
        if (Users[i].password.toString() === password.toString()) {
          alert("success")
          navigate('/home')
          localStorage.setItem("isLogin","true")
          return;
        } else {
          alert("Invalid credentials");
          return;
        }
      }
    }
  
    if (!usernameMatchFound) {
      alert("Invalid username");
    }
  }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   if(result){

  //     navigate("/home")
  //   }
  // }
  return (
    <>
    
    <TwitterIcon sx={{ color: "skyblue" }}/>
  <h1>Sign in to Twitter</h1>
      <Button sx={{borderRadius:"100px",backgroundColor:"white",color:"black",marginTop:'10px'}} variant="contained">
        <img src={google}alt="google"/> Sign in with Gmail
        </Button><br/>
      <Button sx={{borderRadius:"100px",backgroundColor:"white",color:"black",marginTop:"15px"}} variant="contained"><AppleIcon/>Sign in with Apple</Button><br/>
      <form>
      <TextField id="filled-basic" label="phone,email or username" variant="filled" onChange={(e)=>{setUsername(e.target.value)}} /><br/>
      <TextField type='password' id="filled-basic" label="Password" variant="filled" onChange={(e)=>{setpassword(e.target.value)}} /><br/>
      <Button sx={{borderRadius:"100px",backgroundColor:"white",color:"black",marginTop:"15px"}} variant="contained">Forgot Password</Button><br/>
      <Button  sx={{borderRadius:"100px",backgroundColor:"white",color:"black",marginTop:"15px"}} variant="contained" onClick={handleLogin}>Login</Button><br/>
      </form>
      <p>Don t have an account? <Link to="/register">Sign Up</Link></p>
</>
  )
}

export default Login

{/* <Stepper >
{data.map((label) => (
  <Step key={label}>{label}
  </Step>
  ))}
</Stepper> */}

      
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
          id="standard-adornment-password"
          endAdornment={
            <InputAdornment position="end">
                <IconButton>
                <Link to="/home"><TwitterIcon/></Link>
                </IconButton>
              </InputAdornment>
            }
            />
            // const data = [
            //   "","or",""
            // ];
        </FormControl> */}
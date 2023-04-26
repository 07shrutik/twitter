import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

export function Register(){


    return(
        <>
            <TwitterIcon/>
            <h1> Join Twitter Today </h1>
            <Button variant="contained"><GoogleIcon/> Sign in with Google </Button>
           <br />
           <Button variant="contained"><AppleIcon/> Sign in with Apple </Button>
           <hr /> or <hr />
           <Button variant="contained"> Create account </Button>
           <p> By signing up, you agree to the <a href=""> Terms of Service </a>
            and <a href=''>  Privacy Policy </a>, including <a href=''> Cookie Use. </a></p>
            Have an account already? <a href=" ">Log in</a> 
        </>
    )
}
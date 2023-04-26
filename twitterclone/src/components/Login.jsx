import  TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';



export function Login (){

    // const navigate = useNavigate()


    return(
        <>
            <TwitterIcon/>
            <h1> Sign in to Twitter </h1>
            <Button variant="contained"><GoogleIcon/> Sign in with Google </Button>
           <br />
           <Button variant="contained"><AppleIcon/> Sign in with Apple </Button>
           <hr /> or <hr />

            <form action="">
            <TextField id="filled-basic" label="Phone,Email or Username" variant="filled" /> <br />
            <Button variant="contained">Next </Button> <br />
            <Button variant="contained">Forget Password </Button>
            </form>
            <span> Dont have an account? <a href=""> Sign Up</a> </span>

        </>
    )
}
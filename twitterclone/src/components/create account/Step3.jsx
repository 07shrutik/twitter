import  TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export function Step_3() {

    return (
        <div>
            <h1> Create your account </h1>
            <TextField id="filled-basic" label="Name" variant="filled" value= 'vaidehi                      ✅'/>  <br /> 
            <TextField id="filled-basic" label="Email" variant="filled" value= 'vaidehi                      ✅' /> <br />
            <TextField id="filled-basic" label="Date of birth" variant="filled" value= 'vaidehi                      ✅'/> <br />
            <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. 
            Twitter may use your contact information, including your email address and phone number for purposes outlined 
            in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. Learn more. 
            Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.</p>
            
            <Button variant="contained">Sign Up</Button>
        </div>
    )
}
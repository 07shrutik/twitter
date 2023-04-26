import { Checkbox } from "@mui/material";
import {Button} from "@mui/material";


export function Step_2 (){


    return(
        <>
            <h2>Customize your experience</h2>
            <h3>Track where you see Twitter content across the web</h3>
            <p>Twitter uses this data to personalize your experience. <br/>
            This web browsing history will never be stored with your name, email, or phone number. 
            <Checkbox/>
            </p>
            <p>
            By signing up, you agree to our <a href=" ">Terms</a> , <a href="">Privacy Policy</a> , 
            and <a href="">Cookie Use</a> . Twitter may use your contact information, <br />
             including your email address and phone number for purposes outlined in our Privacy Policy.
             <a href="">Learn more</a> 
            </p>
            <Button variant="contained">Next</Button>
        </>
    )
}
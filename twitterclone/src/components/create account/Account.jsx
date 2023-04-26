import  TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button } from '@mui/material';

 export function Account() {

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selecteDays, setSelectedDays] = useState('');
    const [selectYear, setSelectedYear] = useState('');
    const [isEmail, setisEmail] = useState(false);
    

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
    
      const handleMonth = (event) => {
        setSelectedMonth(event.target.value);
    };

    const days = Array.from({ length: 31 }, (_, index) => 1 + index);

      const handleDay = (event) => {
        setSelectedDays(event.target.value);
    };

    const years = Array.from({ length: 24 }, (_, index) => 2000 + index);

      const handleYear = (event) => {
        setSelectedYear(event.target.value);
    };
    
    
  function handleField(){
    setisEmail(!isEmail)
}

  return (
    <div>
        <h1> Create your account </h1>
        <form action="">
        <TextField id="filled-basic" label="Name" variant="filled" /> <br />

        <TextField id="filled-basic" label={isEmail ? 'Email' : 'Phone'} variant="filled" /> <br />
        <p href='' onClick={handleField}>
        {isEmail ? 'use phone instead' : 'use email instead'}</p>


         <span> Date of Birth </span>
         <p>This will not be shown publicly. Confirm your own age, even if <br/>
         this account is for a business, a pet, or something else.</p>
         
         <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
         <InputLabel id="demo-simple-select-standard-label">Month</InputLabel>
         
         <Select value={selectedMonth} onChange={handleMonth} > 
        
      {months.map((month) => (
        
        <MenuItem key={month} value={month}>
          {month}
        </MenuItem>
      ))}
    </Select>
    </FormControl>

    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
         <InputLabel id="demo-simple-select-standard-label">Day</InputLabel>
         
         <Select value={selecteDays} onChange={handleDay} > 
        
      {days.map((day) => (
        
        <MenuItem key={day} value={day}>
          {day}
        </MenuItem>
      ))}
    </Select>
    </FormControl>

    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
         <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
         
         <Select value={selectYear} onChange={handleYear} > 
        
      {years.map((year) => (
        
        <MenuItem key={year} value={year}>
          {year}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
    <Button variant="contained">Next</Button>
        </form>

    </div>
  )
}


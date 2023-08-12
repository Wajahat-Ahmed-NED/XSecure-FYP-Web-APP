import * as React from 'react';
import { red } from "@mui/material/colors";
import styles from "../style";
// import Button from "./Button";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#333333',
      paper: '#000000',
    },
    primary: {
      main: '#1890FF',
    },
    text: {
      primary: '#ffffff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#ffffff',
          },
          '& input': {
            color: '#ffffff',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ffffff',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#ffffff',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#ffffff',
          },
          '& .MuiSelect-icon': {
            color: '#ffffff',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ffffff',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#ffffff',
          },
        },
      },
    },
  },
});


const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [invalidopen, setInvalidOpen] = useState(false)

  const handleChange = (setState) => (event) => {
    setState(event.target.value)
  }

  const handleSubmit = () => {
    console.log({
      "name": name,
      "email": email,
      "message": message
    })
    if (!name || !email || !message || !email.includes('@')) {
      setInvalidOpen(true)
    }
    else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": name,
        "email": email,
        "message": message
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/contactUs", requestOptions)
        .then(response => response.text())
        .then(result => {
          setOpen(true)
          console.log(result)
          setName('')
          setEmail('')
          setMessage('')
        })
        .catch(error => {
          setInvalidOpen(true)
          console.log('error', error)
        });
      // post localhost:3000/contactUs

    }
  }

  const handleClose = () => {
    setOpen(false)
    setInvalidOpen(false)
  }

  return (
    <section id="contactus" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`} style={{ backgroundColor: '#313131' }}>
      <div >
        <h2 className={styles.heading2}><span className="text-gradient">Contact Us Now!</span></h2>
        <ThemeProvider theme={theme}>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ textAlign: "center" }}>
            Email us your query for growing with us
          </p>
          <br />
          {/* <p style={{ color: "white" }}>Name</p> */}
          <br />
          <TextField onChange={handleChange(setName)} value={name} id="outlined-basic" label="Name" variant="outlined" fullWidth size="small" InputProps={{ style: { color: 'white' } }}
          />
          {/* <br /> */}
          <br />
          {/* <p style={{ color: "white" }}>Email</p> */}
          <br />
          <TextField onChange={handleChange(setEmail)} value={email} id="outlined-basic" label="Email" variant="outlined" fullWidth size="small" inputProps={{ style: { color: 'white' } }} />
          <br />
          {/* <br /> */}
          {/* <p style={{ color: "white" }}>Message</p> */}
          <br />
          <TextField onChange={handleChange(setMessage)} value={message} id="outlined-basic" label="Message" variant="outlined" multiline fullWidth inputProps={{ style: { color: 'white', height: '100px' } }} />
          <br />
          <br />
          <Button variant="contained" fullWidth onClick={handleSubmit}>Send Message</Button>
        </ThemeProvider>
      </div>
      {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you, We will contact you shortly!
        </Alert>
      </Snackbar>
      <Snackbar open={invalidopen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid Fields!
        </Alert>
      </Snackbar>
    </section>
  );
}
export default ContactUs;
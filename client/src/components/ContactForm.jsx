import { Box, FormControl, InputLabel, TextField, OutlinedInput, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fffcf0',
            light: '#ffffff',
            dark: '#ccc9bd',
        },
        secondary: {
            main: '#c49d44',
            light: '#f9ce72',
            dark: '#906f13',
        },
        background: {
            paper: '#fffcf0',
            default: '#f9ce72',
        },
    },
});


const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [comment, setComment] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [commentError, setCommentError] = useState("");


    const createUser = (event) => {
        event.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: PhoneNumber,
            comment: comment
        };
        console.log(newUser);
    };

    const firstNameValidator = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First name must be at least 2 characters")
        } else {
            setFirstNameError("");
        }
    }
    const lastNameValidator = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const emailValidator = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }
    const phoneNumberValidator = (e) => {
        setPhoneNumber(e.target.value);
        if (e.target.value.length < 10 && e.target.value.length > 0) {
            setPhoneNumberError("Phone Number must be at least 10 characters");
        } else {
            setPhoneNumberError("");
        }
    }
    const commentValidator = (e) => {
        setComment(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setCommentError("Questions or comments must be at least 2 characters");
        } else {
            setCommentError("");
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                    m: 3,
                    p: 2,
                    border: '2px solid white',
                }}
                noValidate
                autoComplete="off">
                <h2 style={{ marginLeft: "0.5rem" }}>Contact Us:</h2>
                <form onSubmit={(e) => { createUser(e); }}>
                    <div className="card">
                        <TextField
                            color="primary"
                            id="outlined-required"
                            label="First Name"
                            onChange={firstNameValidator}
                            helperText={firstNameError} />
                        <TextField
                            id="outlined-required"
                            label="Last Name"
                            onChange={lastNameValidator}
                            helperText={lastNameError} />
                    </div>
                    <div className="card">
                        <TextField
                            id="outlined-required"
                            label="Email"
                            onChange={emailValidator}
                            helperText={emailError} />
                        <TextField
                            id="outlined"
                            label="Phone #"
                            onChange={phoneNumberValidator}
                            helperText={phoneNumberError} />
                    </div>
                    <div className="card">
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-comment">Question or Comment</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-comment"
                                rows={4}
                                onChange={commentValidator}
                                label="Question or Comment"
                                helperText={commentError}
                            />
                        </FormControl>
                    </div>
                    <Grid container>
                        <Grid item xs={8} >
                        </Grid>
                        <Grid item xs={4} >
                            <Button variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </ThemeProvider >
    );
};

export default ContactForm;
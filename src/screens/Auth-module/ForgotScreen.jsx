import React, { useState } from 'react'
import Logo1 from "../../assets/images/Logo1.svg"
import { makeStyles } from '@mui/styles';
import { Box, TextField } from '@mui/material';
import "./Auth.css"
import { useNavigate } from 'react-router-dom';
// **** //
// **** //
const useStyles = makeStyles({
    inputRoot: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#F6F8FE',
                borderRadius: '10px', // Add border radius here

            },
            '&:hover fieldset': {
                borderColor: '#F6F8FE',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F6F8FE',
            },
        },
    },
    inputLabel: {
        color: '#1A1A1A',
        '&.Mui-focused': {
            color: '#1A1A1A',
        },
    },
});

const ForgotScreen = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const [Show, setShow] = useState(false)

    return (
        <div className='text-white Primary_Dev '>
            <div className="Main grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="One bg-white">
                    <div className="py-[100px] lg:px-[120px] md:px-[60px] px-[30px]">
                        <img src={Logo1} alt={Logo1} className="Logo" />
                        {!Show ?
                            <div className="Text">
                                <h1 className="text-dark text-[32px] font-[700] pt-[40px]">Forgot Password</h1>
                                <h3 className="text-lightGray text-[16px] pt-[16px] mb-[45px]">Provide your email to reset your password</h3>
                                <form className="">
                                    <Box component="form" noValidate autoComplete="off">
                                        <div className="mt-[20px]">
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Email"
                                                placeholder='ex: xyz@gmail.com'
                                                className={`input-field w-full ${classes.inputRoot}`}
                                                InputLabelProps={{
                                                    className: classes.inputLabel,
                                                    sx: {
                                                        color: '#828EB0',
                                                        '&.Mui-focused': {
                                                            color: '#828EB0',
                                                        },
                                                    },
                                                }}
                                            />
                                        </div>
                                    </Box>
                                    <div className="mt-[40px]">
                                        <button className="Login_Button py-[15px] text-center bg-darkGray text-white w-full rounded-[10px]"
                                            onClick={() => setShow(true)}
                                        >Continue</button>
                                    </div>
                                    <div className="flex justify-end mt-[20px]">
                                        <p className="forgotPass text-[16px] text-lightGray"
                                        >Remember password?
                                            &nbsp;<span className="forgotPass cursor-pointer text-[16px] text-yellow1" onClick={() => navigate("/")}>Login</span></p>
                                    </div>
                                </form>
                            </div>
                            :
                            <div className="Text">
                                {/* LINK SENT */}
                                <h1 className="text-dark text-[32px] font-[700] pt-[40px]">Link Sent</h1>
                                <h3 className="text-lightGray text-[16px] pt-[16px] mb-[45px]">A link to reset your password has been sent to your email address.</h3>
                                {/*  */}
                                <div className="mt-[40px]">
                                    <button className="Login_Button py-[15px] text-center bg-dark 
                                    text-white w-full rounded-[10px]"
                                        onClick={() => navigate("/ResetPassword")}>Check Email</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {/*  */}

                <div className="Two ForBG_Image"></div>
            </div>
        </div>
    )
}

export default ForgotScreen

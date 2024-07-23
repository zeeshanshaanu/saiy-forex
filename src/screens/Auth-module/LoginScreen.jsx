import React, { useState } from 'react'
import AuthRightBG from "../../assets/images/AuthRightBG.svg"
import Logo1 from "../../assets/images/Logo1.svg"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@mui/styles';
import { Box, TextField } from '@mui/material';
import "./Auth.css"
import { useNavigate } from "react-router-dom";
// **** //
// **** //
const useStyles = makeStyles({
    inputRoot: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ECF0F8',
                borderRadius: '10px', // Add border radius here

            },
            '&:hover fieldset': {
                borderColor: '#ECF0F8',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ECF0F8',
            },
        },
    },
    inputLabel: {
        color: '#1A1A1A', // Custom label color
        '&.Mui-focused': {
            color: '#1A1A1A', // Custom focused label color
        },
    },
});

const LoginScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const classes = useStyles();
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const navigate = useNavigate()


    return (
        <div className='text-white Primary_Dev '>
            <div className="Main grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="One bg-white">
                    <div className="py-[100px] lg:px-[120px] md:px-[60px] px-[30px]">
                        <img src={Logo1} alt={Logo1} className="Logo" />
                        <div className="Text">
                            <h1 className="text-dark text-[32px] font-[700] pt-[40px]">Welcome</h1>
                            <h3 className="text-lightGray text-[16px] pt-[16px] mb-[45px]">Sign into your account</h3>
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
                                    <div className="relative mt-[30px] w-full">
                                        <TextField
                                            type={passwordVisible ? "text" : "password"}
                                            required
                                            id="outlined-required"
                                            label="Password"
                                            placeholder='ex: xyz@123'
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
                                            InputProps={{
                                                endAdornment: (
                                                    <div
                                                        className="absolute inset-y-0 right-0 flex items-center px-[20px] cursor-pointer"
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        {passwordVisible ? <RemoveRedEyeIcon className="text-lightGray w-[15px] h-[15px]" /> : <VisibilityOffIcon className="text-lightGray w-[15px] h-[15px]" />}
                                                    </div>
                                                ),
                                            }}
                                        />
                                    </div>
                                </Box>
                                {/*  */}
                                <div className="flex justify-end mt-[10px]">
                                    <p className="forgotPass cursor-pointer text-[16px] text-lightGray" onClick={() => navigate("/forgot")}>Forgot password?</p>
                                </div>
                                {/*  */}
                                <div className="mt-[40px]">
                                    <button className="Login_Button py-[15px] text-center bg-darkGray text-white w-full rounded-[10px]"
                                        onClick={() => navigate("/Dashboard")}
                                    >Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="Two ForBG_Image"></div>
            </div>
        </div>
    )
}

export default LoginScreen

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

const ResetPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [Show, setShow] = useState(false)

    const [validation, setValidation] = useState({
        length: false,
        upperLower: false,
        specialChar: false,
        number: false,
        match: false
    });

    const classes = useStyles();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        setValidation({
            length: newPassword.length >= 6,
            upperLower: /[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword),
            specialChar: /[@#$%&*]/.test(newPassword),
            number: /\d/.test(newPassword),
            match: newPassword === confirmPassword
        });
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        setValidation((prevState) => ({
            ...prevState,
            match: password === newConfirmPassword
        }));
    };

    const allValid = Object.values(validation).every(Boolean);

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
                                <h1 className="text-dark text-[32px] font-[700] pt-[40px]">Change Password</h1>
                                <h3 className="text-lightGray text-[16px] pt-[16px] mb-[45px]">Please enter your new password</h3>
                                <form className="">

                                    <Box component="form" noValidate autoComplete="off">

                                        <div className="relative mt-[30px] w-full">
                                            <TextField
                                                type={passwordVisible ? "text" : "password"}
                                                required
                                                id="outlined-required"
                                                label="New password"
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
                                        <div className="relative mt-[30px] w-full">
                                            <TextField
                                                type={passwordVisible2 ? "text" : "password"}
                                                required
                                                id="outlined-required"
                                                label="Confirm new password"
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
                                                            onClick={togglePasswordVisibility2}
                                                        >
                                                            {passwordVisible2 ? <RemoveRedEyeIcon className="text-lightGray w-[15px] h-[15px]" /> : <VisibilityOffIcon className="text-lightGray w-[15px] h-[15px]" />}
                                                        </div>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className="mt-[20px] text-text1 text-[12px]">
                                            <p className=''>password must contain
                                            </p>
                                            <li className=''>at least 6 characters</li>
                                            <li className=''>at least 1 uppercase & lowercase letter (Aa-Zz)</li>
                                            <li className=''>at least 1 special character (@#$%&*)</li>
                                            <li className=''>at least 1 number (1-0)</li>
                                        </div>
                                    </Box>
                                    {/*  */}

                                    <div className="mt-[40px]">
                                        <button className="Login_Button py-[15px] text-center bg-darkGray text-white w-full rounded-[10px]"
                                            onClick={() => setShow(true)}
                                        >Reset Password</button>
                                    </div>
                                    {/*  */}
                                    {/*  */}
                                    <div className=" mt-[20px]">
                                        <p className="forgotPass text-[16px] text-lightGray"
                                        >Remember password?
                                            &nbsp;<span className="forgotPass cursor-pointer text-[16px] text-yellow1" onClick={() => navigate("/")}>Login</span></p>
                                    </div>
                                </form>
                            </div>
                            :
                            <div className="Text">
                                {/* LINK SENT */}
                                <h1 className="text-dark text-[32px] font-[700] pt-[40px]">Password changed</h1>
                                <h3 className="text-lightGray text-[16px] pt-[16px] mb-[45px]">You have successfully changed your password. Login to your account using new password</h3>
                                {/*  */}
                                <div className="mt-[40px]">
                                    <button className="Login_Button py-[15px] text-center bg-dark 
                                    text-white w-full rounded-[10px]"
                                        onClick={() => navigate("/")}>Go to Login</button>
                                </div>
                            </div>
                        }
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

export default ResetPassword

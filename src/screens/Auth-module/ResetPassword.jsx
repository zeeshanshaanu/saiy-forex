import React, { useState } from 'react'
import Logo1 from "../../assets/images/Logo1.svg"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@mui/styles';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Box, CircularProgress, TextField } from '@mui/material';
import { resetPassword } from '../../store/Auth-Slice/auth';
import "./Auth.css"
import SimpleAlert from '../../components/Alert-notification/Alert';
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
        color: '#1A1A1A', // Custom label color
        '&.Mui-focused': {
            color: '#1A1A1A', // Custom focused label color
        },
    },
});

const initialState = {
    password: "",
    confirm_password: ""
};

const ResetPassword = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id, token } = useParams();
    // console.log(id);
    // console.log(token);

    // 
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [Show, setShow] = useState(false)
    // 
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirm_password) {
            setAlertMessage("Passwords do not match!");
            setAlertSeverity("error");
            return;
        }

        setLoading(true);
        const payload = {
            formData,
            id,
            token
        };

        dispatch(resetPassword(payload)).then((data) => {
            if (data?.payload?.status === 'success') {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity(data?.payload?.status);
                setTimeout(() => {
                    setLoading(false);
                    setShow(true)
                }, 2000);
            } else {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity("error");
                setLoading(false);
            }
        });
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };
    const isFormValid = formData.confirm_password !== "" && formData.password !== "";

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
                                <form onSubmit={handleSubmit}>

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
                                                value={formData?.password}
                                                onChange={(event) =>
                                                    setFormData({
                                                        ...formData,
                                                        password: event.target.value,
                                                    })
                                                }
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

                                                value={formData?.confirm_password}
                                                onChange={(event) =>
                                                    setFormData({
                                                        ...formData,
                                                        confirm_password: event.target.value,
                                                    })
                                                }
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
                                    <button
                                        type='submit'
                                        className={`mt-[40px] Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                        disabled={!isFormValid || loading}
                                    >
                                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Reset Password'}
                                    </button>

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
                    {/* Show alert conditionally */}
                    {alertMessage && (
                        <SimpleAlert
                            message={alertMessage}
                            severity={alertSeverity}
                            onClose={closeAlert}
                        />
                    )}
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

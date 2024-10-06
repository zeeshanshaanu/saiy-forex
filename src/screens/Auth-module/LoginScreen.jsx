import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Box, CircularProgress, TextField } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@mui/styles';
import { loginUser } from '../../store/Auth-Slice/auth';
import SimpleAlert from '../../components/Alert-notification/Alert';
import Logo1 from "../../assets/images/Logo1.svg"
import "./Auth.css";

const useStyles = makeStyles({
    inputRoot: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#F6F8FE',
                borderRadius: '10px',
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

const initialState = {
    email: "",
    password: "",
};

const LoginScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [loading, setLoading] = useState(false);

    // 
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        dispatch(loginUser(formData)).then((data) => {
            if (data?.payload?.status === 'success') {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity(data?.payload?.status);
                setTimeout(() => {
                    setLoading(false);
                    navigate("/Dashboard")
                }, 2000);
            } else {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity("error");
            }
        });
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };
    const isFormValid = formData.email !== "" && formData.password !== "";


    return (
        <div className='text-white Primary_Dev'>
            <div className="Main grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
                <div className="One bg-white">
                    <div className="py-[100px] lg:px-[120px] md:px-[60px] px-[30px]">
                        <img src={Logo1} alt={Logo1} className="Logo" />
                        <div className="Text">
                            <h1 className="text-dark text-[32px] font-[700] pt-[40px]">Welcome</h1>
                            <h3 className="text-lightGray text-[16px] pt-[16px] mb-[45px]">Sign into your account</h3>
                            <form onSubmit={handleSubmit}>
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
                                            value={formData?.email}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    email: event.target.value,
                                                })
                                            }
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
                                            value={formData?.password}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    password: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </Box>
                                <div className="flex justify-end mt-[10px]">
                                    <p className="forgotPass cursor-pointer text-[16px] text-lightGray" onClick={() => navigate("/forgot")}>Forgot password?</p>
                                </div>
                                <button
                                    type='submit'
                                    className={`Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                    disabled={!isFormValid || loading}
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                                </button>
                            </form>
                        </div>
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
                <div className="Two ForBG_Image"></div>
            </div>
        </div>
    );
};

export default LoginScreen;

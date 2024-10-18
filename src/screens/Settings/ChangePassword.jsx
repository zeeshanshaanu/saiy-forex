import { Drawer } from 'antd';
import React, { useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, CircularProgress, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../store/ProfileSetting/profile';
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

const ChangePassword = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    // 
    const [OldpasswordVisible, setOldPasswordVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    //  
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [loading, setLoading] = useState(false);

    const onClose = () => {
        setOpen(false);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };
    const togglePasswordVisibility3 = () => {
        setOldPasswordVisible(!OldpasswordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirm_password) {
            setAlertMessage("Passwords do not match!");
            setAlertSeverity("error");
            setOpen(false);

            return;
        }
        setLoading(true);
        dispatch(changePassword(formData)).then((data) => {

            if (data?.payload?.status === 'success') {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity(data?.payload?.status);
                setTimeout(() => {
                    setOpen(false);
                    setLoading(false);
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
        <div className="">
            <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between border-b pb-[20px]">
                        <h2 className='text-dark font-bold my-auto text-[18px]'>Change Password</h2>
                        <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="flex-grow overflow-auto">
                            <Box component="form" noValidate autoComplete="off">
                                <div className="mt-[20px]">
                                    <div className="relative mt-[30px] w-full">
                                        <TextField
                                            type={OldpasswordVisible ? "text" : "password"}
                                            required
                                            readOnly
                                            id="outlined-required"
                                            label="Old password"
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
                                                        onClick={togglePasswordVisibility3}
                                                    >
                                                        {OldpasswordVisible ? <RemoveRedEyeIcon className="text-lightGray w-[15px] h-[15px]" /> :
                                                            <VisibilityOffIcon className="text-lightGray w-[15px] h-[15px]" />}
                                                    </div>
                                                ),
                                            }}
                                            disabled
                                            defaultValue="zee@123"
                                        />
                                    </div>
                                    <div className="relative mt-[30px] w-full">
                                        <TextField
                                            type={passwordVisible ? "text" : "password"}

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
                                </div>
                            </Box>
                        </div>
                        <div className="my-5 flex gap-5 w-full">
                            <div className="my-auto w-2/4">
                                <button
                                    type='submit'
                                    className={` Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                    disabled={!isFormValid || loading}
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Update'}
                                </button>
                            </div>
                            <div className="my-auto w-2/4">
                                <button onClick={onClose} className="Login_Button py-[15px] px-[30px] text-center bg-white text-dark w-full rounded-[10px] border border-lightGray">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Drawer>
            {alertMessage && (
                <SimpleAlert
                    message={alertMessage}
                    severity={alertSeverity}
                    onClose={closeAlert}
                />
            )}
        </div>
    );
}

export default ChangePassword;

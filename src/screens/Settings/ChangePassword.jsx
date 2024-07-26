import { Divider, Drawer } from 'antd';
import React, { useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; import { useNavigate } from 'react-router-dom';

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

const top100Films = [
    { label: 'The Shawshank Redemption' },
    { label: 'The Godfather' },
    { label: 'The Godfather: Part II' },
    { label: 'The Dark Knight' },
];

const ChangePassword = ({ open, setOpen }) => {
    const onClose = () => {
        setOpen(false);
    };


    const [OldpasswordVisible, setOldPasswordVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [Show, setShow] = useState(false)

    const classes = useStyles();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };
    const togglePasswordVisibility3 = () => {
        setOldPasswordVisible(!OldpasswordVisible);
    };



    return (
        <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between border-b pb-[20px]">
                    <h2 className='text-dark font-bold my-auto text-[18px]'>Change Password</h2>
                    <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                </div>
                <div className="flex-grow overflow-auto">
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-[20px]">
                            <div className="relative mt-[30px] w-full">
                                <TextField
                                    type={OldpasswordVisible ? "text" : "password"}
                                    required
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
                                />
                            </div>
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
                        </div>
                    </Box>
                </div>
                <div className="p-4 flex gap-5 w-full">
                    <div className="my-auto w-2/4">
                        <button className="Login_Button py-[15px] px-[30px] text-center bg-dark text-white w-full rounded-[10px] border border-dark">
                            Update
                        </button>
                    </div>
                    <div className="my-auto w-2/4">
                        <button className="Login_Button py-[15px] px-[30px] text-center bg-white text-dark w-full rounded-[10px] border border-lightGray">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

export default ChangePassword;

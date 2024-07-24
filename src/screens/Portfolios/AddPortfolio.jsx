import { Divider, Drawer } from 'antd';
import React from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Autocomplete from '@mui/material/Autocomplete';

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

const top100Films = [
    { label: 'The Shawshank Redemption' },
    { label: 'The Godfather' },
    { label: 'The Godfather: Part II' },
    { label: 'The Dark Knight' },
];

const AddPortfolio = ({ open, setOpen }) => {
    const classes = useStyles();
    const onClose = () => {
        setOpen(false);
    };

    return (
        <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between border-b pb-[20px]">
                    <h2 className='text-dark font-bold my-auto text-[18px]'>Add Portfolio</h2>
                    <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                </div>
                <div className="flex-grow overflow-auto p-4">
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-[20px]">
                            <TextField
                                required
                                id="outlined-required"
                                label="Portfolio Name"
                                placeholder='Gold Chains'
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
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Minimum Investment Allowed"
                                    placeholder='$500'
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
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Maximum Investment Allowed"
                                    placeholder='$10,000'
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
                            <div className="mt-5 w-full">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params) => <TextField {...params} label="Investment Term" />}
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
                            <div className="mt-5 w-full">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params) => <TextField {...params} label="Withdrawal Period" />}
                                    className={`input-field w-full ${classes.inputRoot}`}
                                    InputLabelProps={{
                                        className: classes.inputLabel,
                                        sx: {
                                            color: '#828EB0',
                                            '&.Mui-focused': {
                                                color: '#828EB0',
                                            },
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </Box>
                </div>
                <div className="p-4">
                    <button className="Login_Button py-[15px] text-center bg-dark text-white w-full rounded-[10px]">
                        Add
                    </button>
                </div>
            </div>
        </Drawer>
    );
}

export default AddPortfolio;

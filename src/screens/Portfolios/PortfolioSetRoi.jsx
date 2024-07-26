import { Drawer } from 'antd';
import React, { useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
//  
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Logo1 from "../../assets/images/Logo1.svg"

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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const PortfolioSetRoi = ({ open, setOpen }) => {

    const classes = useStyles();
    const onClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [Investors, setInvestors] = useState("Investors");

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between border-b pb-[20px]">
                    <h2 className='text-dark font-bold my-auto text-[18px]'>Set ROI</h2>
                    <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                </div>
                <div className="flex-grow overflow-auto mt-4">
                    {/*  */}
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="All Investors"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="All Investors" control={<Radio />} label="All Investors" onClick={() => setInvestors("Investors")} />
                                <FormControlLabel value="Individuals" control={<Radio />} label="Individuals" onClick={() => setInvestors("Individuals")} />
                            </RadioGroup>
                        </FormControl>

                        {Investors === "Investors" ?
                            <div className="mt-[20px]">
                                <TextField
                                    id="outlined-required"
                                    label="ROI Amount"
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

                            </div> :
                            <div className="w-full mt-4">
                                <FormControl className="w-full mt-4">
                                    <InputLabel id="demo-multiple-chip-label">Individuals </InputLabel>
                                    <Select
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Individuals" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
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
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <div className="mt-4">
                                    <div className="flex justify-between w-full">
                                        <div className="w-2/4 my-auto ">
                                            <h3 className="text-dark text-[16px] flex gap-[12px]">
                                                <img src={Logo1} alt={Logo1} className='rounded-full w-[20px] h-[20px] cover my-auto' />
                                                Esther Howard</h3>
                                        </div>
                                        <div className="w-2/4 my-auto ">
                                            <TextField
                                                id="outlined-required"
                                                label="ROI Amount"
                                                placeholder='Gold Chains'
                                                className={`input-field ${classes.inputRoot}`}
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
                                    </div>
                                </div>
                                {/*  */}
                                <div className="mt-4">
                                    <div className="flex justify-between w-full">
                                        <div className="w-2/4 my-auto ">
                                            <h3 className="text-dark text-[16px] flex gap-[12px]">
                                                <img src={Logo1} alt={Logo1} className='rounded-full w-[20px] h-[20px] cover my-auto' />
                                                Esther Howard</h3>
                                        </div>
                                        <div className="w-2/4 my-auto ">
                                            <TextField
                                                id="outlined-required"
                                                label="ROI Amount"
                                                placeholder='Gold Chains'
                                                className={`input-field ${classes.inputRoot}`}
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
                                    </div>
                                </div>
                                {/*  */}
                                <div className="mt-4">
                                    <div className="flex justify-between w-full">
                                        <div className="w-2/4 my-auto ">
                                            <h3 className="text-dark text-[16px] flex gap-[12px]">
                                                <img src={Logo1} alt={Logo1} className='rounded-full w-[20px] h-[20px] cover my-auto' />
                                                Esther Howard</h3>
                                        </div>
                                        <div className="w-2/4 my-auto ">
                                            <TextField
                                                id="outlined-required"
                                                label="ROI Amount"
                                                placeholder='Gold Chains'
                                                className={`input-field ${classes.inputRoot}`}
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
                                    </div>
                                </div>
                            </div>
                        }


                    </Box>
                    {/*  */}
                    {/*  */}
                </div>
                <div className="p-4">
                    <button className="Login_Button py-[15px] text-center bg-dark text-white w-full rounded-[10px]">
                        Save
                    </button>
                </div>
            </div>
        </Drawer>
    );
}

export default PortfolioSetRoi;

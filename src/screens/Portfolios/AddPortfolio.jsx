import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, CircularProgress, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import SimpleAlert from '../../components/Alert-notification/Alert';
import { createPortfolio, UpdatePortfolio } from '../../store/Portfolio/Portfolio';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const withdrawal_period = [
    { label: '10 days' },
    { label: '20 days' },
    { label: '30 days' },
    { label: '40 days' },
];

const AddPortfolio = ({ open, setOpen, onlistUpdate, PortfolioID }) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector((state) => state?.auth?.token);
    // 
    const initialState = {
        name: "",
        min_investment: "",
        max_investment: "",
        withdrawal_Period: "",
        investors: []
    };
    // 
    const [updateloading, setUpdateLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Investors, setInvestors] = useState([]);

    // console.log("formData-->>>>", formData);
    // 
    const GetData = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/investor", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            const InvestorsList = response?.data?.data?.map((items) => (items))
            setInvestors(InvestorsList);
            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    const PortfolioData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/portfolio/${PortfolioID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setFormData({
                name: response?.data?.data?.name,
                min_investment: response?.data?.data?.min_investment,
                max_investment: response?.data?.data?.max_investment,
                withdrawal_Period: response?.data?.data?.withdrawal_Period,
                investors: response?.data?.data?.investors,
            });

            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        PortfolioData();
    }, [PortfolioID]);

    // 
    useEffect(() => {
        GetData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUpdateLoading(true);
        const action = PortfolioID ? UpdatePortfolio : createPortfolio;
        // 
        dispatch(
            PortfolioID ? action({ PortfolioID, formData }) : action(formData)
        ).then((data) => {
            if (data?.payload?.status === 'success') {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity(data?.payload?.status);
                setTimeout(() => {
                    setOpen(false);
                    setFormData("")
                    setUpdateLoading(false);
                    PortfolioID ?
                        navigate("/Portfolios") :
                        onlistUpdate();
                }, 2000);
            } else {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity("error");
                setUpdateLoading(false);
                setOpen(false);
            }
        });
    };

    const handleChange = (event) => {
        const { target: { value } } = event;
        setFormData((prevFormData) => ({
            ...prevFormData,
            investors: Array.isArray(value)
                ? value?.map((investorName) => {
                    const investorObj = Investors.find((investor) => investor.name === investorName);
                    return {
                        id: investorObj?._id,
                        image: investorObj?.image,
                        name: investorObj?.name,
                        email: investorObj?.email,
                        phone: investorObj?.phone,
                        address: investorObj?.address
                    };
                })
                : [],
        }));
    };

    const onClose = () => {
        setOpen(false);
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };

    const isFormValid = formData.name && formData.min_investment && formData.max_investment && formData.withdrawal_Period;
    // 
    return (
        <div>
            <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between border-b pb-[20px]">
                        <h2 className='text-dark font-bold my-auto text-[18px]'>{PortfolioID ? "Edit portfolio" : "Add portfolio"}</h2>
                        <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex-grow overflow-auto py-4">
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
                                        defaultValue={formData?.name}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                name: event.target.value,
                                            })
                                        }
                                    />
                                    <div className="mt-5">
                                        <TextField
                                            required
                                            type='number'
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
                                            defaultValue={formData?.min_investment}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    min_investment: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <TextField
                                            required
                                            type='number'
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
                                            defaultValue={formData?.max_investment}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    max_investment: event.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="mt-5 w-full">
                                        <FormControl className="mt-5 w-full">
                                            <InputLabel id="demo-multiple-name-label">Investment Term</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                id="demo-multiple-name"
                                                multiple
                                                input={<OutlinedInput label="Investment Term" />}
                                                className={`input-field w-full ${classes.inputRoot}`}
                                                // 
                                                renderValue={(selected) => selected.join(', ')}
                                                value={formData?.investors?.map((investor) => investor?.name) || []}
                                                onChange={handleChange}

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
                                                {Investors?.map((investor) => (

                                                    <MenuItem key={investor.id} value={investor?.name}>
                                                        {investor?.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    
                                    <div className="mt-5 w-full">
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={withdrawal_period}
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
                                            defaultValue={formData?.withdrawal_Period}
                                            onChange={(event, value) =>
                                                setFormData({
                                                    ...formData,
                                                    withdrawal_Period: value?.label || '',
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="py-4">
                            <button
                                disabled={!isFormValid || updateloading}

                                className={`Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}>
                                {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Create'}

                            </button>
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

export default AddPortfolio;

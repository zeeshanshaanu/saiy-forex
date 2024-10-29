import { Drawer } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, CircularProgress, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Autocomplete from '@mui/material/Autocomplete';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import SimpleAlert from '../../components/Alert-notification/Alert';
import { CameraOutlined } from '@ant-design/icons';
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
    const token = useSelector((state) => state?.auth?.token);
    // 
    const initialState = {
        image: "",
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
    const [selectedFile, setSelectedFile] = useState({
        file: "",
        filepreview: null,
    });
    console.log(loading);

    const GetData = useCallback(async () => {
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
        finally {
            setLoading(false);
        }
    }, [token]);

    const PortfolioData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/portfolio/${PortfolioID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setFormData({
                image: response?.data?.data?.image,
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
        finally {
            setLoading(false);
        }
    }, [token, PortfolioID]);

    useEffect(() => {
        PortfolioData();
    }, [PortfolioData]);

    useEffect(() => {
        GetData();
    }, [GetData]);

    const handleImageChange = (event) => {
        if (event?.target?.files[0]) {
            setSelectedFile({
                ...selectedFile,
                file: event.target.files[0],
                filepreview: URL.createObjectURL(event?.target?.files[0]),
            });
        };
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUpdateLoading(true);
        const formDataToSend = new FormData();
        formDataToSend.append("image", selectedFile.file);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("min_investment", formData.min_investment);
        formDataToSend.append("max_investment", formData.max_investment);
        formDataToSend.append("withdrawal_Period", formData.withdrawal_Period);
        formDataToSend.append('investors', JSON.stringify(formData.investors));

        try {
            let response;
            if (!PortfolioID) {
                response = await axios.post('portfolio', formDataToSend, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                response = await axios.put(`portfolio/${PortfolioID}`, formDataToSend, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            if (response?.data?.status === 'success') {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('success');
                setTimeout(() => {
                    setFormData(initialState);
                    setOpen(false);
                    setUpdateLoading(false);
                    PortfolioID ?
                        navigate("/Portfolios") :
                        onlistUpdate();

                }, 2000);
            }
        } catch (error) {
            setAlertMessage(error?.response?.data?.message);
            setAlertSeverity('error');
            setUpdateLoading(false);
        }
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
                                    <div className="my-5 relative">
                                        <Box mt={2} textAlign="center">
                                            {selectedFile.filepreview ? (
                                                <img
                                                    src={selectedFile.filepreview}
                                                    alt="Selected"
                                                    className='w-full h-[150px] rounded-[10px] object-cover border-[1px] border-yellow1' />
                                            ) : (
                                                formData?.image ? (
                                                    <img
                                                        src={formData?.image}
                                                        alt="Selected"
                                                        className='w-full h-[150px] rounded-[10px] object-cover border-[1px] border-yellow1'
                                                    />
                                                ) : (
                                                    <Box className='w-full h-[150px] rounded-[10px] border-[1px] border-yellow1 flex justify-center items-center'>
                                                        <p>No Image Available</p>
                                                    </Box>
                                                )
                                            )}
                                        </Box>

                                        <div className={selectedFile?.file ? "mt-5 absolute top-[2.3rem] left-[40%]" : "mt-5"}>
                                            <Button component="label" >
                                                <CameraOutlined className='text-[30px] text-dark' />
                                                <input
                                                    type="file"
                                                    hidden
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </Button>
                                            <div className="mb-5 mt-0">
                                                <small className='text-dark font-bold'>Upload image </small>
                                            </div>
                                        </div>

                                    </div>
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
                                {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Submit'}
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

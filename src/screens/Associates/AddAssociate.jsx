import { Drawer } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Box, CircularProgress, TextField, Button, Autocomplete, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CameraOutlined } from '@ant-design/icons';

import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import SimpleAlert from '../../components/Alert-notification/Alert';
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
const level = [
    { label: 'main associate' },
    { label: 'sub associate' },
];

const initialState = {
    image: "",
    name: "",
    email: "",
    level: "",
    earn: "",
    paid_out: "",
    investors: []
};
const AddAssociate = ({ open, setOpen, onlistUpdate, AssociateID }) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const token = useSelector((state) => state?.auth?.token);

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
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        GetData();
    }, [GetData]);

    const AssociateData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/Associate/${AssociateID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setFormData({
                name: response?.data?.data?.name,
                image: response?.data?.data?.image,
                email: response?.data?.data?.email,
                level: response?.data?.data?.level,
                earn: response?.data?.data?.earn,
                paid_out: response?.data?.data?.paid_out,
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
    }, [token, AssociateID]);


    useEffect(() => {
        AssociateData();
    }, [AssociateData]);


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
        const formPayload = new FormData();
        formPayload.append('image', selectedFile.file);
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('level', formData.level);
        formPayload.append('earn', formData.earn);
        formPayload.append('paid_out', formData.paid_out);
        formPayload.append('investors', JSON.stringify(formData.investors));

        try {
            let response;
            if (!AssociateID) {
                response = await axios.post('Associate', formPayload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                response = await axios.put(`Associate/${AssociateID}`, formPayload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            if (response?.data?.status === 'success') {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('success');
                setTimeout(() => {
                    setOpen(false);
                    setUpdateLoading(false);
                    AssociateID ?
                        navigate("/MainAssociates") :
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
    // const isFormValid = formData.name && formData.email && formData.earn && formData.level && formData.paid_out && selectedFile.filepreview || formData.image
    let isFormValid;

    if (
        formData.name &&
        formData.email &&
        formData.earn &&
        formData.level &&
        formData.paid_out &&
        selectedFile.filepreview
    ) {
        isFormValid = true;

    } else if (formData.image) {
        isFormValid = true;
    } else {
        isFormValid = false;
    }

    return (
        <div>
            <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between border-b pb-[20px]">
                        <h2 className='text-dark font-bold my-auto text-[18px]'>{AssociateID ? "Edit associate" : "Add associate"}</h2>
                        <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex-grow overflow-auto py-4">
                            {/* image-box */}
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
                            {/* name */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
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

                            </div>
                            {/* email */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
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
                                    defaultValue={formData?.email}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            email: event.target.value,
                                        })
                                    }
                                />

                            </div>
                            {/* earned */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    type='number'
                                    id="outlined-required"
                                    label="Earned"
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
                                    defaultValue={formData?.earn}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            earn: event.target.value,
                                        })
                                    }
                                />
                            </div>
                            {/* paid-out */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    type='number'
                                    id="outlined-required"
                                    label="Paid Out"
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
                                    defaultValue={formData?.paid_out}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            paid_out: event.target.value,
                                        })
                                    }
                                />
                            </div>
                            {/* level */}
                            <div className="mt-5 w-full">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={level}
                                    renderInput={(params) => <TextField {...params} label="Level" />}
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
                                    defaultValue={formData?.level}
                                    onChange={(event, value) =>
                                        setFormData({
                                            ...formData,
                                            level: value?.label || '',
                                        })
                                    }
                                />
                            </div>
                            {/* investors */}
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

export default AddAssociate;

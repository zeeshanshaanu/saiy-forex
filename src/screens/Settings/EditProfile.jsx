import { Drawer } from 'antd';
import React, { useState, useEffect, useCallback } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, CircularProgress, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useSelector } from 'react-redux';
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

const EditProfile = ({ openEdit, setOpenEdit, onProfileUpdate }) => {
    const classes = useStyles();
    const token = useSelector((state) => state?.auth?.token);
    const [user, setUser] = useState({});
    const [selectedFile, setSelectedFile] = useState({
        file: "",
        filepreview: null,
    });

    const initialState = {
        image: "",
        name: "",
        phone: "",
        email: "",
        recoveryEmail: "",
        address: "",
        fa: false,
    };
    const [updateloading, setUpdateLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    // 
    const onClose = () => {
        setOpenEdit(false);
    };

    const handleImageChange = (event) => {
        if (event?.target?.files[0]) {
            setSelectedFile({
                ...selectedFile,
                file: event.target.files[0],
                filepreview: URL.createObjectURL(event?.target?.files[0]),
            });
        };
    }

    const GetUserProfile = useCallback(async () => {
        try {
            const response = await axios.get("user/loggeduser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            const userData = response.data.user;

            setUser(userData);

            setSelectedFile({
                ...selectedFile,
                filepreview: userData.image
            })
            setFormData({
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                recoveryEmail: userData.recoveryEmail,
                address: userData.address,
                fa: userData.fa === "true",
                image: userData.image
            });


        } catch (err) {
            console.error(err.response);
        }
        finally {
            setUpdateLoading(false);
        }
    }, [token, selectedFile]);

    useEffect(() => {
        GetUserProfile();
    }, [GetUserProfile]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setUpdateLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("recoveryEmail", formData.recoveryEmail);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("fa", formData.fa);
        if (selectedFile.file) {
            formDataToSend.append("image", selectedFile.file);
        }

        try {
            const response = await axios.put('user/update-user-profile', formDataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response?.data?.status === 'success') {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('success');
                setTimeout(() => {
                    setOpenEdit(false);
                    setUpdateLoading(false);
                    onProfileUpdate();
                }, 2000);
            }
        } catch (error) {
            setAlertMessage(error?.response?.data?.message);
            setAlertSeverity('error');
            setUpdateLoading(false);
        }
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };

    const isFormValid = formData.name && formData.phone && formData.address && formData.recoveryEmail;

    return (
        <div>
            {openEdit &&
                <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={openEdit} onClose={onClose} closeIcon={null}>
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between border-b pb-[20px]">
                            <h2 className='text-dark font-bold my-auto text-[18px]'>Edit Profile</h2>
                            <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flex-grow overflow-auto">
                                <div className="mt-[20px]">
                                    <div className="my-5 relative">


                                        <Box mt={2} textAlign="center">
                                            {selectedFile.filepreview ? (
                                                <img
                                                    src={selectedFile.filepreview}
                                                    alt="Selected"
                                                    className='w-full h-[150px] rounded-[10px] object-cover border-[1px] border-yellow1' />
                                            ) : (
                                                user?.image ? (
                                                    <img
                                                        src={user?.image}
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

                                        <div className={`mt-5 ${selectedFile?.file ? "absolute top-[2.3rem] left-[40%]" : ""}`}>
                                            <Button component="label" className=''>
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

                                    <div className="mb-5 mt-0">
                                        <small className='text-lightGray'>Update profile Image </small>
                                    </div>
                                    <div className="">
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
                                            defaultValue={user?.name}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    name: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Phone"
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
                                            defaultValue={user?.phone}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    phone: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <TextField
                                            disabled
                                            id="outlined-required"
                                            label="Email"
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
                                            defaultValue={user?.email}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    email: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Recovery Email"
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
                                            defaultValue={user?.recoveryEmail}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    recoveryEmail: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Address"
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
                                            defaultValue={user?.address}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    address: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    defaultChecked={user?.fa === "true"}
                                                    onChange={(event) =>
                                                        setFormData({
                                                            ...formData,
                                                            fa: event.target.checked ? "true" : "false",
                                                        })
                                                    }
                                                />
                                            }
                                            label="2 Factor Authentication"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="my-5 flex gap-5 w-full">
                                <button
                                    type='submit'
                                    className={`Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                    disabled={!isFormValid || updateloading}
                                >
                                    {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Update'}
                                </button>
                            </div>
                        </form>

                    </div>
                </Drawer>
            }
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

export default EditProfile;

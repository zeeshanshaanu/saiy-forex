import { Drawer } from 'antd';
import React, { useState, useEffect } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, CircularProgress, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import SimpleAlert from '../../components/Alert-notification/Alert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Autocomplete from '@mui/material/Autocomplete';


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

const status = [
    { label: 'admin' },
    { label: 'investor' },
    { label: 'main associate' },
    { label: 'sub associate' },
];

const CreateUser = ({ openEdit, setOpenEdit, onlistUpdate }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const token = useSelector((state) => state?.auth?.token);
    // 
    const [user, setUser] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [selectedFile, setSelectedFile] = useState({
        file: "",
        filepreview: null,
    });

    const initialState = {
        image: "",
        name: "",
        email: "",
        recoveryEmail: "",
        password: "",
        confirm_password: "",
        phone: "",
        address: "",
        status: "",
        fa: false
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
    // 

    // const GetUserProfile = async () => {
    //     try {
    //         const response = await axios.get("user/loggeduser", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             withCredentials: true
    //         });
    //         const userData = response.data.user;

    //         setUser(userData);

    //         setSelectedFile({
    //             ...selectedFile,
    //             filepreview: userData.image
    //         })
    //         setFormData({
    //             name: userData.name,
    //             phone: userData.phone,
    //             email: userData.email,
    //             recoveryEmail: userData.recoveryEmail,
    //             address: userData.address,
    //             fa: userData.fa === "true",
    //             image: userData.image
    //         });


    //     } catch (err) {
    //         console.error(err.response);
    //     }
    // };

    // useEffect(() => {
    //     GetUserProfile();
    // }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setUpdateLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("image", selectedFile.file);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("recoveryEmail", formData.recoveryEmail);
        formDataToSend.append("password", formData.password);
        formDataToSend.append("confirm_password", formData.confirm_password);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("status", formData.status);
        formDataToSend.append("fa", formData.fa);

        console.log("send data to api--->>>", formData);
        try {
            const response = await axios.post('user/register', formDataToSend);

            if (response?.data?.status === 'success') {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('success');

                setTimeout(() => {
                    setOpenEdit(false);
                    setUpdateLoading(false);
                    onlistUpdate();
                    setFormData(" ");
                    setSelectedFile(" ");
                }, 2000);

            } else {
                console.log(response?.data);

                setAlertMessage(response?.data?.message);
                setAlertSeverity('error');
                setUpdateLoading(false);
            }
        } catch (error) {
            console.log(error);

            setAlertMessage("Failed to update profile");
            setAlertSeverity("error");
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
                            <h2 className='text-dark font-bold my-auto text-[18px]'>Create User</h2>
                            <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flex-grow overflow-auto">
                                <div className="mt-[20px]">
                                    {/* image */}
                                    <div>
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
                                    </div>

                                    {/* name */}
                                    <div>
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
                                            defaultValue={formData?.email}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    email: event.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* recoveryEmail */}
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
                                            defaultValue={formData?.recoveryEmail}

                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    recoveryEmail: event.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* password */}
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

                                    {/* confirm-password */}
                                    <div className="relative mt-[30px] w-full">
                                        <TextField
                                            type={passwordVisible ? "text" : "password"}
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
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        {passwordVisible ? <RemoveRedEyeIcon className="text-lightGray w-[15px] h-[15px]" /> : <VisibilityOffIcon className="text-lightGray w-[15px] h-[15px]" />}
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

                                    {/* phone */}
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
                                            defaultValue={formData?.phone}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    phone: event.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* address */}
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
                                            defaultValue={formData?.address}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    address: event.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    {/* status */}
                                    <div className="mt-5 w-full">
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={status}
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
                                            defaultValue={formData?.status}
                                            onChange={(event, value) =>
                                                setFormData({
                                                    ...formData,
                                                    status: value?.label || '',
                                                })
                                            }
                                        />
                                    </div>

                                    {/* FA */}
                                    <div className="mt-5">
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    defaultChecked={formData?.fa === "true"}
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
                                    {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Create'}
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

export default CreateUser;

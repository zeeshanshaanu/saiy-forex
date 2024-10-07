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
import { updateProfile } from '../../store/ProfileSetting/profile';
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
    image: "",
    name: "",
    phone: "",
    email: "",
    recoveryEmail: "",
    address: "",
    fa: false,
};

const EditProfile = ({ openEdit, setOpenEdit, onProfileUpdate }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const token = useSelector((state) => state?.auth?.token);
    // 
    const [user, setUser] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    const [loading, setLoading] = useState(false);
    const [updateloading, setUpdateLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);

    console.log(selectedImage);


    // 
    const onClose = () => {
        setOpenEdit(false);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    // 

    const GetUserProfile = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/loggeduser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            const userData = response.data.user;

            setUser(userData);
            setSelectedImage(userData.image)
            setFormData({
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                recoveryEmail: userData.recoveryEmail,
                address: userData.address,
                fa: userData.fa === "true",
                image: userData.image
            });
            setLoading(false)


        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetUserProfile();
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        setUpdateLoading(true);
        dispatch(updateProfile(formData)).then((data) => {

            if (data?.payload?.status === 'success') {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity(data?.payload?.status);
                setTimeout(() => {
                    setOpenEdit(false);
                    setUpdateLoading(false);
                    onProfileUpdate();
                }, 2000);
            } else {
                setAlertMessage(data?.payload?.message);
                setAlertSeverity("error");
                setUpdateLoading(false);
            }
        });
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
                                    <div className="my-5">

                                        {selectedImage && (
                                            <Box mt={2} textAlign="center">
                                                <img
                                                    src={selectedImage}
                                                    alt="Selected"
                                                    className='w-full h-[200px] rounded-[10px] object-cover border-[1px] border-yellow1'
                                                />
                                            </Box>
                                        )}
                                    </div>
                                    <div className={`mt-5 ${selectedImage ? "absolute top-[8rem] left-[8rem]" : ""}`}>
                                        <Button component="label" className=''>
                                            <CameraOutlined className='text-[100px] text-dark' />
                                            <input
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </Button>
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
                                <div className="my-auto w-2/4">

                                    <button
                                        type='submit'
                                        className={`Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                        disabled={!isFormValid || updateloading}
                                    >
                                        {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Update'}
                                    </button>
                                </div>
                                <div className="my-auto w-2/4">
                                    <button onClick={onClose}
                                        className="Login_Button py-[15px] px-[30px] text-center bg-white text-dark w-full rounded-[10px] border border-lightGray">
                                        Cancel
                                    </button>
                                </div>
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

import { Drawer } from 'antd';
import React, { useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import { CameraOutlined } from '@ant-design/icons';

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

const EditProfile = ({ openEdit, setOpenEdit }) => {
    const classes = useStyles();
    const onClose = () => {
        setOpenEdit(false);
    };

    // 
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // 

    return (
        <>
            {openEdit &&
                <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={openEdit} onClose={onClose} closeIcon={null}>
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between border-b pb-[20px]">
                            <h2 className='text-dark font-bold my-auto text-[18px]'>Edit Profile</h2>
                            <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                        </div>
                        <div className="flex-grow overflow-auto">
                            <div className="mt-[20px]">
                                <div className="my-5">

                                    {selectedImage && (
                                        <Box mt={2} textAlign="center">
                                            <img
                                                src={selectedImage}
                                                alt="Selected"
                                                className='w-[100px] h-[100px] rounded-full'
                                            />
                                        </Box>
                                    )}
                                </div>
                                <div className={`mt-5 ${selectedImage ? "absolute top-[7rem] left-[2.5rem]" : ""}`}>
                                    <Button component="label" className=''>
                                        <CameraOutlined className='text-[20px] text-yellow1' />
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
                                    />
                                </div>
                                <div className="mt-5">
                                    <TextField
                                        required
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
                                    />
                                </div>
                                <div className="mt-5">
                                    <FormControlLabel control={<Switch defaultChecked />} label="2 Factor Authentication" />
                                </div>
                            </div>
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
            }
        </>
    );
}

export default EditProfile;

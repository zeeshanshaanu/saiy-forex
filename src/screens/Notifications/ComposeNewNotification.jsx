import { Divider, Drawer } from 'antd';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import PDFicon from "../../assets/Icons/PDFicon.svg";
import { makeStyles } from '@mui/styles';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react';
import { TextField, Box, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

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


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const top100Films = [
    { label: 'The Shawshank Redemption' },
    { label: 'The Godfather' },
    { label: 'The Godfather: Part II' },
    { label: 'The Dark Knight' },
];

const ComposeNewNotification = ({ open, setOpen }) => {
    const classes = useStyles();
    const onClose = () => {
        setOpen(false);
    };

    const [pdfFiles, setPdfFiles] = useState([]);

    const handlePdfChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFiles((prevFiles) => [...prevFiles, file]);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };
    const handleRemovePdf = (index) => {
        setPdfFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <Drawer className="w-[600px] rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between border-b pb-[20px]">
                    <h2 className='text-dark font-bold my-auto text-[18px]'>Compose New Notification</h2>
                    <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                </div>
                <div className="flex-grow overflow-auto">
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-[20px]">
                            <div className="mt-5 w-full">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params) => <TextField {...params} label="Portfolio" />}
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
                            {/*  */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Subject"
                                    placeholder='Robotics & Autonomous Systems'
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
                            {/*  */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Content"
                                    placeholder='Write Something...'
                                    multiline
                                    rows={4}
                                    // defaultValue="Default Value"
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
                                {pdfFiles.length > 0 && (
                                    <div>
                                        {pdfFiles.map((file, index) => (
                                            <div key={index} className="my-5 border-dashed border-lightGray border-[1px] py-3 px-4 bg-[#FAFCFE] rounded-[10px]">
                                                <div className="flex justify-between">
                                                    <div className="my-auto">
                                                        <div className="flex gap-2">
                                                            <div className="">
                                                                <img src={PDFicon} alt={PDFicon} className='w-[50px] h-[50px]' />
                                                            </div>
                                                            <div className="">
                                                                <h6 className="text-[16px] text-dark">{file.name}</h6>
                                                                <h6 className="text-[16px] text-lightGray">200 KB</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="my-auto cursor-pointer" onClick={() => handleRemovePdf(index)}><CloseOutlined /></div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                )}


                                {pdfFiles.length > 2 ?
                                    null :
                                    <Button
                                        style={{ color: "black", border: "1px solid #1A1A1A", borderRadius: "10px", textTransform: "capitalize" }}
                                        className='bg-white text-dark border py-[12px] px-[16px]'
                                        component="label">
                                        <PlusOutlined className='text-black ' />&nbsp;Upload Attachment
                                        <input
                                            type="file"
                                            hidden
                                            accept="application/pdf"
                                            onChange={handlePdfChange}
                                        />
                                    </Button>
                                }
                            </div>

                        </div>
                    </Box>
                </div>
                <div className="p-4">
                    <button className="Login_Button py-[15px] text-center bg-dark text-white w-full rounded-[10px]">
                        Send
                    </button>
                </div>
            </div>
        </Drawer>
    );
}

export default ComposeNewNotification;

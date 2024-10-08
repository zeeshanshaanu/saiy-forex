import { Drawer } from 'antd';
import React, { useState, useEffect } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { Box, CircularProgress, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import SimpleAlert from '../../components/Alert-notification/Alert';
import PDFicon from "../../assets/Icons/PDFicon.svg";
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { createInvestor } from '../../store/Investors/Investor';

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

const AddInvestor = ({ openEdit, setOpenEdit, onlistUpdate }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const token = useSelector((state) => state?.auth?.token);
    // 
    const [imageurl, setImageurl] = useState("");

    const initialState = {
        image: imageurl,
        name: "",
        phone: "",
        email: "",
        address: "",
        iban: "",
        documents: []
    };

    const [updateloading, setUpdateLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [pdfFiles, setPdfFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState({
        file: "",
        filepreview: null,
    });

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

    const uploadDocs = async (updatedFormDataImage) => {
        const FormdataDocs = new FormData();
        pdfFiles.forEach((file) => {
            FormdataDocs.append("documents", file);
        });

        try {
            const response = await axios.post("/investor/upload-document", FormdataDocs, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.status === "success") {
                const uploadedDocsUrls = response.data.documentUrls;

                const documents = pdfFiles.map((file, index) => ({
                    fileName: file.name,
                    fileUrl: uploadedDocsUrls[index]
                }));

                const updatedFormData = {
                    ...formData,
                    documents,
                    image: updatedFormDataImage
                };
                dispatch(createInvestor(updatedFormData)).then((data) => {
                    if (data?.payload?.status === 'success') {
                        setAlertMessage(data?.payload?.message);
                        setAlertSeverity(data?.payload?.status);
                        setTimeout(() => {
                            setOpenEdit(false);
                            setUpdateLoading(false);
                            onlistUpdate();
                            setFormData("")
                        }, 2000);
                    } else {
                        setAlertMessage(data?.payload?.message);
                        setAlertSeverity("error");
                        setUpdateLoading(false);
                    }
                });
            }
            console.log("Documents uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading documents:", error);
        }
    };

    // Image upload function
    const CreateInvestorWithImage = async () => {
        setUpdateLoading(true);
        const Formdata = new FormData();
        Formdata.append("image", selectedFile?.file);
        const response = await axios.post("investor/upload-image", Formdata, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.data.status === "success") {
            const uploadedImageUrl = response?.data.imageUrl;
            setImageurl(uploadedImageUrl);
            const updatedFormDataImage = { ...formData, image: uploadedImageUrl };

            if (pdfFiles.length > 0) {
                uploadDocs(uploadedImageUrl);
            } else {
                dispatch(createInvestor(updatedFormDataImage)).then((data) => {
                    if (data?.payload?.status === 'success') {
                        setAlertMessage(data?.payload?.message);
                        setAlertSeverity(data?.payload?.status);
                        setTimeout(() => {
                            setOpenEdit(false);
                            setUpdateLoading(false);
                            onlistUpdate();
                            setFormData("")
                        }, 2000);
                    } else {
                        setAlertMessage(data?.payload?.message);
                        setAlertSeverity("error");
                        setUpdateLoading(false);
                    }
                });
            }


        } else {
            console.log(response.data.message);
            setUpdateLoading(false);
        }


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        CreateInvestorWithImage();
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };

    const isFormValid = formData.name && formData.phone && formData.email && formData.address && formData.iban && selectedFile.filepreview;

    return (
        <div>
            {openEdit &&
                <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={openEdit} onClose={onClose} closeIcon={null}>
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between border-b pb-[20px]">
                            <h2 className='text-dark font-bold my-auto text-[18px]'>Add investor</h2>
                            <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flex-grow overflow-auto">
                                <div className="mt-[20px]">
                                    <div className="my-5 relative">

                                        {selectedFile.filepreview &&
                                            <Box mt={2} textAlign="center">
                                                <img
                                                    src={selectedFile.filepreview || selectedFile.file}
                                                    alt="Selected"
                                                    className='w-full h-[150px] rounded-[10px] object-cover border-[1px] border-yellow1'
                                                />
                                            </Box>
                                        }
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

                                    <div className="">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Name"
                                            placeholder='Ex: John'
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
                                            value={formData?.name}
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
                                            placeholder='Ex: +71 001 001 001'
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
                                            value={formData?.phone}
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
                                            required
                                            id="outlined-required"
                                            label="Email"
                                            placeholder='Ex: john.doe05@gmail.com'
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
                                            value={formData?.email}
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
                                            label="Address"
                                            placeholder='Ex: UK london'
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
                                            value={formData?.address}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    address: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="IBAN"
                                            placeholder='Ex: DE75500105171813784773'
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
                                            value={formData?.iban}
                                            onChange={(event) =>
                                                setFormData({
                                                    ...formData,
                                                    iban: event.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    {/* DOCUMENTS */}
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
                            </div>
                            <div className="my-5 flex gap-5 w-full">
                                <div className="my-auto w-2/4">

                                    <button
                                        type='submit'
                                        className={`Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                        disabled={!isFormValid || updateloading}
                                    >
                                        {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Create'}
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

export default AddInvestor;

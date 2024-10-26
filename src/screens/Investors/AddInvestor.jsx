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
import { useNavigate } from 'react-router-dom';

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

const AddInvestor = ({ openEdit, setOpenEdit, onlistUpdate, InvestorID }) => {
    console.log(InvestorID);

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const token = useSelector((state) => state?.auth?.token);
    // 
    const initialState = {
        image: "",
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
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState({
        file: "",
        filepreview: null,
    });
    console.log("pdfFiles--->>>>", pdfFiles);
    const onClose = () => {
        setOpenEdit(false);
    };

    const GetUserProfile = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/investor/${InvestorID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setSelectedFile({
                ...selectedFile,
                filepreview: response?.data?.data?.image
            })
            setFormData({
                name: response?.data?.data?.name,
                phone: response?.data?.data?.phone,
                email: response?.data?.data?.email,
                iban: response?.data?.data?.iban,
                address: response?.data?.data?.address,
                image: response?.data?.data?.image,
                documents: response?.data?.data?.documents
            });

            setLoading(false)
        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetUserProfile();
    }, [InvestorID]);

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
            setPdfFiles((prevFiles) => {
                // Update formData.documents with the new file
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    documents: [...prevFormData.documents, file],
                }));
                return [...prevFiles, file];
            });

        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    const handleRemoveDoc = (index) => {
        setFormData((prevInvestor) => {
            const updatedDocuments = [...prevInvestor.documents];
            updatedDocuments.splice(index, 1);
            return {
                ...prevInvestor,
                documents: updatedDocuments,
            };
        });
        setPdfFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleRemovePdf = (index) => {
        setPdfFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUpdateLoading(true);
        const formDataToSend = new FormData();
        formDataToSend.append("image", selectedFile.file);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("iban", formData.iban);
        pdfFiles.forEach((file) => {
            formDataToSend.append("documents", file);
        });

        try {
            let response;
            if (!InvestorID) {
                response = await axios.post('investor', formDataToSend, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                response = await axios.put(`investor/${InvestorID}`, formDataToSend, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            if (response?.data?.status === 'success') {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('success');
                setTimeout(() => {
                    setOpenEdit(false);
                    setUpdateLoading(false);
                    {
                        InvestorID ?
                            navigate("/Investors") :
                            onlistUpdate();
                    }
                }, 2000);
            } else {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('error');
                setUpdateLoading(false);
            }
        } catch (error) {
            setAlertMessage("Failed to update profile");
            setAlertSeverity("error");
            setUpdateLoading(false);
        }
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };

    const isFormValid = formData.name && formData.phone && formData.email && formData.address && formData.iban && selectedFile.filepreview || formData.image;

    return (
        <div>
            {openEdit &&
                <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={openEdit} onClose={onClose} closeIcon={null}>
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between border-b pb-[20px]">
                            <h2 className='text-dark font-bold my-auto text-[18px]'>{InvestorID ? "Edit investor" : "Add investor"}</h2>
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
                                            defaultValue={formData?.name}
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

                                            defaultValue={formData?.phone}
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
                                            // disabled={investor?.email}
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
                                            defaultValue={formData?.email}
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
                                            defaultValue={formData?.address}

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
                                            defaultValue={formData?.iban}
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
                                        {(pdfFiles.length > 0 || formData?.documents?.length > 0) && (
                                            <div>
                                                {pdfFiles.length > 0 ? (
                                                    pdfFiles.map((file, index) => (
                                                        <div key={index} className="my-5 border-dashed border-lightGray border-[1px] py-3 px-4 bg-[#FAFCFE] rounded-[10px]">
                                                            <div className="flex justify-between">
                                                                <div className="my-auto">
                                                                    <div className="flex gap-2">
                                                                        <div>
                                                                            <img src={PDFicon} alt="PDF Icon" className="w-[50px] h-[50px]" />
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="text-[16px] text-dark">{file.name}</h6>
                                                                            <h6 className="text-[16px] text-lightGray">200 KB</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="my-auto cursor-pointer" onClick={() => handleRemovePdf(index)}>
                                                                    <CloseOutlined />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    // Display investor documents if pdfFiles are not available but investor's documents are present
                                                    formData?.documents.map((doc, index) => (
                                                        <div key={index} className="my-5 border-dashed border-lightGray border-[1px] py-3 px-4 bg-[#FAFCFE] rounded-[10px]">
                                                            <div className="flex justify-between">
                                                                <div className="my-auto">
                                                                    <div className="flex gap-2">
                                                                        <div>
                                                                            <img src={PDFicon} alt="PDF Icon" className="w-[50px] h-[50px]" />
                                                                        </div>
                                                                        <div>
                                                                            <h6 className="text-[16px] text-dark">{doc.fileName}</h6>
                                                                            <h6 className="text-[16px] text-lightGray">200 KB</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="my-auto cursor-pointer" onClick={() => handleRemoveDoc(index)}>
                                                                    <CloseOutlined />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
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

                            <div className="my-5">
                                <button
                                    type='submit'
                                    className={`Login_Button py-[15px] text-center w-full rounded-[10px] ${isFormValid ? 'bg-dark text-white' : 'bg-gray-400 text-gray-700'}`}
                                    disabled={!isFormValid || updateloading}
                                >
                                    {updateloading ? <CircularProgress size={20} color="inherit" /> : 'Submit'}
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

export default AddInvestor;

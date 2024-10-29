import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import CloseIcon from "../../assets/Icons/DashboardCards/CloseIcon.svg";
import { CircularProgress, TextField, Button, Autocomplete } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import SimpleAlert from '../../components/Alert-notification/Alert';
import axios from 'axios';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import PDFicon from "../../assets/Icons/PDFicon.svg";

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
    portfolio: "",
    subject: "",
    content: "",
    documents: []
};

const ComposeNewNotification = ({ open, setOpen, onlistUpdate, AssociateID }) => {
    const classes = useStyles();
    const token = useSelector((state) => state?.auth?.token);
    const [updateloading, setUpdateLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Investors, setInvestors] = useState([]);
    const [pdfFiles, setPdfFiles] = useState([]);
    console.log(loading);
    const GetData = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/portfolio", {
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
    useEffect(() => {
        GetData();
    }, []);

    const handlePdfChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFiles((prevFiles) => {
                // Update formData.documents with the new file
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    documents: [...prevFormData?.documents, file],
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
        const formPayload = new FormData();
        formPayload.append('portfolio', JSON.stringify(formData.portfolio));
        formPayload.append('subject', formData.subject);
        formPayload.append('content', formData.content);

        pdfFiles.forEach((file) => {
            formPayload.append("documents", file);
        });
        try {

            let response;
            if (!AssociateID) {
                response = await axios.post('notification', formPayload, {
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
            setFormData(initialState)

            if (response?.data?.status === 'success') {
                setAlertMessage(response?.data?.message);
                setAlertSeverity('success');
                setTimeout(() => {
                    setOpen(false);
                    setUpdateLoading(false);
                    onlistUpdate();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setAlertMessage(error?.response?.data?.message || "Failed to create new notification");
            setAlertSeverity("error");
            setUpdateLoading(false);

        }
    };


    const handleChange = (event, value) => {
        const selectedInvestor = Investors?.find((investor) => investor?.name === value);

        setFormData((prevFormData) => ({
            ...prevFormData,
            portfolio: selectedInvestor
                ? {
                    id: selectedInvestor._id,
                    image: selectedInvestor.image,
                    name: selectedInvestor.name,
                    min_investment: selectedInvestor.min_investment,
                    max_investment: selectedInvestor.max_investment,
                    withdrawal_Period: selectedInvestor.withdrawal_Period,
                }
                : null,
        }));
    };

    const onClose = () => {
        setOpen(false);
    };
    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };
    const isFormValid = formData?.portfolio && formData?.subject && formData?.content

    return (
        <div>
            <Drawer className="p-0 m-0 rounded-l-[10px]" header={false} open={open} onClose={onClose} closeIcon={null}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between border-b pb-[20px]">
                        <h2 className='text-dark font-bold my-auto text-[18px]'>{AssociateID ? "Edit associate" : "Compose notification"}</h2>
                        <img src={CloseIcon} alt="Close" onClick={onClose} className='my-auto cursor-pointer' />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex-grow overflow-auto py-4">

                            {/* portfolio */}
                            <div className="mt-5 w-full">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={Investors?.map((investor) => investor?.name) || []}
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
                                    defaultValue={formData?.portfolio?.name || null}
                                    onChange={handleChange}

                                />
                            </div>

                            {/* Subject */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Subject"
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
                                    defaultValue={formData?.subject}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            subject: event.target.value,
                                        })
                                    }
                                />

                            </div>

                            {/* Content */}
                            <div className="mt-5">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Content"
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
                                    defaultValue={formData?.content}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            content: event.target.value,
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

export default ComposeNewNotification;

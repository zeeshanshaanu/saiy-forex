import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Lottie from "react-lottie";
import animationData from "../../assets/lottiefiles/deleteLottie.json";
import axios from 'axios';
import { useSelector } from 'react-redux';
import SimpleAlert from '../Alert-notification/Alert';
import { CircularProgress } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function CustomizedDialogs({ deleteID, onlistUpdate, PortfolioDeleteID }) {
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const token = useSelector((state) => state?.auth?.token);

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };

    const handleDelete = async () => {
        setLoading(true)
        try {
            let response;

            if (deleteID) {
                response = await axios.delete(`/investor/${deleteID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true
                });
            } else {
                response = await axios.delete(`/portfolio/${PortfolioDeleteID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true
                });
            }

            // 
            // 
            // 
            if (response?.data?.status === 'success') {
                setTimeout(() => {
                    setAlertMessage(response?.data?.message);
                    setAlertSeverity(response?.data?.status);
                    setOpen(false);
                    setLoading(false);
                    onlistUpdate();
                }, 1000);
            } else {
                setAlertMessage(response?.data?.message);
                setAlertSeverity("error");
                setLoading(false);
            }
        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    return (
        <React.Fragment>
            <DeleteIcon onClick={handleClickOpen} />
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className="">
                    <CancelOutlinedIcon className='flex justify-end cursor-pointer text-red-400 flex float-right m-2' onClick={handleClose} />
                    <div className="px-10 py-5 text-center mt-5">

                        <div className="">
                            <Lottie
                                className=""
                                options={defaultOptions}
                                width={150}
                                height={100}
                            />
                            <h2 className="mt-4 text-[24px] font-semibold">Are you sure?</h2>
                            <p className="my-4 text-[14px] text-dark1">Do you really want to delete these records? <br /> This process cannot be undone.</p>
                        </div>

                        <div className="mt-5 flex justify-between gap-x-5">
                            <div className="cursor-pointer">
                                <button onClick={handleClose}
                                    className="font-semibold py-[8px] px-[30px] text-center bg-white 
                                        text-dark w-full rounded-[10px] border border-lightGray">
                                    Cancel
                                </button>
                            </div>
                            <div className="cursor-pointer">
                                <button
                                    disabled={loading}
                                    onClick={handleDelete}
                                    className="font-semibold py-[8px] px-[30px] text-center bg-red-400 
                                            text-white w-full rounded-[10px] border border-red-400">
                                    {loading ? <CircularProgress size={20} color="inherit" /> : 'Delete'}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </BootstrapDialog>
            {alertMessage && (
                <SimpleAlert
                    message={alertMessage}
                    severity={alertSeverity}
                    onClose={closeAlert}
                />
            )}
        </React.Fragment>
    );
}

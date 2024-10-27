import React, { useEffect, useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Button } from 'antd'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DownloadOutlined, PlusOutlined, EyeOutlined, SettingOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Logo1 from "../../assets/images/Logo1.svg"
import { useNavigate } from 'react-router-dom';
import CreateUser from './CreateUser.jsx'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import NoDataFound from '../../components/NoData/NodataFound'
import Lottie from 'react-lottie';
import { CircularProgress } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import animationData from "../../assets/lottiefiles/deleteLottie.json";
import SimpleAlert from '../../components/Alert-notification/Alert.js';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const UserManagement = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Users, setUsers] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [Deleteopen, setDeleteOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [Deleteloading, setDeleteLoading] = useState(false);
    const [userID, setUserID] = useState("");
    const token = useSelector((state) => state?.auth?.token);
    const open = Boolean(anchorEl);
    const GetData = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/user/all-Users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            console.warn(response.data?.data);
            setUsers(response?.data?.data);

            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetData();
    }, []);

    const showDrawer = () => {
        setOpenEdit(true);
    };

    const RefreshInvestorlist = () => {
        GetData();
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setDeleteOpen(true);
    };

    const handledeleteClose = () => {
        setDeleteOpen(false);
    };

    const closeAlert = () => {
        setAlertMessage(null);
        setAlertSeverity(null);
    };

    const handleDelete = async () => {
        setDeleteLoading(true)
        try {

            const response = await axios.delete(`/user/delete-user/${userID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            console.log(response?.data);

            if (response?.data?.status === 'success') {
                setTimeout(() => {
                    setAlertMessage(response?.data?.message);
                    setAlertSeverity(response?.data?.status);
                    setDeleteOpen(false);
                    setDeleteLoading(false);
                    RefreshInvestorlist();
                }, 1000);
            } else {
                setAlertMessage(response?.data?.message);
                setAlertSeverity("error");
                setDeleteLoading(false);
            }

        } catch (err) {
            console.error(err.response?.data);
            setDeleteLoading(false)
        }
    };

    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className=" max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="mx-5 mt-5 lg:flex md:flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">User Management</h1>
                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-3">
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-transparent text-dark h-[44px] rounded-[10px] border border-lightGray'
                                // onClick={showDrawer}
                                icon={<DownloadOutlined className='text-dark' />}>Export CSV
                            </Button>
                        </div>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<PlusOutlined className='text-white' />}>Add New
                            </Button>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="mx-5 overflow-x-auto mt-4">
                    <table className="min-w-full bg-white rounded-[10px] my-4">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">User</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Email</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Phone</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Address</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Status</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Created&nbsp;on</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="p-5">
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="text-center pt-20"><Loader /></td>
                                </tr>
                            ) : Users?.length > 0 ? (
                                Users.map((item, index) => (
                                    <>
                                        <br />
                                        <tr key={index}>
                                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                                <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                                <span className="my-auto">{item?.name || "N/A"}</span>
                                            </td>
                                            <td className="py-1 px-4 text-[16px] text-dark">{item?.email || "N/A"}</td>
                                            <td className="py-1 px-4 text-[16px] text-dark">{item?.phone || "N/A"}</td>
                                            <td className="py-1 px-4 text-[16px] text-dark">{item?.address || "N/A"}</td>
                                            <td className={`py-0 px-4 text-[16px] rounded-full text-center font-semibold 
                                                        ${item?.status === "main associate" ? "text-textgreen bg-lightgreen" :
                                                    item?.status === "investor" ? "text-textRed bg-lightRed" :
                                                        item?.status === "admin" ? "text-white bg-lightGray" :
                                                            item?.status === "sub associate" ? "text-textYellow bg-lightYellow" : null}                                 
                                                                                 `}>

                                                {item?.status || "N/A"}</td>
                                            <td className="py-1 px-4 text-[16px] text-dark">{item?.creationOn?.slice(0, 10) || "N/A"}</td>

                                            <td className="py-2 px-4 text-[16px] text-dark">

                                                <span className="cursor-pointer" onClick={handleClick}>
                                                    <MoreVertIcon />
                                                </span>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                        'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    <MenuItem>
                                                        <span className='cursor-pointer my-auto hover:text-yellow1'><EyeOutlined /> &nbsp;View Details
                                                        </span>
                                                    </MenuItem>

                                                    <MenuItem>
                                                        <span className='cursor-pointer my-auto hover:text-yellow1'
                                                            onClick={() => {
                                                                navigate(`/UserPermissions/${item?._id}`)
                                                            }}><SettingOutlined /> &nbsp;Change Permissions
                                                        </span>
                                                    </MenuItem>

                                                    <MenuItem>
                                                        <span className='cursor-pointer my-auto hover:text-yellow1'><CloseOutlined /> &nbsp;Deactivate Account
                                                        </span>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <span className='cursor-pointer my-auto hover:text-yellow1'

                                                            onClick={() => {
                                                                setUserID(item?._id);
                                                                handleClickOpen();
                                                            }}><DeleteOutlined /> &nbsp;Delete Account
                                                        </span>
                                                    </MenuItem>
                                                </Menu>

                                            </td>

                                        </tr>
                                    </>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center pt-20"><NoDataFound /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <BootstrapDialog
                    onClose={handledeleteClose}
                    aria-labelledby="customized-dialog-title"
                    open={Deleteopen}
                >
                    <div className="">
                        <CancelOutlinedIcon className='flex justify-end cursor-pointer text-red-400 flex float-right m-2' onClick={handleClose} />
                        <div className="px-10 py-5 text-center mt-5">

                            <div>
                                <Lottie
                                    options={defaultOptions}
                                    width={150}
                                    height={100}
                                />
                                <h2 className="mt-4 text-[24px] font-semibold">Are you sure?</h2>
                                <p className="my-4 text-[14px] text-dark1">Do you really want to delete these records? <br /> This process cannot be undone.</p>
                            </div>

                            <div className="mt-5 flex justify-between gap-x-5">
                                <div className="cursor-pointer">
                                    <button onClick={handledeleteClose}
                                        className="font-semibold py-[8px] px-[30px] text-center bg-white 
                                        text-dark w-full rounded-[10px] border border-lightGray">
                                        Cancel
                                    </button>
                                </div>
                                <div className="cursor-pointer">
                                    <button
                                        disabled={Deleteloading}
                                        onClick={handleDelete}
                                        className="font-semibold py-[8px] px-[30px] text-center bg-red-400 
                                            text-white w-full rounded-[10px] border border-red-400">
                                        {Deleteloading ? <CircularProgress size={20} color="inherit" /> : 'Delete'}

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
                <CreateUser openEdit={openEdit} setOpenEdit={setOpenEdit} onlistUpdate={RefreshInvestorlist} />
            </div>
        </div>
    )
}



export default UserManagement

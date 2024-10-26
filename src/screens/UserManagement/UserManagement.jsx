import React, { useEffect, useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Button } from 'antd'
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DownloadOutlined, PlusOutlined, EyeOutlined, SettingOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Logo1 from "../../assets/images/Logo1.svg"
import Dot from "../../assets/Icons/Dot.svg"
import { useNavigate } from 'react-router-dom';
import CreateUser from './CreateUser.jsx'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import NoDataFound from '../../components/NoData/NodataFound'
import CustomizedDialogs from '../../components/Dialog/Dialog'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const UserManagement = () => {
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Users, setUsers] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const token = useSelector((state) => state?.auth?.token);

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

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const items = [
        {
            label: <span className='hover:text-yellow1'><EyeOutlined /> &nbsp;View Details</span>,
            key: '0',
        },
        {
            label: <span className='hover:text-yellow1' onClick={() => navigate("/UserPermissions")}><SettingOutlined /> &nbsp;Change Permissions</span>,
            key: '1',
        },
        {
            label: <span className='hover:text-yellow1'><CloseOutlined /> &nbsp;Deactivate Account</span>,
            key: '3',
        },
        {
            label: <span className='hover:text-yellow1'>
                <CustomizedDialogs
                    // AssociateID={item?._id}
                    onlistUpdate={RefreshInvestorlist}
                />
            </span>,
            key: '4',
        },
    ];




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
                                                {/* <span className='cursor-pointer my-auto'
                                                    onClick={() => navigate(`/AssociateDetails/${item?._id}`)}><RemoveRedEyeIcon /></span>
                                                <span className='cursor-pointer my-auto'>
                                                    <CustomizedDialogs
                                                        UserID={item?._id}
                                                        onlistUpdate={RefreshInvestorlist}
                                                    />
                                                </span> */}

                                                <div>
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
                                                            <span className='cursor-pointer my-auto hover:text-yellow1'
                                                                onClick={() => navigate(`/UserPermissions/${item?._id}`)}><EyeOutlined /> &nbsp;View Details
                                                            </span>
                                                        </MenuItem>

                                                        <MenuItem>
                                                            <span className='cursor-pointer my-auto hover:text-yellow1'
                                                                onClick={() => navigate(`/UserPermissions/${item?._id}`)}><SettingOutlined /> &nbsp;Change Permissions
                                                            </span>
                                                        </MenuItem>

                                                        <MenuItem>
                                                            <span className='cursor-pointer my-auto hover:text-yellow1'><CloseOutlined /> &nbsp;Deactivate Account
                                                            </span>
                                                        </MenuItem>

                                                        <MenuItem>
                                                            <span className='cursor-pointer my-auto hover:text-yellow1'>
                                                                <CustomizedDialogs
                                                                    UserID={item?._id}
                                                                    onlistUpdate={RefreshInvestorlist}
                                                                />
                                                            </span>
                                                        </MenuItem>

                                                    </Menu>
                                                </div>


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
                <CreateUser openEdit={openEdit} setOpenEdit={setOpenEdit} onlistUpdate={RefreshInvestorlist} />
            </div>
        </div>
    )
}



export default UserManagement

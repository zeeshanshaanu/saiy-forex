import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import searchIcon from "../../assets/Icons/searchIcon.svg";
import "./sidebar.css";
import { useNavigate } from 'react-router-dom';
import LogoutModel from '../../screens/Auth-module/LogoutModel';
import { useSelector } from 'react-redux';
import axios from 'axios';
const { Header } = Layout
// 
// 
// 
const SidebarHeader = () => {
    const token = useSelector((state) => state?.auth?.token);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    const showDrawer = () => {
        setOpen(true);
    };


    const GetUserProfile = useCallback(async () => {
        try {
            const response = await axios.get("user/loggeduser", {
                headers: {
                    Authorization: `Bearer ${token}` || localStorage.getItem('authToken'),
                },
                withCredentials: true
            });
            setUser(response.data.user);
            // setLoading(false)


        } catch (err) {
            console.error(err.response);
        }
    }, [token]);

    useEffect(() => {
        GetUserProfile();
    }, [GetUserProfile]);

    // 
    // 
    const profileMenuItems = [
        {
            label: (
                <span className='flex gap-2' onClick={() => navigate("/Settings")}>
                    <img src={user?.image} alt={user?.image} className='object-cover my-auto w-[25px] h-[25px] rounded-[10px] border-[1px] border-yellow1' />
                    <span className='my-auto'>Profile</span>
                </span>
            ),
            key: '0',
        },
        {
            label: (
                <span onClick={showDrawer}>
                    <LogoutOutlined className='text-[22px]' />&nbsp; Logout
                </span>
            ),
            key: '1',
        },
    ];

    // 
    // 
    return (
        <Header className='bg-transparent px-5 h-[80px] border-b-[1px] border-white'>
            <div className="flex text-white justify-between my-auto">
                <div className="mt-[8px] relative d-none forMobileView">
                    <input
                        type="text"
                        placeholder='Search something...'
                        className="h-[44px] lg:w-[300px] w-auto pl-10 pr-5 text-dark border border-[#F6F8FE] rounded-[10px]"
                    />
                    <img src={searchIcon} alt="searchIcon" className='absolute top-[23px] left-[10px]' />
                </div>
                <div className="mt-[8px]">
                    <div className="flex gap-5">
                        <div className="my-auto">
                            <img src={user?.image} alt="Logo1" className='object-cover w-[40px] h-[40px] rounded-[10px] border' />
                        </div>
                        <div className="my-auto">
                            <h4 className="text-dark text-[16px]">{user?.name}</h4>
                        </div>
                        <Dropdown
                            className='my-auto'
                            overlay={
                                <Menu items={profileMenuItems} />
                            }
                        >
                            <div className='cursor-pointer'>
                                <DownOutlined className='text-[#828EB0] bg-[#F6F8FE] p-2 rounded-full' />
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <LogoutModel open={open} setOpen={setOpen} />

        </Header>
    )
}

export default SidebarHeader

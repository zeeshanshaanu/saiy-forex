import { EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import DummyImg from "../../assets/images/DummyImg1.png"
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


const Settings = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [user, setUser] = useState({});

    const showDrawer = () => {
        setOpen(true);
    };
    const showDrawer2 = () => {
        setOpenEdit(true);
    };
    const token = useSelector((state) => state?.auth?.token);


    const GetUserProfile = async () => {
        setLoading(true)
        try {
            const response = await axios.get("http://localhost:8000/api/user/loggeduser", {
                headers: {
                    Authorization: `Bearer ${token}` || localStorage.getItem('authToken'),
                },
                withCredentials: true
            });
            setUser(response.data.user);
            setLoading(false)


        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetUserProfile();
    }, []);




    return (
        <div className='bg-[#F6F8FE] h-[100vh]'>
            {/* sticky top-0 */}
            <div className="">
                <div className=" bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="mx-5 mt-5 lg:flex md:flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Settings</h1>
                    </div>
                    <div className="Dropdown cursor-pointer my-auto flex gap-2">
                        <div className="my-auto">
                            <Button type="white"
                                className='bg-transparent border border-lightGray text-dark h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<EditOutlined className='text-dark' />}>Change Password
                            </Button>
                        </div>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer2}
                            >Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="mx-5 mt-5 p-5 rounded-[10px] my-auto bg-white drop-shadow-md hover:drop-shadow-xl ">
                    {loading ?
                        <div className="text-center my-10">Loading...</div> :
                        <div className="my-5">
                            <div className="">
                                <img src={user?.image || DummyImg} alt={user?.image || DummyImg} className='w-[100px] h-[100px] rounded-full' />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Name</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.name}</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Phone</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.phone}</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Email</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.email}</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Address</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.address}</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Username</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.name}</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Password</p>
                                    <p className="text-dark text-[16px] mt-[5px]">****123</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">Recovery Email</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.recoveryEmail}</p>
                                </div>
                                {/*  */}
                                <div className="mt-5">
                                    <p className="text-lightGray text-[14px]">2FA</p>
                                    <p className="text-dark text-[16px] mt-[5px]">{user?.fa === "false" ? "NO" : "YES"}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/* ADD DRAWER */}
            <ChangePassword open={open} setOpen={setOpen} />
            <EditProfile openEdit={openEdit} setOpenEdit={setOpenEdit} />
        </div>
    )
}

export default Settings

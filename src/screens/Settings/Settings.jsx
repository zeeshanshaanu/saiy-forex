import { EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import DummyImg from "../../assets/images/DummyImg1.png"
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'


const Settings = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const showDrawer2 = () => {
        setOpenEdit(true);
    };
    return (
        <div>
            {/* sticky top-0 */}
            <div className=" bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="m-5">
                <div className="lg:flex md:flex justify-between ">
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
                <div className="mt-5 p-5 rounded-[10px] my-auto bg-white drop-shadow-md hover:drop-shadow-xl ">
                    <div className="my-5">
                        <div className="">
                            <img src={DummyImg} alt={DummyImg} className='w-[100px] h-[100px] rounded-full' />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Name</p>
                                <p className="text-dark text-[16px] mt-[5px]">DummyXYZ</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Phone</p>
                                <p className="text-dark text-[16px] mt-[5px]">000 147 222</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Email</p>
                                <p className="text-dark text-[16px] mt-[5px]">XYZ123@gmail.com</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Address</p>
                                <p className="text-dark text-[16px] mt-[5px]">Pakistan, USA, XYZ</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Username</p>
                                <p className="text-dark text-[16px] mt-[5px]">DummyXYZ</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Password</p>
                                <p className="text-dark text-[16px] mt-[5px]">****123</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">Recovery Email</p>
                                <p className="text-dark text-[16px] mt-[5px]">XYZ123@gmail.com</p>
                            </div>
                            {/*  */}
                            <div className="mt-5">
                                <p className="text-lightGray text-[14px]">2FA</p>
                                <p className="text-dark text-[16px] mt-[5px]">Yes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ADD DRAWER */}
            <ChangePassword open={open} setOpen={setOpen} />
            <EditProfile openEdit={openEdit} setOpenEdit={setOpenEdit} />
        </div>
    )
}

export default Settings

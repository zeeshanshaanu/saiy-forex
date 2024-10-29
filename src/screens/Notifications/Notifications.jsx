import React, { useCallback, useEffect, useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Button } from 'antd'
import { PaperClipOutlined, PlusOutlined } from '@ant-design/icons'
import ComposeNewNotification from './ComposeNewNotification'
import Logo1 from "../../assets/images/Logo1.svg"
import CustomizedDialogs from '../../components/Dialog/Dialog'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import NoDataFound from '../../components/NoData/NodataFound'
// 
// 
const Notifications = () => {
    const [open, setOpen] = useState(false);
    const token = useSelector((state) => state?.auth?.token);
    const [loading, setLoading] = useState(false);
    const [investor, setInvestor] = useState([]);

    const GetUserProfile = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get("/notification", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setInvestor(response.data.data);
            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
        finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        GetUserProfile();
    }, [GetUserProfile]);

    const showDrawer = () => {
        setOpen(true);
    };
    const RefreshInvestorlist = () => {
        GetUserProfile();
    };

    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className=" max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="mx-5 mt-5 lg:flex md:flex justify-between">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Notifications</h1>
                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-3">

                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<PlusOutlined className='text-white' />}>Compose
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* TABLES */}
            {/*  */}
            {/*  */}
            <div className="mx-5 mt-5 overflow-x-auto">
                <table className="min-w-full bg-white rounded-[10px]">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Portfolio </th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left"> Subject</th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Content</th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Files </th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  */}
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center my-10"><Loader /></td>
                            </tr>
                        ) : investor?.length > 0 ? (
                            investor.map((item, index) => (
                                <tr key={index} className='hover:bg-[#F6F8FE]'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                        <img src={item?.portfolio?.image || Logo1} alt={item?.portfolio?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                        <span className='my-auto'>{item?.portfolio?.name || "N/A"}</span>
                                    </td>
                                    <td className="py-2 px-4 text-[16px] text-dark">{item?.subject || "N/A"}</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">{item?.content || "N/A"}</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">{item?.documents?.length}<PaperClipOutlined /></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">
                                        <span className='cursor-pointer my-auto'>
                                            <CustomizedDialogs
                                                NotificationID={item?._id}
                                                onlistUpdate={RefreshInvestorlist}
                                            />
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center"><NoDataFound /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* ADD DRAWER */}
            <ComposeNewNotification open={open} setOpen={setOpen} onlistUpdate={RefreshInvestorlist} />

        </div>
    )
}

export default Notifications

import React, { useEffect, useState, useCallback } from 'react'
import { Button, Dropdown } from 'antd'
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
// 
import SidebarHeader from '../../components/sidebar/Header'
import TotalAllocated from "../../assets/Icons/DashboardCards/TotalAllocated.svg"
import TotalInvestors from "../../assets/Icons/DashboardCards/TotalInvestors.svg"
import SingleAssociate from "../../assets/Icons/DashboardCards/SingleAssociate.svg"
import Logo1 from "../../assets/images/Logo1.svg"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import NoDataFound from '../../components/NoData/NodataFound';
import AddAssociate from './AddAssociate';
import CustomizedDialogs from '../../components/Dialog/Dialog.js';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const items = [
    {
        label: <span>This Week</span>,
        key: '0',
    },
    {
        label: <span>This Month</span>,
        key: '1',
    },

    {
        label: <span>This Year</span>,
        key: '3',
    },
];
const MainAssociates = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Associate, setAssociate] = useState([]);
    const [TotalAssociate, setTotalAssociate] = useState([]);
    const [TotalSubAssociate, setTotalSubAssociate] = useState([]);
    const token = useSelector((state) => state?.auth?.token);

    const GetData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get("/Associate", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });
            setAssociate(response?.data?.data);

            const mainAssociatesCount = response?.data?.data?.filter(
                (associate) => associate?.level === "main associate"
            )?.length;
            setTotalAssociate(mainAssociatesCount > 0 ? [mainAssociatesCount] : []);

            const SubAssociatesCount = response?.data?.data?.filter(
                (associate) => associate?.level === "sub associate"
            )?.length;
            setTotalSubAssociate(SubAssociatesCount > 0 ? [SubAssociatesCount] : []);
        } catch (err) {
            console.error(err.response);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        GetData();
    }, [GetData]);

    const RefreshInvestorlist = () => {
        GetData();
    };
    const showDrawer = () => {
        setOpen(true);
    };

    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className=" max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="px-5 lg:flex md:flex justify-between mt-5">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Main Associates</h1>
                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-3">
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <p className="border border-lightDray rounded-[10px] py-[10px] px-[20px]" onClick={(e) => e.preventDefault()}>
                                <DownOutlined />&nbsp;This Month
                            </p>
                        </Dropdown>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<PlusOutlined className='text-white' />}>Add New
                            </Button>
                        </div>
                    </div>
                </div>
                {/* CARDS */}
                <div className='px-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={SingleAssociate} alt={SingleAssociate} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Main Associates</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">{TotalAssociate}</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalInvestors} alt={TotalInvestors} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Sub Associates</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">{TotalSubAssociate}</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalAllocated} alt={TotalAllocated} className='mt-2' />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Main AST. Withdrawals</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">13</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalAllocated} alt={TotalAllocated} className='mt-2' />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Sub AST. Withdrawals</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">$10,223</h2>
                    </div>
                </div>
                {/* TABLE AND RIGHT CARD DETAIL */}

                <div className="px-5 grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-5 my-5">
                    <div className='p-5 bg-white rounded-[10px] col-span-12 lg:col-span-8 md:col-span-6'>
                        <div className="flex justify-between">
                            <h5 className="text-[16px] text-dark">Associates</h5>
                            <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                        </div>
                        {/*  */}
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Name</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Email</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Level</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Earned</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Paid Out</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Actions</th>
                                    </tr>
                                </thead>
                                <br />
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="6" className="text-center pt-20"><Loader /></td>
                                        </tr>
                                    ) : Associate?.length > 0 ? (
                                        Associate.map((item, index) => (
                                            <>
                                                <tr key={index} className=''>
                                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                                        <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                                        <span className='my-auto'>{item?.name || "N/A"}</span></td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">{item?.email || "N/A"}</td>
                                                    <td className={`py-0 px-4 text-[16px] rounded-full text-center font-semibold 
                                                        ${item?.level === "main associate" ? "text-textgreen bg-lightgreen" :
                                                            item?.level === "investor" ? "text-textRed bg-lightRed" :
                                                                item?.level === "admin" ? "text-white bg-lightGray" :
                                                                    item?.level === "sub associate" ? "text-textYellow bg-lightYellow" : null}                                 
                                                                                 `}>

                                                        {item?.level || "N/A"}</td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">${item?.earn || "N/A"}</td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">${item?.paid_out || "N/A"}</td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">
                                                        <span className='cursor-pointer my-auto'
                                                            onClick={() => navigate(`/AssociateDetails/${item?._id}`)}><RemoveRedEyeIcon /></span>
                                                        <span className='cursor-pointer my-auto'>
                                                            <CustomizedDialogs
                                                                AssociateID={item?._id}
                                                                onlistUpdate={RefreshInvestorlist}
                                                            />
                                                        </span>
                                                    </td>

                                                </tr>
                                                <br />
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
                    </div>
                    <div className='p-5 bg-white rounded-[10px] col-span-12 lg:col-span-4 md:col-span-6'>
                        <div className="flex justify-between">
                            <h5 className="text-[16px] text-dark">Recent Activities</h5>
                            <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                        </div>
                        {/*  */}
                        <div className="mt-4">
                            <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">Today</p>
                        </div>
                        {/*  */}
                        <div className="mt-4 border-l-2 pl-2 border-yellow1">
                            <h2 className="text-dark text-[16px] ">
                                IP Release Checklists Submission</h2>
                            <div className="flex justify-between mt-1">

                                <div className="">
                                    <h3 className="text-lightGray text-[14px] flex gap-[12px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[16px] h-[16px] cover my-auto' />
                                        Esther Howard</h3>
                                </div>
                                <div className="">
                                    <p className="text-lightGray text-[12px]">4 minutes ago</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 border-l-2 pl-2 border-yellow1">
                            <h2 className="text-dark text-[16px] ">
                                QA Checklists Approval</h2>
                            <div className="flex justify-between mt-1">

                                <div className="">
                                    <h3 className="text-lightGray text-[14px] flex gap-[12px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[16px] h-[16px] cover my-auto' />
                                        Esther Howard</h3>
                                </div>
                                <div className="">
                                    <p className="text-lightGray text-[12px]">4 minutes ago</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4">
                            <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">Yesterday</p>
                        </div>
                        <div className="mt-4 border-l-2 pl-2 border-yellow1">
                            <h2 className="text-dark text-[16px] ">
                                Non Clinical Supply Tracking Submission</h2>
                            <div className="flex justify-between mt-1">

                                <div className="">
                                    <h3 className="text-lightGray text-[14px] flex gap-[12px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[16px] h-[16px] cover my-auto' />
                                        Esther Howard</h3>
                                </div>
                                <div className="">
                                    <p className="text-lightGray text-[12px]">4 minutes ago</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 border-l-2 pl-2 border-yellow1">
                            <h2 className="text-dark text-[16px] ">
                                NHS Approval</h2>
                            <div className="flex justify-between mt-1">

                                <div className="">
                                    <h3 className="text-lightGray text-[14px] flex gap-[12px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[16px] h-[16px] cover my-auto' />
                                        Esther Howard</h3>
                                </div>
                                <div className="">
                                    <p className="text-lightGray text-[12px]">4 minutes ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddAssociate open={open} setOpen={setOpen} onlistUpdate={RefreshInvestorlist} />
        </div>
    )
}

export default MainAssociates

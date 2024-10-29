import React, { useCallback, useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import axios from 'axios';
// 
import Logo1 from "../../assets/images/Logo1.svg"
import Loader from '../../components/Loader/Loader';
import SidebarHeader from '../../components/sidebar/Header';
import NoDataFound from '../../components/NoData/NodataFound';
import TotalAllocated from "../../assets/Icons/DashboardCards/TotalAllocated.svg"
import TotalInvestors from "../../assets/Icons/DashboardCards/TotalInvestors.svg"
import TotalPortfolios from "../../assets/Icons/DashboardCards/TotalPortfolios.svg"
import TotalWithdrawals from "../../assets/Icons/DashboardCards/TotalWithdrawals.svg"

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

const Dashboard = () => {
    const token = useSelector((state) => state?.auth?.token);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);
    // 
    const [portfolio, setPortfolio] = useState([]);
    const [investor, setinvestor] = useState([]);
    const [associate, setassociate] = useState([]);
    const [Withdrawal, setWithdrawal] = useState([]);

    const GetAssociateData = useCallback(async () => {
        setLoading4(true)
        try {
            const response = await axios.get("/Associate", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            console.warn(response.data?.data);
            setassociate(response?.data?.data);
            setLoading4(false)

        } catch (err) {
            console.error(err.response);
            setLoading4(false)
        } finally {
            setLoading4(false);
        }
    }, [token]);

    const GetData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get("/portfolio", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            // console.warn(response.data?.data);
            setPortfolio(response?.data?.data);
            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }, [token]);

    const GetInvestorsData = useCallback(async () => {
        setLoading2(true)
        try {
            const response = await axios.get("/investor", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setinvestor(response?.data?.data);
            setLoading2(false)

        } catch (err) {
            console.error(err.response);
            setLoading2(false)
        } finally {
            setLoading2(false);
        }
    }, [token]);

    const GetWithdrawalData = useCallback(async () => {
        setLoading3(true)
        try {
            const response = await axios.get("/Withdrawal", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setWithdrawal(response?.data?.data);
            setLoading3(false)

        } catch (err) {
            console.error(err.response);
            setLoading3(false)
        } finally {
            setLoading3(false);
        }
    }, [token]);

    useEffect(() => {
        GetData();
        GetAssociateData();
        GetWithdrawalData();
        GetInvestorsData();
    }, [GetData, GetAssociateData, GetWithdrawalData, GetInvestorsData]);

    return (
        <div className="bg-[#F6F8FE]">
            <div className="max-h-[100vh] overflow-auto">
                <div className="bg-white sticky top-0">
                    <SidebarHeader />
                </div>
                <div className="lg:flex md:flex justify-between px-5 pt-5">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Dashboard</h1>
                    </div>
                    <div className="Dropdown cursor-pointer my-auto">
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
                    </div>
                </div>
                {/*  */}
                <div className="px-5">
                    <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-5'>
                        {/*  */}
                        <div className="rounded-[10px] bg-white p-5 mt-5">
                            <img src={TotalPortfolios} alt={TotalPortfolios} />
                            <h5 className="text-lightGray mt-[12px] text-[16px]">Total Portfolios</h5>
                            <h2 className="text-dark text-[20px] font-bold mt-[12px]">{portfolio?.length}</h2>
                        </div>
                        {/*  */}
                        <div className="rounded-[10px] bg-white p-5 mt-5">
                            <img src={TotalAllocated} alt={TotalAllocated} className='mt-2' />
                            <h5 className="text-lightGray mt-[12px] text-[16px]">Total&nbsp;Allocated&nbsp;Funds</h5>
                            <h2 className="text-dark text-[20px] font-bold mt-[12px]">$50,322</h2>
                        </div>
                        {/*  */}
                        <div className="rounded-[10px] bg-white p-5 mt-5">
                            <img src={TotalInvestors} alt={TotalInvestors} />
                            <h5 className="text-lightGray mt-[12px] text-[16px]">Total Investors</h5>
                            <h2 className="text-dark text-[20px] font-bold mt-[12px]">{investor?.length}</h2>
                        </div>
                        {/*  */}
                        <div className="rounded-[10px] bg-white p-5 mt-5">
                            <img src={TotalInvestors} alt={TotalInvestors} />
                            <h5 className="text-lightGray mt-[12px] text-[16px]">Total Associates</h5>
                            <h2 className="text-dark text-[20px] font-bold mt-[12px]">{associate?.length}</h2>
                        </div>
                        {/*  */}
                        <div className="rounded-[10px] bg-white p-5 mt-5">
                            <img src={TotalWithdrawals} alt={TotalWithdrawals} />
                            <h5 className="text-lightGray mt-[12px] text-[16px]">Total Withdrawals</h5>
                            <h2 className="text-dark text-[20px] font-bold mt-[12px]">{Withdrawal?.length}</h2>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="mt-5 px-5">

                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-5">
                        <div className='p-5 bg-white rounded-[10px] col-span-12 lg:col-span-8 md:col-span-6'>
                            <div className="flex justify-between">
                                <h5 className="text-[16px] text-dark">Portfolios</h5>
                                <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                            </div>
                            {/*  */}
                            <div className="overflow-x-auto mt-4 scrollbarStyle">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Portfolio</th>
                                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Minimum Investment</th>
                                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Maximum Investment</th>
                                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Investor</th>
                                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Withdrawal Period</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*  */}
                                        {loading ? (
                                            <div className='col-span-3'>
                                                <center className="text-center my-20"><Loader /></center>
                                            </div>
                                        ) : portfolio?.length > 0 ? (
                                            portfolio?.map((item, index) => (
                                                <tr key={index} className='hover:bg-[#F6F8FE] cursor-pointer'>
                                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                                        <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                                        <span className='my-auto'>{item?.name}</span>
                                                    </td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">${item?.min_investment || "N/A"}</td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">${item?.max_investment || "N/A"}</td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">{item?.investors?.length > 0 ? item?.investors?.length : 0}</td>
                                                    <td className="py-2 px-4 text-[16px] text-dark">{item?.withdrawal_Period || "N/A"}</td>
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
                        </div>
                    </div>
                    {/*  CARDS  */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5">
                        {/*  */}
                        {/*  */}
                        <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                            <div className="lg:flex md:flex justify-between">
                                <h5 className="text-[16px] text-dark my-auto">Investors</h5>
                                <div className="Dropdown cursor-pointer my-auto">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                            <DownOutlined />&nbsp;Most&nbsp;Recent
                                        </p>
                                    </Dropdown>
                                </div>
                            </div>
                            {/*  */}
                            {loading2 ? (
                                <div className='col-span-3'>
                                    <center className="text-center my-20"><Loader /></center>
                                </div>
                            ) : investor?.length > 0 ? (
                                investor?.map((item, index) => (
                                    <div key={index} className="mt-4 flex justify-between">
                                        <div className="my-auto flex gap-3 my-auto">
                                            <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[30px] h-[30px] object-cover my-auto' />
                                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                                {item?.name || "N/A"}</h3>
                                        </div>
                                        <div className="my-auto">
                                            <p className="text-lightGray text-[12px]">{item?.creationOn.slice(0, 10) || "N/A"}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center"><NoDataFound /></td>
                                </tr>
                            )}

                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                            <div className="lg:flex md:flex justify-between">
                                <h5 className="text-[16px] text-dark my-auto">Main Associates</h5>
                                <div className="Dropdown cursor-pointer my-auto">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                            <DownOutlined />&nbsp;Most&nbsp;Recent
                                        </p>
                                    </Dropdown>
                                </div>
                            </div>
                            {/*  */}
                            {loading4 ? (
                                <div className='col-span-3'>
                                    <center className="text-center my-20"><Loader /></center>
                                </div>
                            ) : associate?.filter(item => item?.level === 'main associate')?.length > 0 ? (
                                associate
                                    ?.filter(item => item?.level === 'main associate')
                                    .map((item, index) => (
                                        <div key={index} className="mt-4 flex justify-between">
                                            <div className="my-auto flex gap-3 my-auto">
                                                <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[30px] h-[30px] object-cover my-auto' />
                                                <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                                    {item?.name || "N/A"}</h3>
                                            </div>
                                            <div className="my-auto">
                                                <p className="text-lightGray text-[12px]">{item?.creationOn.slice(0, 10) || "N/A"}</p>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center"><NoDataFound /></td>
                                </tr>
                            )}
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                            <div className="lg:flex md:flex justify-between">
                                <h5 className="text-[16px] text-dark my-auto">Sub Associates</h5>
                                <div className="Dropdown cursor-pointer my-auto">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                            <DownOutlined />&nbsp;Most&nbsp;Recent
                                        </p>
                                    </Dropdown>
                                </div>
                            </div>
                            {/*  */}
                            {loading4 ? (
                                <div className='col-span-3'>
                                    <center className="text-center my-20"><Loader /></center>
                                </div>
                            ) : associate?.filter(item => item?.level === 'sub associate')?.length > 0 ? (
                                associate
                                    ?.filter(item => item?.level === 'sub associate')
                                    .map((item, index) => (
                                        <div key={index} className="mt-4 flex justify-between">
                                            <div className="my-auto flex gap-3 my-auto">
                                                <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[30px] h-[30px] object-cover my-auto' />
                                                <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                                    {item?.name || "N/A"}</h3>
                                            </div>
                                            <div className="my-auto">
                                                <p className="text-lightGray text-[12px]">{item?.creationOn.slice(0, 10) || "N/A"}</p>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center"><NoDataFound /></td>
                                </tr>
                            )}
                        </div>
                    </div>
                    {/*  Investors Withdrawal Request  */}
                    {/*  Investors Withdrawal Request  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
                        {/*  */}
                        {/*  */}
                        <div className="my-5 bg-white p-5 bg-white rounded-[10px]">
                            <div className="lg:flex md:flex justify-between mb-3">
                                <h5 className="text-[16px] text-dark my-auto">Investors Withdrawal Request</h5>
                                <div className="Dropdown cursor-pointer my-auto">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                            <DownOutlined />&nbsp;Most&nbsp;Recent
                                        </p>
                                    </Dropdown>
                                </div>
                            </div>
                            {/*  */}
                            <table className="min-w-full bg-white">
                                <thead className=''>
                                    <tr>
                                        <th className="py-2 px-0 font-[400] tetx-[14px] text-lightGray text-left">Investor</th>
                                        <th className="py-2 px-0 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                        <th className="py-2 px-0 font-[400] tetx-[14px] text-lightGray text-left">Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/*  */}
                                    {loading3 ? (
                                        <tr>
                                            <td colSpan="6" className="text-center pt-20"><Loader /></td>
                                        </tr>
                                    ) : Withdrawal?.length > 0 ? (
                                        Withdrawal.map((item, index) => (
                                            <>
                                                <tr key={index}>
                                                    <td className="py-2 px-0 text-[16px] text-dark flex gap-2">
                                                        <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[30px] h-[30px] object-cover my-auto' />
                                                        <span className='my-auto'>{item?.name || "N/A"}</span></td>
                                                    <td className="py-2 px-0 text-[16px] text-dark">${item?.withdrawal_amount}</td>
                                                    <td className={`py-0 px-4 text-[16px] rounded-full text-center font-semibold 
                                                ${item?.withdrawal_status === "processed" ? "text-textgreen bg-lightgreen" :
                                                            item?.withdrawal_status === "rejected" ? "text-textRed bg-lightRed" :
                                                                item?.withdrawal_status === "pending" ? "text-textYellow bg-lightYellow" : null}`}>
                                                        {item?.withdrawal_status}
                                                    </td>
                                                    {/* <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Processed</td> */}
                                                </tr>
                                                {/*  */}
                                                <>&nbsp;</>
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
                        {/*  */}
                        {/*  */}
                        <div className="my-5 bg-white p-5 bg-white rounded-[10px]">
                            <div className="lg:flex md:flex justify-between mb-3">
                                <h5 className="text-[16px] text-dark my-auto">Main/Sub Associates Withdrawal Request</h5>
                                <div className="Dropdown cursor-pointer my-auto">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                            <DownOutlined />&nbsp;Most&nbsp;Recent
                                        </p>
                                    </Dropdown>
                                </div>
                            </div>
                            {/*  */}
                            <table className="min-w-full bg-white">
                                <thead className=''>
                                    <tr>
                                        <th className="py-2 px-0 font-[400] tetx-[14px] text-lightGray text-left">Investor</th>
                                        <th className="py-2 px-0 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                        <th className="py-2 px-0 font-[400] tetx-[14px] text-lightGray text-left">Status</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    {/*  */}
                                    {loading3 ? (
                                        <tr>
                                            <td colSpan="6" className="text-center pt-20"><Loader /></td>
                                        </tr>
                                    ) : Withdrawal?.length > 0 ? (
                                        Withdrawal?.map((item, index) => (
                                            <>
                                                <tr key={index}>
                                                    <td className="py-2 px-0 text-[16px] text-dark flex gap-2">
                                                        <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[30px] h-[30px] object-cover my-auto' />
                                                        <span className='my-auto'>{item?.name || "N/A"}</span></td>
                                                    <td className="py-2 px-0 text-[16px] text-dark">${item?.withdrawal_amount}</td>
                                                    <td className={`py-0 px-4 text-[16px] rounded-full text-center font-semibold 
                                                ${item?.withdrawal_status === "processed" ? "text-textgreen bg-lightgreen" :
                                                            item?.withdrawal_status === "rejected" ? "text-textRed bg-lightRed" :
                                                                item?.withdrawal_status === "pending" ? "text-textYellow bg-lightYellow" : null}`}>
                                                        {item?.withdrawal_status}
                                                    </td>
                                                    {/* <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Processed</td> */}
                                                </tr>
                                                {/*  */}
                                                <>&nbsp;</>
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

                </div>
            </div>
        </div>

    )
}

export default Dashboard

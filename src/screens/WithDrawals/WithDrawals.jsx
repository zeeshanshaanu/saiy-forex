import React, { useState, useEffect, useCallback } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Dropdown, Button } from 'antd'
import { DownOutlined, DownloadOutlined } from '@ant-design/icons'
import Logo1 from "../../assets/images/Logo1.svg"
import { useSelector } from 'react-redux'
import axios from 'axios'
import NoDataFound from '../../components/NoData/NodataFound'
import Loader from '../../components/Loader/Loader'
// 
// 
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
const WithDrawals = () => {

    const [loading, setLoading] = useState(false);
    const [Withdrawal, setWithdrawal] = useState([]);
    const token = useSelector((state) => state?.auth?.token);

    const GetData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get("/Withdrawal", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            console.warn(response.data?.data);
            setWithdrawal(response?.data?.data);

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
        GetData();
    }, [GetData]);

    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className="max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="px-5 lg:flex md:flex justify-between">
                    <div className="mt-5">
                        <h1 className="text-[24px] font-bold">Withdrawals</h1>
                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-x-3">
                        {/*  */}
                        <div className="lg:flex md:flex gap-x-5 my-auto">
                            <Dropdown
                                className='mt-5'
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[20px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;This Month
                                </p>
                            </Dropdown>
                            {/*  */}
                            <Dropdown
                                className='mt-5'
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[20px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;All Portfolios
                                </p>
                            </Dropdown>
                        </div>
                        {/*  */}
                        <div className="lg:flex md:flex gap-x-5 my-auto">
                            <Dropdown className='mt-5'
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[20px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;Status
                                </p>
                            </Dropdown>
                            <div className="mt-5">
                                <Button type="dark"
                                    className='bg-dark text-white h-[44px] rounded-[10px]'
                                    // onClick={showDrawer}
                                    icon={<DownloadOutlined className='text-white' />}>Export CSV
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="px-5 overflow-x-auto mt-4">
                    <table className="min-w-full bg-white rounded-[10px] my-4">
                        <thead>
                            <tr>
                                <th className="py-3 px-5 font-[400] text-[14px] text-lightGray text-left">Investor</th>
                                <th className="py-3 px-5 font-[400] text-[14px] text-lightGray text-left">Email</th>
                                <th className="py-3 px-5 font-[400] text-[14px] text-lightGray text-left">Withdrawal&nbsp;Amount</th>
                                <th className="py-3 px-5 font-[400] text-[14px] text-lightGray text-left">Withdrawal&nbsp;Status</th>
                                <th className="py-3 px-5 font-[400] text-[14px] text-lightGray text-left">Request&nbsp;on</th>
                                <th className="py-3 px-5 font-[400] text-[14px] text-lightGray text-left">KYC&nbsp;Status</th>
                                {/* <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Actions</th> */}
                            </tr>
                        </thead>
                        <tbody className="p-5">
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="text-center pt-20"><Loader /></td>
                                </tr>
                            ) : Withdrawal?.length > 0 ? (
                                Withdrawal.map((item, index) => (
                                    <>
                                        <br />
                                        <tr key={index}>
                                            <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                                <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                                <span className="my-auto">{item?.name || "N/A"}a</span>
                                            </td>
                                            <td className="py-1 px-5 text-[16px] text-dark">{item?.email || "N/A"}</td>
                                            <td className="py-1 px-5 text-[16px] text-dark">${item?.withdrawal_amount || "N/A"}</td>
                                            <td className={`py-0 px-4 text-[16px] rounded-full text-center font-semibold 
                                                ${item?.withdrawal_status === "processed" ? "text-textgreen bg-lightgreen" :
                                                    item?.withdrawal_status === "rejected" ? "text-textRed bg-lightRed" :
                                                        item?.withdrawal_status === "pending" ? "text-textYellow bg-lightYellow" : null}`}>
                                                {item?.withdrawal_status}
                                            </td>
                                            <td className="py-1 px-5 text-[16px] text-dark">{item?.Request_date || "N/A"}</td>
                                            <td className={`py-1 px-5 text-[16px] rounded-full text-center font-semibold
                                                        ${item?.KYC_status === "active" ? "text-textgreen bg-lightgreen" :
                                                    item?.KYC_status === "inactive" ? "text-textYellow bg-lightYellow" : null} `}>
                                                {item?.KYC_status}
                                            </td>
                                            {/* <td className="py-2 px-4 text-[16px] text-dark">
                                                <span className='cursor-pointer my-auto'>
                                                    <CustomizedDialogs
                                                        WithdrawalID={item?._id}
                                                        onlistUpdate={RefreshInvestorlist}
                                                    />
                                                </span>
                                            </td> */}
                                        </tr>
                                    </>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center pt-20"><NoDataFound /></td>
                                </tr>
                            )}
                            <br />


                        </tbody >
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WithDrawals

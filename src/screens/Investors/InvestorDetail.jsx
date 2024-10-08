import React, { useEffect, useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Breadcrumb, Button, Dropdown } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import SetRoi from "../../assets/Icons/DashboardCards/SetRoi.svg"
import Logo1 from "../../assets/images/Logo1.svg"
import DummyImg1 from "../../assets/images/DummyImg1.png"
import PDFicon from "../../assets/Icons/PDFicon.svg"
import { useNavigate, useParams } from 'react-router-dom';
import { DownOutlined, DownloadOutlined } from '@ant-design/icons';

import axios from 'axios';
import { useSelector } from 'react-redux';

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
// 
const InvestorDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [investor, setInvestor] = useState([]);

    const token = useSelector((state) => state?.auth?.token);

    console.log("This is investor data-->>", investor);

    const GetUserProfile = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/investor/${id}`, {
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
    };

    useEffect(() => {
        GetUserProfile();
    }, []);


    return (
        <div className="bg-[#F6F8FE]">
            <div className=" max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="px-5 lg:flex md:flex justify-between mt-5">
                    <div className=" my-auto">
                        <Breadcrumb
                            items={[
                                {
                                    title: <span className="hover:text-dark cursor-pointer font-bold"
                                        onClick={() => navigate(-1)}>Investors </span>,
                                },
                                {
                                    title: <span className="hover:text-dark font-bold">{investor?.name || "N/A"}</span>,
                                },
                            ]}
                        />

                    </div>
                    <div className="Dropdown cursor-pointer my-auto flex gap-2">
                        <div className="my-auto">
                            <Button type="white"
                                className='bg-transparent border border-lightGray text-dark h-[44px] rounded-[10px]'
                                // onClick={showDrawer2}
                                icon={<EditOutlined className='text-dark' />}>Edit
                            </Button>
                        </div>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                // onClick={showDrawer}
                                icon={<img src={SetRoi} alt={SetRoi} className='text-white' />}>Set ROI
                            </Button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="px-5 grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-5 mt-5">
                    <div className="col-span-1 lg:col-span-8 md:col-span-6">
                        <div className='p-5 bg-white rounded-[10px] col-span-1'>
                            {/*  */}
                            <div className="flex justify-between">
                                <div>
                                    <img src={investor?.image || DummyImg1} alt={investor?.image || DummyImg1} className="w-[120px] object-cover h-[120px] rounded-[100px]" />
                                </div>
                                <div className="flex gap-5 rounded-[10px] h-[50px] px-5 border border-silver bg-silver ">
                                    <p className="my-auto text-lightGray text-[14px]">KYC Status</p>
                                    <p className="my-auto py-[4px] px-[12px] text-[16px] font-semibold text-textRed bg-lightRed rounded-[100px] text-center">{investor?.status}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Name</h5>
                                    <h5 className="text-dark text-[16px] ">{investor?.name || "N/A"}</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Phone</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">{investor?.phone || "N/A"}</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Email</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">{investor?.email || "N/A"}</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Address</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">{investor?.address || "N/A"}</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">IBAN</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">{investor?.iban || "N/A"}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 bg-white rounded-[10px] ">
                            <div className='p-5 bg-white rounded-[10px] col-span-1 lg:col-span-4 md:col-span-6'>
                                <div className="flex justify-between">
                                    <h5 className="text-[16px] text-dark">Documents </h5>
                                    <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                                </div>
                                <div className="mt-4 max-w-full flex gap-5 w-full overflow-auto">
                                    {/*  */}
                                    {investor?.documents?.length > 0 ?
                                        (
                                            investor?.documents?.map((docs, index) => (
                                                <div key={index} className="mb-3 text-center my-auto bg-[#F6F8FE] p-5 rounded-lg">
                                                    <center>
                                                        <img src={PDFicon} alt={PDFicon} className="text-center" />
                                                    </center>
                                                    <p className="truncate text-ellipsis overflow-hidden mt-2 truncate">{docs?.fileName || "N/A"}...</p>
                                                    <p className='text-lightGray text-[12px] mt-3'> {docs?.fileName?.split(".")[1] === "pdf" ? "PDF" : "N/A"}</p>
                                                    <small className='text-lightGray text-[10px] mt-3'> {docs?.dateOfCreation.slice(0, 10) || "N/A"}</small>
                                                </div>
                                            ))
                                        ) : (
                                            <div>
                                                <h3 className="text-center">No Investor Found.!</h3>
                                            </div>
                                        )

                                    }

                                    {/*  */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 bg-white rounded-[10px] col-span-1 lg:col-span-4 md:col-span-6'>
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
                {/*  */}
                <div className=" m-5 p-5 bg-white rounded-[10px]">
                    <div className="lg:flex md:flex justify-between ">
                        <div className=" my-auto">
                            <h1 className="text-[24px] font-bold">Transaction History</h1>
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
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full bg-white rounded-[10px]">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Transaction ID</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Type</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Date</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Invoice</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                 <tr className='' onClick={() => navigate('/InvestorDetail')}>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">7480343</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$69.99</td>
                                    <td className="py-2 px-4 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full  text-center font-semibold">Deposit</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022</td>
                                    <td className="py-2 px-4 text-[16px] text-dark text-yellow1 cursor-pointer"><DownloadOutlined />&nbsp;Download Invoice</td>
                                </tr>
                                <br />
                            </tbody> */}

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="text-center my-10">Loading...</td>
                                    </tr>
                                ) : investor?.transactionHistory?.length > 0 ? (
                                    investor?.transactionHistory?.map((item, index) => (
                                        <>
                                            <br />
                                            <tr key={index}>
                                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">{item?.transactionId || "N/A"}</td>
                                                <td className="py-2 px-4 text-[16px] text-dark">${item?.amount || "N/A"}</td>
                                                <td className="py-2 px-4 text-[16px] text-textgreen bg-lightgreen 
                                                     rounded-full  text-center font-semibold">{item?.type || "N/A"}</td>
                                                <td className="py-2 px-4 text-[16px] text-dark">{item?.date.slice(0, 10) || "N/A"}</td>
                                                <td className="py-2 px-4 text-[16px] text-dark text-yellow1 cursor-pointer"><DownloadOutlined />&nbsp;Download Invoice</td>
                                            </tr>

                                        </>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">No Investor Found.!</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorDetail

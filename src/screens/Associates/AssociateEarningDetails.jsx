import React from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Breadcrumb, Button, Dropdown } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import SetRoi from "../../assets/Icons/DashboardCards/SetRoi.svg"
import Logo1 from "../../assets/images/Logo1.svg"
import DummyImg1 from "../../assets/images/DummyImg1.png"
import PDFicon from "../../assets/Icons/PDFicon.svg"
import { useNavigate } from 'react-router-dom';
import { DownOutlined, DownloadOutlined } from '@ant-design/icons';

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
const AssociateEarningDetails = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-[#F6F8FE]">
            <div className="sticky top-0 bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="p-5 max-h-[100vh] overflow-auto">
                <div className="flex justify-between ">
                    <div className=" my-auto">
                        <Breadcrumb
                            items={[
                                {
                                    title: <span className="hover:text-dark cursor-pointer font-bold"
                                        onClick={() => navigate("/MainAssociates")}>Associates </span>,
                                },
                                {
                                    title: <span className="hover:text-dark cursor-pointer font-bold"
                                        onClick={() => navigate(-1)}>Eleanor Pena</span>,
                                },
                                {
                                    title: <span className="hover:text-dark font-bold">5czi9fdfs5czi9fdfs</span>,
                                },
                            ]}
                        />

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
                    </div>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-5 mt-5">
                    <div className="col-span-1 lg:col-span-8 md:col-span-6">
                        <div className='p-5 bg-white rounded-[10px] col-span-1'>
                            {/*  */}
                            <div className="flex justify-between">
                                <div>
                                    <img src={DummyImg1} alt={DummyImg1} className="w-[100px] h-[100px] rounded-[100px]" />
                                </div>
                                <div className="flex gap-5 rounded-[10px] h-[50px] px-5 border border-silver bg-silver ">
                                    <p className="my-auto text-lightGray text-[14px]">KYC Status</p>
                                    <p className="my-auto py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Approved</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Name</h5>
                                    <h5 className="text-dark text-[16px] ">Eleanor Pena</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Role</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">Main Associate</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Email</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">debbie.baker@example.com</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Profit Splits Earned</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">$2,000</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Current Withdrawal Balance</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">$3,200</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Paid to Sub Associates</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">$10,213</h5>
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

                                {/* <div className="">
                                    <h3 className="text-lightGray text-[14px] flex gap-[12px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[16px] h-[16px] cover my-auto' />
                                        Esther Howard</h3>
                                </div> */}
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

                                {/* <div className="">
                                    <h3 className="text-lightGray text-[14px] flex gap-[12px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[16px] h-[16px] cover my-auto' />
                                        Esther Howard</h3>
                                </div> */}
                                <div className="">
                                    <p className="text-lightGray text-[12px]">4 minutes ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TABLE */}
                <div className="mt-5 p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between ">
                        <div className=" my-auto">
                            <h1 className="text-[18px]">Earning Transactions </h1>
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full bg-white rounded-[10px]">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Transaction ID</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Transaction Type</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Status</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*  */}
                                <tr className='cursor-pointer' >
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">5czi9fdfs5czi9fdfs</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">Payouts</td>
                                    <td className="py-2 px-0 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full text-center font-semibold">Processed</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                </tr>
                                <br />
                                {/*  */}
                                <tr className='cursor-pointer' >
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">5czi9fdfs5czi9fdfs</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">Withdrawal Requests</td>
                                    <td className="py-2 px-0 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full text-center font-semibold">Processed</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                </tr>
                                <br />
                                {/*  */}
                                <tr className='cursor-pointer' >
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">5czi9fdfs5czi9fdfs</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">Payouts</td>
                                    <td className="py-2 px-0 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full text-center font-semibold">Processed</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                {/* TABLE 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                    {/*  */}
                    <div className="mt-5 p-5 bg-white rounded-[10px]">
                        <div className="flex justify-between ">
                            <div className=" my-auto">
                                <h1 className="text-[16px]">Received from Main Associate</h1>
                            </div>
                            <div className="my-auto">
                                <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full bg-white rounded-[10px]">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Transaction ID</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer' >
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">5czi9fdfs5czi9fdfs</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer' >
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">5czi9fdfs5czi9fdfs</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer' >
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">5czi9fdfs5czi9fdfs</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-5 p-5 bg-white rounded-[10px]">
                        <div className="flex justify-between ">
                            <div className=" my-auto">
                                <h1 className="text-[16px]">Investors</h1>
                            </div>
                            <div className="my-auto">
                                <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full bg-white rounded-[10px]">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Name</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Email</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Capital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer' >
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">Jacob Jones</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">jackson.graham@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer' >
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">Jacob Jones</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">jackson.graham@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer' >
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">Jacob Jones</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">jackson.graham@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default AssociateEarningDetails

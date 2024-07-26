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
const InvestorDetail = () => {
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
                                        onClick={() => navigate(-1)}>Investors </span>,
                                },
                                {
                                    title: <span className="hover:text-dark font-bold">Eleanor Pena</span>,
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
                                    <p className="my-auto py-[4px] px-[12px] text-[16px] font-semibold text-textRed bg-lightRed rounded-[100px] text-center">Pending</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Name</h5>
                                    <h5 className="text-dark text-[16px] ">Eleanor Pena</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Phone</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">(907) 555-0101</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Email</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">debbie.baker@example.com</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">Address</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">3890 Poplar Dr.</h5>
                                </div>
                                <div className="">
                                    <h5 className="text-lightGray mt-[8px] text-[14px]">IBAN</h5>
                                    <h5 className="text-dark text-[16px] mt-[4px]">DE75500105171813784773</h5>
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
                                    <div className="mb-3 text-center my-auto bg-[#F6F8FE] p-5 rounded-lg">
                                        <center>
                                            <img src={PDFicon} alt={PDFicon} className="text-center" />
                                        </center>
                                        <p className="truncate text-ellipsis overflow-hidden mt-2 truncate">fforward state...</p>
                                        <p className='text-lightGray text-[12px] mt-3'> 200 KB</p>
                                    </div>
                                    {/*  */}
                                    <div className="mb-3 text-center my-auto bg-[#F6F8FE] p-5 rounded-lg">
                                        <center>
                                            <img src={PDFicon} alt={PDFicon} className="text-center" />
                                        </center>
                                        <p className="truncate text-ellipsis overflow-hidden mt-2">Draft1-changes  </p>
                                        <p className='text-lightGray text-[12px] mt-3'> 200 KB</p>
                                    </div>
                                    {/*  */}
                                    <div className="mb-3 text-center my-auto bg-[#F6F8FE] p-5 rounded-lg">
                                        <center>
                                            <img src={PDFicon} alt={PDFicon} className="text-center" />
                                        </center>
                                        <p className="truncate text-ellipsis overflow-hidden mt-2">fpicture1.pdf</p>
                                        <p className='text-lightGray text-[12px] mt-3'> 200 KB</p>
                                    </div>
                                    {/*  */}
                                    <div className="mb-3 text-center my-auto bg-[#F6F8FE] p-5 rounded-lg">
                                        <center>
                                            <img src={PDFicon} alt={PDFicon} className="text-center" />
                                        </center>
                                        <p className="truncate text-ellipsis overflow-hidden mt-2">Draft1-changes  </p>
                                        <p className='text-lightGray text-[12px] mt-3'> 200 KB</p>
                                    </div>
                                    {/*  */}
                                    <div className="mb-3 text-center my-auto bg-[#F6F8FE] p-5 rounded-lg">
                                        <center>
                                            <img src={PDFicon} alt={PDFicon} className="text-center" />
                                        </center>
                                        <p className="truncate text-ellipsis overflow-hidden mt-2">fpicture1.pdf</p>
                                        <p className='text-lightGray text-[12px] mt-3'> 200 KB</p>
                                    </div>
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
                {/*  */}
                <div className="mt-5 p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between ">
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
                            <tbody>
                                {/*  */}
                                <tr className='' onClick={() => navigate('/InvestorDetail')}>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">7480343</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$69.99</td>
                                    <td className="py-2 px-4 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full  text-center font-semibold">Deposit</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                    <td className="py-2 px-4 text-[16px] text-dark text-yellow1 cursor-pointer"><DownloadOutlined />&nbsp;Download Invoice</td>
                                </tr>
                                <br />
                                {/*  */}
                                <tr className='' onClick={() => navigate('/InvestorDetail')}>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">7480343</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$69.99</td>
                                    <td className=" text-[16px] text-textRed bg-lightRed 
                                    rounded-full py-2 px-4 text-center font-semibold">Withdrawal</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                    <td className="py-2 px-4 text-[16px] text-dark text-yellow1 cursor-pointer"><DownloadOutlined />&nbsp;Download Invoice</td>
                                </tr>
                                <br />
                                {/*  */}
                                <tr className='' onClick={() => navigate('/InvestorDetail')}>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2">7480343</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$69.99</td>
                                    <td className="py-2 px-4 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full py-2 px-4 text-center font-semibold">Deposit</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">27 Oct 2022 12:05 PM</td>
                                    <td className="py-2 px-4 text-[16px] text-dark text-yellow1 cursor-pointer"><DownloadOutlined />&nbsp;Download Invoice</td>
                                </tr>
                                <br />


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorDetail

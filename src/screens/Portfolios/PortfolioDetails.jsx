import React, { useState } from 'react'
import TotalAllocated from "../../assets/Icons/DashboardCards/TotalAllocated.svg"
import TotalInvestors from "../../assets/Icons/DashboardCards/TotalInvestors.svg"
import SetRoi from "../../assets/Icons/DashboardCards/SetRoi.svg"
import Logo1 from "../../assets/images/Logo1.svg"
import TotalWithdrawals from "../../assets/Icons/DashboardCards/TotalWithdrawals.svg"
import CollectiveGrowthIcon from "../../assets/Icons/DashboardCards/CollectiveGrowthIcon.svg"
import DayInspection from "../../assets/Icons/DashboardCards/DayInspection.svg"
import SidebarHeader from '../../components/sidebar/Header'
import { Button, Breadcrumb } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import PortfolioSetRoi from './PortfolioSetRoi'
import EditPortfolio from './EditPortfolio'

const PortfolioDetails = () => {
    const navigate = useNavigate()
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
            <div className="bg-[#F6F8FE] h-[100vh]">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="px-5 lg:flex md:flex justify-between mt-5">
                    <div className=" my-auto">
                        <Breadcrumb
                            items={[
                                {
                                    title: <span className="hover:text-dark cursor-pointer font-bold" onClick={() => navigate(-1)}>Portfolios</span>,
                                },
                                {
                                    title: <span className="hover:text-dark font-bold">SAIY Forex Premium Plus</span>,
                                },
                            ]}
                        />

                        {/* <h1 className="text-[24px] font-bold">Portfolios</h1> */}
                    </div>
                    <div className="Dropdown cursor-pointer my-auto flex gap-2">
                        <div className="my-auto">
                            <Button type="white"
                                className='bg-transparent border border-lightGray text-dark h-[44px] rounded-[10px]'
                                onClick={showDrawer2}
                                icon={<EditOutlined className='text-dark' />}>Edit
                            </Button>
                        </div>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<img src={SetRoi} alt={SetRoi} className='text-white' />}>Set ROI
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='px-5 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-x-5'>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={CollectiveGrowthIcon} alt={CollectiveGrowthIcon} className='mt-2' />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Growth</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">42</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalAllocated} alt={TotalAllocated} className='mt-2' />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Allocated Funds</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">$50,322</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalInvestors} alt={TotalInvestors} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Investors</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">13</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalWithdrawals} alt={TotalWithdrawals} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Investor’s&nbsp;Withdrawals</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">$2,223</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={DayInspection} alt={DayInspection} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Days since Inception</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">23</h2>
                    </div>
                </div>
                {/*  */}

                <div className="px-5 mt-5 grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-x-5">
                    <div className='p-5 bg-white rounded-[10px] col-span-12 lg:col-span-8 md:col-span-6'>
                        <div className="flex justify-between">
                            <h5 className="text-[16px] text-dark">Investors</h5>
                            <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                        </div>
                        {/*  */}
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Name</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Number</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Email</th>
                                        <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+78794545234</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">3890&nbsp;Poplar&nbsp;Dr.</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Theresa Webb</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+3435345</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Kristin Watson</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+12354568</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">kenzi.lawson@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">37529 E. Pecan St.</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+567681212</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">3890&nbsp;Poplar&nbsp;Dr.</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+908907645</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">john.baker@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">3890&nbsp;Poplar&nbsp;Dr.</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+12334365678</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">khkuku.baker@ghjg.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">3890&nbsp;Poplar&nbsp;Dr.</td>
                                    </tr>
                                    {/*  */}
                                    <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto text-[16px]'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">+78956756</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">sdtrer.baker@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">3890&nbsp;Poplar&nbsp;Dr.</td>
                                    </tr>
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
            {/* ADD DRAWER */}
            <PortfolioSetRoi open={open} setOpen={setOpen} />
            <EditPortfolio openEdit={openEdit} setOpenEdit={setOpenEdit} />
        </div>
    )
}


export default PortfolioDetails

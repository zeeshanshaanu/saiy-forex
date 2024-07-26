import React from 'react'
import { Button, Dropdown } from 'antd'
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
// 
import SidebarHeader from '../../components/sidebar/Header'
import TotalAllocated from "../../assets/Icons/DashboardCards/TotalAllocated.svg"
import TotalInvestors from "../../assets/Icons/DashboardCards/TotalInvestors.svg"
import SingleAssociate from "../../assets/Icons/DashboardCards/SingleAssociate.svg"
import Logo1 from "../../assets/images/Logo1.svg"
import { useNavigate } from 'react-router-dom';

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
const MainAssociates = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className="sticky top-0 bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="p-5 max-h-[100vh] overflow-auto">
                <div className="lg:flex md:flex justify-between ">
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
                                // onClick={showDrawer}
                                icon={<PlusOutlined className='text-white' />}>Add New
                            </Button>
                        </div>

                    </div>
                </div>
                {/* CARDS */}
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={SingleAssociate} alt={SingleAssociate} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Main Associates</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">42</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalInvestors} alt={TotalInvestors} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Sub Associates</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">$50,322</h2>
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

                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-5 mt-5">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*  */}
                                    <tr className=' cursor-pointer' onClick={() => navigate("/AssociateDetails")}>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full text-center font-semibold">Main&nbsp;Associate</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                    </tr>
                                    <br />
                                    {/*  */}
                                    <tr className='mb-3 cursor-pointer' onClick={() => navigate("/AssociateDetails")}>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                        <td className=" text-[16px] text-textYellow bg-lightYellow 
                                    rounded-full py-2 px-4 text-center font-semibold">Sub&nbsp;Associate</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                    </tr>
                                    {/*  */}
                                    <br />
                                    <tr className=' cursor-pointer' onClick={() => navigate("/AssociateDetails")}>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                        <td className="py-2 px-4 text-[16px] text-textgreen bg-lightgreen 
                                    rounded-full text-center font-semibold">Main&nbsp;Associate</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                    </tr>
                                    <br />
                                    {/*  */}
                                    <tr className='mb-3 cursor-pointer' onClick={() => navigate("/AssociateDetails")}>
                                        <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                            <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                            <span className='my-auto'>Eleanor&nbsp;Pena</span></td>
                                        <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                        <td className=" text-[16px] text-textYellow bg-lightYellow 
                                    rounded-full py-2 px-4 text-center font-semibold">Sub&nbsp;Associate</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
                                        <td className="py-2 px-4 text-[16px] text-dark">$523</td>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAssociates

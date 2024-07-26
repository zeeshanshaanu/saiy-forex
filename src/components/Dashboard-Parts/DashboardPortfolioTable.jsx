import React from 'react'
import "./DashParts.css"
import Logo1 from "../../assets/images/Logo1.svg"

import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
 
const items = [
    {
        label: <span>Most Recent</span>,
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

const DashboardPortfolioTable = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-6 gap-5">
                <div className='p-5 bg-white rounded-[10px] col-span-12 lg:col-span-8 md:col-span-6'>
                    <div className="flex justify-between">
                        <h5 className="text-[16px] text-dark">Portfolios</h5>
                        <p className="text-[14px] text-lightGray cursor-pointer hover:text-darkGray">View all</p>
                    </div>
                    {/*  */}
                    <div className="overflow-x-auto mt-4">
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
                                <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#F6F8FE]'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
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
            {/*  CARDS  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {/*  */}
                {/*  */}
                <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between">
                        <h5 className="text-[16px] text-dark my-auto">Investors</h5>
                        <div className="Dropdown cursor-pointer my-auto">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;Most Recent
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Esther Howard</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Esther Howard</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Bessie Cooper</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Ronald Richards</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between">
                        <h5 className="text-[16px] text-dark my-auto">Main Associates</h5>
                        <div className="Dropdown cursor-pointer my-auto">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;Most Recent
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Esther Howard</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Esther Howard</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Bessie Cooper</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Ronald Richards</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between">
                        <h5 className="text-[16px] text-dark my-auto">Sub Associates</h5>
                        <div className="Dropdown cursor-pointer my-auto">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;Most Recent
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Esther Howard</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Esther Howard</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Bessie Cooper</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 flex justify-between">
                        <div className="my-auto flex gap-3 my-auto">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[32px] h-[32px] cover my-auto' />
                            <h3 className="text-dark text-[16px] flex gap-[12px] my-auto">
                                Ronald Richards</h3>
                        </div>
                        <div className="my-auto">
                            <p className="text-lightGray text-[12px]">4 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Investors Withdrawal Request  */}
            {/*  Investors Withdrawal Request  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
                {/*  */}
                {/*  */}
                <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between mb-3">
                        <h5 className="text-[16px] text-dark my-auto">Investors Withdrawal Request</h5>
                        <div className="Dropdown cursor-pointer my-auto">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;Most Recent
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                    {/*  */}
                    <table className="min-w-full bg-white">
                        <thead className=''>
                            <tr>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Investor</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Status</th>

                            </tr>
                        </thead>
                        <tbody className=''>
                            {/*  */}
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Processed</td>
                            </tr>
                            {/*  */}
                            <>&nbsp;</>
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textRed bg-lightRed rounded-[100px] text-center">Pending</td>
                            </tr>
                            <>&nbsp;</>
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Processed</td>
                            </tr>
                            {/*  */}
                            <>&nbsp;</>
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textRed bg-lightRed rounded-[100px] text-center">Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*  */}
                {/*  */}
                <div className="mt-5 bg-white p-5 bg-white rounded-[10px]">
                    <div className="flex justify-between mb-3">
                        <h5 className="text-[16px] text-dark my-auto">Main/Sub Associates Withdrawal Request</h5>
                        <div className="Dropdown cursor-pointer my-auto">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <p className="border border-lightDray rounded-[10px] py-[10px] px-[16px]" onClick={(e) => e.preventDefault()}>
                                    <DownOutlined />&nbsp;Most Recent
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                    {/*  */}
                    <table className="min-w-full bg-white">
                        <thead className=''>
                            <tr>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Investor</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Amount</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Status</th>

                            </tr>
                        </thead>
                        <tbody className=''>
                            {/*  */}
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Processed</td>
                            </tr>
                            {/*  */}
                            <>&nbsp;</>
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textRed bg-lightRed rounded-[100px] text-center">Pending</td>
                            </tr>
                            <>&nbsp;</>
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textgreen bg-lightgreen rounded-[100px] text-center">Processed</td>
                            </tr>
                            {/*  */}
                            <>&nbsp;</>
                            <tr className=''>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Brooklyn Simmons</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                <td className="py-[4px] px-[12px] text-[16px] font-semibold text-textRed bg-lightRed rounded-[100px] text-center">Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    )
}

export default DashboardPortfolioTable

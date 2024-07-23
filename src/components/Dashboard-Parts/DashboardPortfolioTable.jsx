import React from 'react'
import "./DashParts.css"
import Logo1 from "../../assets/images/Logo1.svg"
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
                                <tr className='hover:bg-[#ECF0F8] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#ECF0F8]'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#ECF0F8] cursor-pointer'>
                                    <td className="py-2 px-4 text-[16px] text-dark flex gap-2 w-[250px]">
                                        <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                        <span className='my-auto'>SAIY Forex Premium Plus</span></td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$500</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">$10,000</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">23</td>
                                    <td className="py-2 px-4 text-[16px] text-dark">30 Days</td>
                                </tr>
                                {/*  */}
                                <tr className='hover:bg-[#ECF0F8] cursor-pointer'>
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
    )
}

export default DashboardPortfolioTable

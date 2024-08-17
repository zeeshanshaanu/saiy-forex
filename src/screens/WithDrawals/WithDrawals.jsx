import React from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Dropdown, Button } from 'antd'
import { DownOutlined, DownloadOutlined } from '@ant-design/icons'
import Logo1 from "../../assets/images/Logo1.svg"
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
                            </tr>
                        </thead>
                        <tbody className="p-5">
                            <tr className="cursor-pointer">
                                <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-5 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-5 text-[16px] text-dark">$1001</td>
                                <td className="py-1 px-5 text-[16px] text-textgreen bg-lightgreen rounded-full text-center font-semibold">Processed</td>
                                <td className="py-1 px-5 text-[16px] text-dark">15&nbsp;June&nbsp;202</td>
                                <td className="py-1 px-5 text-[16px] text-textgreen bg-lightgreen rounded-full text-center font-semibold">Active</td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer">
                                <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-5 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-5 text-[16px] text-dark">$1001</td>
                                <td className="py-1 px-5 text-[16px] text-textRed bg-lightRed rounded-full text-center font-semibold">Rejected</td>
                                <td className="py-1 px-5 text-[16px] text-dark">15&nbsp;March&nbsp;202</td>
                                <td className="py-1 px-5 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Inactive</td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer">
                                <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-5 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-5 text-[16px] text-dark">$1001</td>
                                <td className="py-1 px-5 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Pending</td>
                                <td className="py-1 px-5 text-[16px] text-dark">15&nbsp;April&nbsp;202 </td>
                                <td className="py-1 px-5 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Inactive</td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer">
                                <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-5 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-5 text-[16px] text-dark">$1001</td>
                                <td className="py-1 px-5 text-[16px] text-textgreen bg-lightgreen rounded-full text-center font-semibold">Processed</td>
                                <td className="py-1 px-5 text-[16px] text-dark">15&nbsp;June&nbsp;202</td>
                                <td className="py-1 px-5 text-[16px] text-textgreen bg-lightgreen rounded-full text-center font-semibold">Active</td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer">
                                <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-5 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-5 text-[16px] text-dark">$1001</td>
                                <td className="py-1 px-5 text-[16px] text-textRed bg-lightRed rounded-full text-center font-semibold">Rejected</td>
                                <td className="py-1 px-5 text-[16px] text-dark">15&nbsp;March&nbsp;202</td>
                                <td className="py-1 px-5 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Inactive</td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer">
                                <td className="py-2 px-5 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-5 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-5 text-[16px] text-dark">$1001</td>
                                <td className="py-1 px-5 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Pending</td>
                                <td className="py-1 px-5 text-[16px] text-dark">15&nbsp;April&nbsp;202 </td>
                                <td className="py-1 px-5 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Inactive</td>
                            </tr>
                            <br />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WithDrawals

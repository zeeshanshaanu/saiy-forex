import React, { useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Logo1 from "../../assets/images/Logo1.svg"

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

const ActivityLogs = () => {
    const [Show, setShow] = useState("Employee")
    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className=" max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="mx-5 mt-5 flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Activity & Logs</h1>
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
                <div className="mx-5 my-4 lg:flex md:flex">
                    <p className={`font-[500] p-3 cursor-pointer border rounded-l-lg ${Show === "Admin" ? "bg-yellow3" : ""}`}
                        onClick={() => setShow("Admin")}
                    >Admin</p>
                    <p className={`font-[500] p-3 cursor-pointer border ${Show === "Employee" ? "bg-yellow3" : ""}`}
                        onClick={() => setShow("Employee")}
                    >Employee</p>
                    <p className={`font-[500] p-3 cursor-pointer border ${Show === "MainAssociates" ? "bg-yellow3" : ""}`}
                        onClick={() => setShow("MainAssociates")}
                    >Main Associates</p>
                    <p className={`font-[500] p-3 cursor-pointer border ${Show === "SubAssociates" ? "bg-yellow3" : ""}`}
                        onClick={() => setShow("SubAssociates")}
                    >Sub Associates</p>
                    <p className={`font-[500] p-3 cursor-pointer border rounded-r-lg ${Show === "Investor" ? "bg-yellow3" : ""}`}
                        onClick={() => setShow("Investor")}
                    >Investor</p>
                </div>

                {/*  */}
                {/*  */}
                <div className="mx-5 overflow-x-auto mt-4">
                    <table className="min-w-full bg-white rounded-[10px] my-4">
                        <thead>
                            <tr>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Summary</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">User</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Time Stamp</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="">
                                <td className=" text-[16px] text-dark">Install site curbs and gutters</td>
                                <td className="text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="">15 May 2020 9:00 am</td>
                            </tr>
                            <tr className="">
                                <td className=" text-[16px] text-dark">Install site curbs and gutters</td>
                                <td className="text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="">15 May 2020 9:00 am</td>
                            </tr>
                            <tr className="">
                                <td className=" text-[16px] text-dark">Install site curbs and gutters</td>
                                <td className="text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="">15 May 2020 9:00 am</td>
                            </tr>
                            <tr className="">
                                <td className=" text-[16px] text-dark">Install site curbs and gutters</td>
                                <td className="text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="">15 May 2020 9:00 am</td>
                            </tr>
                            <tr className="">
                                <td className=" text-[16px] text-dark">Install site curbs and gutters</td>
                                <td className="text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="">15 May 2020 9:00 am</td>
                            </tr>
                            <tr className="">
                                <td className=" text-[16px] text-dark">Install site curbs and gutters</td>
                                <td className="text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="">15 May 2020 9:00 am</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ActivityLogs

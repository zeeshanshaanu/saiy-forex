import React, { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { Dropdown } from 'antd'
import axios from 'axios'
// 
import SidebarHeader from '../../components/sidebar/Header'
import Logo1 from "../../assets/images/Logo1.svg"
import Loader from '../../components/Loader/Loader'
import NoDataFound from '../../components/NoData/NodataFound'

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
    const [level, setlevel] = useState("admin");
    const [loading, setLoading] = useState(false);
    const [Users, setUsers] = useState([]);
    const token = useSelector((state) => state?.auth?.token);

    const GetData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`entities?level=${level}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            // console.warn(response.data?.data);
            setUsers(response?.data?.data);

            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetData();
    }, [level]);

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

                    <p className={`font-[500] p-3 cursor-pointer border rounded-l-lg ${level === "admin" ? "bg-yellow3" : ""}`}
                        onClick={() => setlevel("admin")}
                    >Admin</p>
                    <p className={`font-[500] p-3 cursor-pointer border ${level === "user" ? "bg-yellow3" : ""}`}
                        onClick={() => setlevel("user")}
                    >Users</p>
                    <p className={`font-[500] p-3 cursor-pointer border ${level === "main associate" ? "bg-yellow3" : ""}`}
                        onClick={() => setlevel("main associate")}
                    >Main Associates</p>
                    <p className={`font-[500] p-3 cursor-pointer border ${level === "sub associate" ? "bg-yellow3" : ""}`}
                        onClick={() => setlevel("sub associate")}
                    >Sub Associates</p>
                    <p className={`font-[500] p-3 cursor-pointer border rounded-r-lg ${level === "investor" ? "bg-yellow3" : ""}`}
                        onClick={() => setlevel("investor")}
                    >Investor</p>
                </div>

                {/*  */}
                {/*  */}
                <div className="mx-5 overflow-x-auto mt-4">
                    <table className="min-w-full bg-white rounded-[10px] my-4">
                        <thead>
                            <tr>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Name</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Email</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Time Stamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="text-center my-10"><Loader /></td>
                                </tr>
                            ) : Users?.length > 0 ? (
                                Users.map((item, index) => (

                                    <tr key={index}>
                                        <td className="text-[16px] text-dark flex gap-2">
                                            <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                            <span className="my-auto">{item?.name || "N/A"}</span>
                                        </td>
                                        <td className=" text-[16px] text-dark">{item?.email || "N/A"}</td>
                                        <td className="">{item?.creationOn || "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center"><NoDataFound /></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ActivityLogs

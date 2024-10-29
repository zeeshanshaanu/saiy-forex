import { Breadcrumb, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { useNavigate, useParams } from 'react-router-dom'
import DummyImg from "../../assets/images/DummyImg1.png"
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux'
import axios from 'axios'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UserPermissions = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const token = useSelector((state) => state?.auth?.token);
    const [loading, setLoading] = useState(false);
    const [Associate, setAssociate] = useState({});

    const GetData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/user/all-Users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setAssociate(response?.data?.data);
            setLoading(false)

        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetData();
    }, []);

    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className="max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white z-0">
                    <SidebarHeader />
                </div>
                <div className="mt-5 mx-5 lg:flex md:flex justify-between">
                    <div className=" my-auto">
                        <Breadcrumb
                            items={[
                                {
                                    title: <span className="hover:text-dark cursor-pointer font-bold"
                                        onClick={() => navigate(-1)}>User Management </span>,
                                },
                                {
                                    title: <span className="hover:text-dark font-bold">Change Permissions</span>,
                                },

                            ]}
                        />

                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-3">

                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                            >Update
                            </Button>
                        </div>
                    </div>
                </div>
                {/*  */}
                {loading ? "loading..."
                    :
                    <div className=" mx-5 mt-[30px] lg:flex justify-between">
                        <div className="">
                            <div className="flex gap-3">
                                <img src={Associate?.image || DummyImg} alt={Associate?.image || DummyImg} className="w-[100px] h-[100px] rounded-[100px]" />

                                <div className=" my-auto">
                                    <h1 className="text-[20px] font-semibold">{Associate?.name || "N/A"}
                                        <span className="mx-4 py-1 px-3 text-[12px] text-textgreen bg-lightgreen rounded-full text-center">{Associate?.status}</span>
                                    </h1>
                                    <div className="mt-[4px]">
                                        <p className="text-lightGray text-[14px]">{Associate?.email || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-lightGray text-[16ox]">Last Updated on: {Associate?.creationOn || "N/A"}</div>
                    </div>
                }
                {/*  */}
                <div className=" mx-5 p-5 bg-[#F6F8FE] overflow-x-auto mt-4 rounded-[10px] my-4">
                    <table className="min-w-full ">
                        <thead>
                            <tr>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Permission</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Create</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Read</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Update</th>
                                <th className="font-[400] text-[14px] text-lightGray text-left">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="p-0 m-0">
                            <tr className="">
                                <td className="">Permission </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">Permission </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">Permission </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                                <td className="">
                                    <Checkbox {...label} defaultChecked />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserPermissions

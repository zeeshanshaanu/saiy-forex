import { PlusOutlined } from '@ant-design/icons'
import { Breadcrumb, Button } from 'antd'
import React from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { useNavigate } from 'react-router-dom'
import DummyImg from "../../assets/images/DummyImg1.png"
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UserPermissions = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#F6F8FE] h-[100vh]">
            <div className="sticky top-0 bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="p-5 max-h-[100vh] overflow-auto">
                <div className="flex justify-between">
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
                <div className="mt-[30px] flex justify-between">
                    <div className="">
                        <div className="flex gap-3">
                            <img src={DummyImg} alt="" className="w-[50px] h-[50px] rounded-full my-auto" />
                            <div className=" my-auto">
                                <h1 className="text-[20px] font-semibold">Eleanor Pena
                                    <span className="mx-4 py-1 px-3 text-[12px] text-textgreen bg-lightgreen rounded-full text-center">Active</span>
                                </h1>
                                <div className="mt-[4px]">
                                    <p className="text-lightGray text-[14px]">debbie.baker@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-lightGray text-[16ox]">Last Updated on: 15 May 2020 9:00 am</div>
                </div>
                {/*  */}

                <div className="p-5 bg-[#F6F8FE] overflow-x-auto mt-4 rounded-[10px] my-4">
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

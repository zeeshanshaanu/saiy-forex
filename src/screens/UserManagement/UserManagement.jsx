import React, { useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Dropdown, Button } from 'antd'
import { DownloadOutlined, PlusOutlined, EyeOutlined, SettingOutlined, CloseOutlined } from '@ant-design/icons'
import Logo1 from "../../assets/images/Logo1.svg"
import Dot from "../../assets/Icons/Dot.svg"
import { useNavigate } from 'react-router-dom';
import CreateUser from './CreateUser'
// 

// 
const items = [
    {
        label: <span><EyeOutlined /> &nbsp;View Details</span>,
        key: '0',
    },
    {
        label: <span><SettingOutlined /> &nbsp;Change Permissions</span>,
        key: '1',
    },
    {
        label: <span><CloseOutlined /> &nbsp;Deactivate Account</span>,
        key: '3',
    },
];

const UserManagement = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    return (
        <div>
            {/* sticky top-0 */}
            <div className=" bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="p-5 bg-[#ECF0F8]">
                <div className="flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">User Management</h1>
                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-3">
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-transparent text-dark h-[44px] rounded-[10px] border border-lightGray'
                                // onClick={showDrawer}
                                icon={<DownloadOutlined className='text-dark' />}>Export CSV
                            </Button>
                        </div>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<PlusOutlined className='text-white' />}>Add New
                            </Button>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white rounded-[10px] my-4">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">User</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Email</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Status</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Created&nbsp;on</th>
                                <th className="py-2 px-4 font-[400] text-[14px] text-lightGray text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="p-5">
                            <br />
                            <tr className="cursor-pointer" onClick={() => navigate("/UserPermissions")}>
                                <td className="py-2 px-8 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-10 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-10 text-[16px] text-textgreen bg-lightgreen rounded-full text-center font-semibold">Active</td>
                                <td className="py-1 px-10 text-[16px] text-dark">15&nbsp;June&nbsp;202</td>
                                <td className="py-1 px-10 text-[16px] text-dark cursor-pointer">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="" onClick={(e) => e.preventDefault()}>
                                            <img src={Dot} alt={Dot} />
                                        </p>
                                    </Dropdown>
                                </td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer" onClick={() => navigate("/UserPermissions")}>
                                <td className="py-2 px-8 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-10 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-10 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Inactive</td>
                                <td className="py-1 px-10 text-[16px] text-dark">15&nbsp;June&nbsp;202</td>
                                <td className="py-1 px-10 text-[16px] text-dark cursor-pointer">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="" onClick={(e) => e.preventDefault()}>
                                            <img src={Dot} alt={Dot} />
                                        </p>
                                    </Dropdown>
                                </td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer" onClick={() => navigate("/UserPermissions")}>
                                <td className="py-2 px-8 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-10 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-10 text-[16px] text-textgreen bg-lightgreen rounded-full text-center font-semibold">Active</td>
                                <td className="py-1 px-10 text-[16px] text-dark">15&nbsp;June&nbsp;202</td>
                                <td className="py-1 px-10 text-[16px] text-dark cursor-pointer">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="" onClick={(e) => e.preventDefault()}>
                                            <img src={Dot} alt={Dot} />
                                        </p>
                                    </Dropdown>
                                </td>
                            </tr>
                            <br />
                            <tr className="cursor-pointer" onClick={() => navigate("/UserPermissions")}>
                                <td className="py-2 px-8 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt="Investor" className="rounded-full w-[22px] h-[22px] cover my-auto" />
                                    <span className="my-auto">Eleanor&nbsp;Pena</span>
                                </td>
                                <td className="py-1 px-10 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-1 px-10 text-[16px] text-textYellow bg-lightYellow rounded-full text-center font-semibold">Inactive</td>
                                <td className="py-1 px-10 text-[16px] text-dark">15&nbsp;June&nbsp;202</td>
                                <td className="py-1 px-10 text-[16px] text-dark cursor-pointer">
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <p className="" onClick={(e) => e.preventDefault()}>
                                            <img src={Dot} alt={Dot} />
                                        </p>
                                    </Dropdown>
                                </td>
                            </tr>
                            <br />
                        </tbody>
                    </table>
                </div>
                {/* ADD DRAWER */}
                <CreateUser open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}



export default UserManagement

import React, { useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Button } from 'antd'
import { PaperClipOutlined, PlusOutlined } from '@ant-design/icons'
import ComposeNewNotification from './ComposeNewNotification'
import Logo1 from "../../assets/images/Logo1.svg"
import { useNavigate } from 'react-router-dom';
const Notifications = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    return (
        <div className="">
            <div className="sticky top-0 bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="p-5 max-h-[100vh] overflow-auto">
                <div className="flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Notifications</h1>
                    </div>
                    {/* DROPWORN */}
                    <div className="Dropdown cursor-pointer my-auto flex gap-3">

                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer}
                                icon={<PlusOutlined className='text-white' />}>Compose
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* TABLES */}
            {/*  */}
            {/*  */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-[10px]">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Portfolio </th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left"> Subject</th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Content</th>
                            <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Files </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  */}
                        <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                <span className='my-auto'>EdTech</span></td>
                            <td className="py-2 px-4 text-[16px] text-dark">EdTech</td>
                            <td className="py-2 px-4 text-[16px] text-dark">Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl...</td>
                            <td className="py-2 px-4 text-[16px] text-dark"><PaperClipOutlined /></td>
                        </tr>
                        {/*  */}
                        <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                <span className='my-auto'>EdTech</span></td>
                            <td className="py-2 px-4 text-[16px] text-dark">EdTech</td>
                            <td className="py-2 px-4 text-[16px] text-dark">Vestibulum eu quam nec neque pellentesque efficitur id eget ...</td>
                            <td className="py-2 px-4 text-[16px] text-dark"><PaperClipOutlined /></td>
                        </tr>
                        {/*  */}
                        <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                <span className='my-auto'>EdTech</span></td>
                            <td className="py-2 px-4 text-[16px] text-dark">EdTech</td>
                            <td className="py-2 px-4 text-[16px] text-dark">Vestibulum eu quam nec neque pellentesque efficitur id eget ...</td>
                            <td className="py-2 px-4 text-[16px] text-dark"><PaperClipOutlined /></td>
                        </tr>
                        {/*  */}
                        <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                <span className='my-auto'>EdTech</span></td>
                            <td className="py-2 px-4 text-[16px] text-dark">EdTech</td>
                            <td className="py-2 px-4 text-[16px] text-dark">Vestibulum eu quam nec neque pellentesque efficitur id eget ...</td>
                            <td className="py-2 px-4 text-[16px] text-dark"><PaperClipOutlined /></td>
                        </tr>
                        {/*  */}
                        <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                <span className='my-auto'>EdTech</span></td>
                            <td className="py-2 px-4 text-[16px] text-dark">EdTech</td>
                            <td className="py-2 px-4 text-[16px] text-dark">Vestibulum eu quam nec neque pellentesque efficitur id eget ...</td>
                            <td className="py-2 px-4 text-[16px] text-dark"><PaperClipOutlined /></td>
                        </tr>
                        {/*  */}
                        <tr className='hover:bg-[#F6F8FE] cursor-pointer'>
                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                <span className='my-auto'>EdTech</span></td>
                            <td className="py-2 px-4 text-[16px] text-dark">EdTech</td>
                            <td className="py-2 px-4 text-[16px] text-dark">Vestibulum eu quam nec neque pellentesque efficitur id eget ...</td>
                            <td className="py-2 px-4 text-[16px] text-dark"><PaperClipOutlined /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* ADD DRAWER */}
            <ComposeNewNotification open={open} setOpen={setOpen} />
        </div>
    )
}

export default Notifications

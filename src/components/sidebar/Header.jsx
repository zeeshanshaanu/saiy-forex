import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import searchIcon from "../../assets/Icons/searchIcon.svg";
import Logo1 from "../../assets/images/Logo1.svg";
import "./sidebar.css";

const { Header } = Layout

const profileMenuItems = [
    {
        label: (
            <span>
                Profile
            </span>
        ),
        key: '0',
    },
    {
        label: (
            <span>
                Logout
            </span>
        ),
        key: '1',
    },
];

const SidebarHeader = () => {
    return (
        <Header className='bg-transparent px-7 h-[80px] border-b-[1px] border-[#ECF0F8]'>
            <div className="flex text-white justify-between my-auto">
                <div className="mt-[8px] relative">
                    <input
                        type="text"
                        placeholder='Search something...'
                        className="h-[44px] lg:w-[300px] w-auto pl-10 pr-5 text-dark border border-[#ECF0F8] rounded-[10px]"
                    />
                    <img src={searchIcon} alt="searchIcon" className='absolute top-[23px] left-[10px]' />
                </div>
                <div className="mt-[8px]">
                    <div className="flex gap-5">
                        <div className="my-auto">
                            <img src={Logo1} alt="Logo1" className='w-[40px] h-[40px] rounded-[10px]' />
                        </div>
                        <div className="my-auto">
                            <h4 className="text-dark text-[16px]">John&nbsp;Cena.</h4>
                        </div>
                        <Dropdown
                            className='my-auto'
                            overlay={
                                <Menu items={profileMenuItems} />
                            }
                        >
                            <div className='cursor-pointer'>
                                <DownOutlined className='text-[#828EB0] bg-[#ECF0F8] p-2 rounded-full' />
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default SidebarHeader

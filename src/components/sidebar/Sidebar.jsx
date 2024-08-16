import React, { useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import one from "../../assets/Icons/one.svg";
import two from "../../assets/Icons/two.svg";
import three from "../../assets/Icons/three.svg";
import four from "../../assets/Icons/four.svg";
import five from "../../assets/Icons/five.svg";
import six from "../../assets/Icons/six.svg";
import seven from "../../assets/Icons/seven.svg";
import eight from "../../assets/Icons/eight.svg";
import nine from "../../assets/Icons/nine.svg";
import logoutIcon from "../../assets/Icons/logoutIcon.svg";
import LogoText from "../../assets/images/LogoText.svg";
import Logo1 from "../../assets/images/Logo1.svg";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import LogoutModel from '../../screens/Auth-module/LogoutModel';

const { Sider } = Layout;


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    return (
        <Layout className=''>
            <div className="">
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className='bg-dark '>
                        <div className="flex justify-between bg-dark sidebar">
                            <div className="text-white my-[25px] pl-5">
                                {collapsed ?
                                    <img src={Logo1} alt="Logo1"
                                        onClick={() => setCollapsed(!collapsed)}
                                        className='cursor-pointer w-[50px] h-[50px]'
                                    /> :
                                    <img src={LogoText} alt="LogoText" />
                                }
                            </div>
                            <div className="my-auto mr-4">
                                {!collapsed &&
                                    <LeftOutlined className='text-white' onClick={() => setCollapsed(!collapsed)}
                                    />}
                            </div>
                        </div>
                        <div className="mt-10">
                            <Menu className='bg-dark min-h-[calc(110vh-0px)] flex flex-col justify-between mx-[5px]' defaultSelectedKeys={['1']}>
                                <Menu.Item className="mt-10" key="1" onClick={() => navigate("/Dashboard")} icon={<img src={nine} alt="Dashboard" />}>
                                    <span className='text-white'>Dashboard</span>
                                </Menu.Item>
                                <Menu.Item key="2" onClick={() => navigate("/Portfolios")} icon={<img src={one} alt="Portfolios" className="" />}>
                                    <span className='text-white'>Portfolios</span>
                                </Menu.Item>
                                <Menu.Item key="3" onClick={() => navigate("/Investors")} icon={<img src={two} alt="Investors" className="" />}>
                                    <span className='text-white'>Investors</span>
                                </Menu.Item>
                                <Menu.Item key="4" onClick={() => navigate("/MainAssociates")} icon={<img src={three} alt="Main Associates" className="" />}>
                                    <span className='text-white'>Associates</span>
                                </Menu.Item>
                                <Menu.Item key="5" onClick={() => navigate("/WithDrawals")} icon={<img src={four} alt="Withdrawals" className="" />}>
                                    <span className='text-white'>Withdrawals</span>
                                </Menu.Item>
                                <Menu.Item key="6" onClick={() => navigate("/UserManagement")} icon={<img src={five} alt="User Management" className="" />}>
                                    <span className='text-white'>User Management</span>
                                </Menu.Item>
                                <Menu.Item key="7" onClick={() => navigate("/Notifications")} icon={<img src={six} alt="Notifications" />}>
                                    <span className='text-white'>Notifications</span>
                                </Menu.Item>
                                <Menu.Item key="8" onClick={() => navigate("/ActivityLogs")} icon={<img src={seven} alt="Activity & Logs" className="" />}>
                                    <span className='text-white'>Activity & Logs</span>
                                </Menu.Item>
                                <Menu.Item key="9" onClick={() => navigate("/Settings")} icon={<img src={eight} alt="Settings" className="" />}>
                                    <span className='text-white'>Settings</span>
                                </Menu.Item>
                                <div className="flex-grow"></div>
                                <Menu.Item key="10" onClick={showDrawer}
                                    icon={<img src={logoutIcon} alt="Logout" className="t" />}>
                                    <span className='text-white'>Logout</span>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                    <LogoutModel open={open} setOpen={setOpen} />
                </Sider>
            </div>

            {/* <Layout>
            <Header className='bg-transparent px-10 h-[80px] border-b-[1px] border-[#F6F8FE]'>
                <div className="flex text-white justify-between my-auto">
                    <div className="mt-[8px] relative">
                        <input
                            type="text"
                            placeholder='Search something...'
                            className="h-[44px] lg:w-[300px] w-auto pl-10 pr-5 text-dark border border-[#F6F8FE] rounded-[10px]"
                        />
                        <img src={searchIcon} alt="searchIcon" className='absolute top-[23px] left-[10px]' />
                    </div>
                    <div className="mt-[8px]">
                        <div className="flex gap-5">
                            <div className="my-auto">
                                <img src={Logo1} alt="Logo1" className='w-[40px] h-[40px] rounded-[10px]' />
                            </div>
                            <div className="my-auto">
                                <h4 className="text-dark text-[16px]">John Cena.</h4>
                            </div>
                            <Dropdown
                                className='my-auto'
                                overlay={
                                    <Menu items={profileMenuItems} />
                                }
                            >
                                <div className='cursor-pointer'>
                                    <DownOutlined className='text-[#828EB0] bg-[#F6F8FE] p-2 rounded-full' />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </Header>

            </Layout> */}
        </Layout>
    );
};

export default Sidebar;

import React from 'react'
import SidebarHeader from '../../components/sidebar/Header';
import {   Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import DashboardCards from "../../components/Dashboard-Parts/DashboardCards"
import DashboardPortfolioTable from "../../components/Dashboard-Parts/DashboardPortfolioTable"

 
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

const Dashboard = () => {
    return (
        <div>
            <SidebarHeader />
            <div className="px-7 py-5 bg-[#ECF0F8]">
                <div className="flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Dashboard</h1>
                    </div>
                    <div className="Dropdown cursor-pointer my-auto">
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <p className="border border-[#ECF0F8] rounded-[10px] py-[10px] px-[20px]" onClick={(e) => e.preventDefault()}>
                                <DownOutlined />&nbsp;This Month
                            </p>
                        </Dropdown>
                        {/* DashboardCards */}
                    </div>
                </div>
                {/*  */}
                <div className="mt-5">
                    <DashboardCards />
                </div>
                {/*  */}
                <div className="mt-5">
                    <DashboardPortfolioTable />
                </div>
            </div>
        </div>

    )
}

export default Dashboard

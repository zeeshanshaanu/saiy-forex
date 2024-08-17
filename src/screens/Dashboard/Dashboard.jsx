import React from 'react'
import SidebarHeader from '../../components/sidebar/Header';
import DashboardCards from "../../components/Dashboard-Parts/DashboardCards"
import DashboardPortfolioTable from "../../components/Dashboard-Parts/DashboardPortfolioTable"
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "../../components/Dashboard-Parts/DashParts.css"

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
        <div className="bg-[#F6F8FE]">
            <div className="max-h-[100vh] overflow-auto">
                <div className="bg-white sticky top-0">
                    <SidebarHeader />
                </div>
                <div className="lg:flex md:flex justify-between px-5 pt-5">
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
                            <p className="border border-lightDray rounded-[10px] py-[10px] px-[20px]" onClick={(e) => e.preventDefault()}>
                                <DownOutlined />&nbsp;This Month
                            </p>
                        </Dropdown>
                    </div>
                </div>
                {/*  */}
                <div className="px-5">
                    <DashboardCards />
                </div>
                {/*  */}
                <div className="mt-5 px-5">
                    <DashboardPortfolioTable />
                </div>
            </div>
        </div>

    )
}

export default Dashboard

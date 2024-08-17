import React, { useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header';
import { Button, Dropdown } from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import TotalPortfolios from "../../assets/Icons/DashboardCards/TotalPortfolios.svg"
import TotalAllocated from "../../assets/Icons/DashboardCards/TotalAllocated.svg"
import TotalInvestors from "../../assets/Icons/DashboardCards/TotalInvestors.svg"
import CollectiveGrowthIcon from "../../assets/Icons/DashboardCards/CollectiveGrowthIcon.svg"
import AddPortfolio from './AddPortfolio';
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/images/Logo1.svg"
import { AreaChart, Area } from "recharts";


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

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const Portfolios = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    return (
        <div className="bg-[#F6F8FE]">
            <div className=" max-h-[100vh] overflow-auto">
                <div className="sticky top-0 bg-white">
                    <SidebarHeader />
                </div>
                <div className="lg:flex md:flex justify-between mt-5 px-5">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Portfolios</h1>
                    </div>
                    <div className="Dropdown cursor-pointer my-auto flex gap-2">
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
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 px-5'>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalPortfolios} alt={TotalPortfolios} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Total Portfolios</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">42</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalAllocated} alt={TotalAllocated} className='mt-2' />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Total&nbsp;Allocated&nbsp;Funds</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">$50,322</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={TotalInvestors} alt={TotalInvestors} />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Total Investors</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">13</h2>
                    </div>
                    {/*  */}
                    <div className="rounded-[10px] bg-white p-5 mt-5">
                        <img src={CollectiveGrowthIcon} alt={CollectiveGrowthIcon} className='mt-2' />
                        <h5 className="text-lightGray mt-[12px] text-[16px]">Collective Growth</h5>
                        <h2 className="text-dark text-[20px] font-bold mt-[12px]">$10,223</h2>
                    </div>
                </div>
                {/*  */}
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 px-5 mb-5'>
                    {/*  */}
                    <div onClick={() => navigate("/PortfolioDetails")} className="rounded-[10px] bg-white p-5 mt-5 cursor-pointer drop-shadow-md hover:drop-shadow-xl">
                        <div className="py-2 text-[16px] text-dark flex gap-2 w-[250px]">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[24px] h-[24px] cover my-auto' />
                            <p className='my-auto text-[16px] font-semibold'>SAIY Forex Premium Plus</p>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Minimum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$400</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Maximum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$10,000</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Investors</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">40</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Withdrawal Period</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">30 Days</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 w-full">
                            <AreaChart
                                width={280}
                                height={100}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <Area type="monotone" dataKey="uv" stroke="#E5B001" fill="#E5B001" />
                            </AreaChart>
                        </div>
                    </div>
                    {/*  */}
                    <div onClick={() => navigate("/PortfolioDetails")} className="rounded-[10px] bg-white p-5 mt-5 cursor-pointer drop-shadow-md hover:drop-shadow-xl">
                        <div className="py-2 text-[16px] text-dark flex gap-2 w-[250px]">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[24px] h-[24px] cover my-auto' />
                            <p className='my-auto text-[16px] font-semibold'>SAIY Forex Premium Plus</p>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Minimum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$400</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Maximum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$10,000</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Investors</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">40</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Withdrawal Period</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">30 Days</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 w-full">
                            <AreaChart
                                width={280}
                                height={100}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <Area type="monotone" dataKey="uv" stroke="#E5B001" fill="#E5B001" />
                            </AreaChart>
                        </div>
                    </div>
                    {/*  */}
                    <div onClick={() => navigate("/PortfolioDetails")} className="rounded-[10px] bg-white p-5 mt-5 cursor-pointer drop-shadow-md hover:drop-shadow-xl">
                        <div className="py-2 text-[16px] text-dark flex gap-2 w-[250px]">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[24px] h-[24px] cover my-auto' />
                            <p className='my-auto text-[16px] font-semibold'>SAIY Forex Premium Plus</p>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Minimum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$400</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Maximum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$10,000</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Investors</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">40</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Withdrawal Period</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">30 Days</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 w-full">
                            <AreaChart
                                width={280}
                                height={100}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <Area type="monotone" dataKey="uv" stroke="#E5B001" fill="#E5B001" />
                            </AreaChart>
                        </div>
                    </div>
                    {/*  */}
                    <div onClick={() => navigate("/PortfolioDetails")} className="rounded-[10px] bg-white p-5 mt-5 cursor-pointer drop-shadow-md hover:drop-shadow-xl">
                        <div className="py-2 text-[16px] text-dark flex gap-2 w-[250px]">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[24px] h-[24px] cover my-auto' />
                            <p className='my-auto text-[16px] font-semibold'>SAIY Forex Premium Plus</p>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Minimum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$400</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Maximum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$10,000</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Investors</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">40</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Withdrawal Period</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">30 Days</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 w-full">
                            <AreaChart
                                width={280}
                                height={100}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <Area type="monotone" dataKey="uv" stroke="#E5B001" fill="#E5B001" />
                            </AreaChart>
                        </div>
                    </div>
                    {/*  */}
                    <div onClick={() => navigate("/PortfolioDetails")} className="rounded-[10px] bg-white p-5 mt-5 cursor-pointer drop-shadow-md hover:drop-shadow-xl">
                        <div className="py-2 text-[16px] text-dark flex gap-2 w-[250px]">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[24px] h-[24px] cover my-auto' />
                            <p className='my-auto text-[16px] font-semibold'>SAIY Forex Premium Plus</p>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Minimum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$400</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Maximum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$10,000</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Investors</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">40</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Withdrawal Period</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">30 Days</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 w-full">
                            <AreaChart
                                width={280}
                                height={100}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <Area type="monotone" dataKey="uv" stroke="#E5B001" fill="#E5B001" />
                            </AreaChart>
                        </div>
                    </div>
                    {/*  */}
                    <div onClick={() => navigate("/PortfolioDetails")} className="rounded-[10px] bg-white p-5 mt-5 cursor-pointer drop-shadow-md hover:drop-shadow-xl">
                        <div className="py-2 text-[16px] text-dark flex gap-2 w-[250px]">
                            <img src={Logo1} alt={Logo1} className='rounded-full w-[24px] h-[24px] cover my-auto' />
                            <p className='my-auto text-[16px] font-semibold'>SAIY Forex Premium Plus</p>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Minimum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$400</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Maximum Investment</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">$10,000</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Investors</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">40</h5>
                            </div>
                            <div className="my-auto">
                                <h5 className="text-lightGray mt-[12px] text-[14px]">Withdrawal Period</h5>
                                <h5 className="text-dark text-[16px] mt-[4px]">30 Days</h5>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-4 w-full">
                            <AreaChart
                                width={280}
                                height={100}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <Area type="monotone" dataKey="uv" stroke="#E5B001" fill="#E5B001" />
                            </AreaChart>
                        </div>
                    </div>

                </div>
                {/*  */}
            </div>
            {/* ADD DRAWER */}
            <AddPortfolio open={open} setOpen={setOpen} />
        </div>
    )
}

export default Portfolios

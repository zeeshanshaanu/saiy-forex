import React from 'react'
import TotalPortfolios from "../../assets/Icons/DashboardCards/TotalPortfolios.svg"
import TotalAllocated from "../../assets/Icons/DashboardCards/TotalAllocated.svg"
import TotalInvestors from "../../assets/Icons/DashboardCards/TotalInvestors.svg"
import TotalWithdrawals from "../../assets/Icons/DashboardCards/TotalWithdrawals.svg"
const DashboardCards = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-5'>
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
                    <img src={TotalInvestors} alt={TotalInvestors} />
                    <h5 className="text-lightGray mt-[12px] text-[16px]">Total Associates</h5>
                    <h2 className="text-dark text-[20px] font-bold mt-[12px]">$10,223</h2>
                </div>
                {/*  */}
                <div className="rounded-[10px] bg-white p-5 mt-5">
                    <img src={TotalWithdrawals} alt={TotalWithdrawals} />
                    <h5 className="text-lightGray mt-[12px] text-[16px]">Total Withdrawals</h5>
                    <h2 className="text-dark text-[20px] font-bold mt-[12px]">$10,223</h2>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards

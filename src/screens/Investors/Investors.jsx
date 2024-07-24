import React from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Button } from 'antd'
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import Logo1 from "../../assets/images/Logo1.svg"
import { useNavigate } from 'react-router-dom';


const Investors = () => {
    const navigate = useNavigate()

    return (
        <div>
            {/* sticky top-0 */}
            <div className=" bg-white z-0">
                <SidebarHeader />
            </div>
            <div className="p-5 bg-[#ECF0F8] max-h-[100vh] overflow-scroll">
                <div className="flex justify-between ">
                    <div className=" my-auto">
                        <h1 className="text-[24px] font-bold">Investors</h1>
                    </div>
                    <div className="my-auto">
                        <Button type="dark"
                            className='bg-dark text-white h-[44px] rounded-[10px]'
                            // onClick={showDrawer}
                            icon={<PlusOutlined className='text-white' />}>Add New
                        </Button>
                    </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Name</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left"> Number</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Email</th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Address </th>
                                <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Bank Details </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Eleanor Pena</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(907) 555-0101 </td>
                                <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">3890 Poplar Dr.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">DE75500105171813784773</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Theresa Webb</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(252) 555-0126</td>
                                <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">FI7373123834799152</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Kristin Watson</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(480) 555-0103</td>
                                <td className="py-2 px-4 text-[16px] text-dark">sara.cruz@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">8558 Green Rd.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">AT642060431459252857</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Theresa Webb</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(252) 555-0126</td>
                                <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">FI7373123834799152</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Kristin Watson</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(480) 555-0103</td>
                                <td className="py-2 px-4 text-[16px] text-dark">sara.cruz@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">8558 Green Rd.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">AT642060431459252857</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Theresa Webb</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(252) 555-0126</td>
                                <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">FI7373123834799152</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Kristin Watson</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(480) 555-0103</td>
                                <td className="py-2 px-4 text-[16px] text-dark">sara.cruz@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">8558 Green Rd.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">AT642060431459252857</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Eleanor Pena</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(907) 555-0101 </td>
                                <td className="py-2 px-4 text-[16px] text-dark">debbie.baker@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">3890 Poplar Dr.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">DE75500105171813784773</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Theresa Webb</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(252) 555-0126</td>
                                <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">FI7373123834799152</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Kristin Watson</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(480) 555-0103</td>
                                <td className="py-2 px-4 text-[16px] text-dark">sara.cruz@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">8558 Green Rd.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">AT642060431459252857</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Theresa Webb</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(252) 555-0126</td>
                                <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">FI7373123834799152</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Kristin Watson</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(480) 555-0103</td>
                                <td className="py-2 px-4 text-[16px] text-dark">sara.cruz@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">8558 Green Rd.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">AT642060431459252857</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Theresa Webb</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(252) 555-0126</td>
                                <td className="py-2 px-4 text-[16px] text-dark">tim.jennings@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">7529 E. Pecan St.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">FI7373123834799152</td>
                            </tr>
                            {/*  */}
                            <tr className='hover:bg-[#ECF0F8] cursor-pointer' onClick={() => navigate('/InvestorDetail')}>
                                <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                    <img src={Logo1} alt={Logo1} className='rounded-full w-[22px] h-[22px] cover my-auto' />
                                    <span className='my-auto'>Kristin Watson</span></td>
                                <td className="py-2 px-4 text-[16px] text-dark">(480) 555-0103</td>
                                <td className="py-2 px-4 text-[16px] text-dark">sara.cruz@example.com</td>
                                <td className="py-2 px-4 text-[16px] text-dark">8558 Green Rd.</td>
                                <td className="py-2 px-4 text-[16px] text-dark">AT642060431459252857</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            {/*  */}

        </div>
    )
}

export default Investors

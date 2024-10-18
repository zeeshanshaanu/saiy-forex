import React, { useEffect, useState } from 'react'
import SidebarHeader from '../../components/sidebar/Header'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import Logo1 from "../../assets/images/Logo1.svg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AddInvestor from './AddInvestor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomizedDialogs from '../../components/Dialog/Dialog';
import NoDataFound from '../../components/NoData/NodataFound';
import Loader from '../../components/Loader/Loader';
const Investors = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [investor, setInvestor] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);

    const token = useSelector((state) => state?.auth?.token);

    console.log(investor);

    const GetUserProfile = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/investor", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
            setInvestor(response.data.data);
            setLoading(false)


        } catch (err) {
            console.error(err.response);
            setLoading(false)
        }
    };

    useEffect(() => {
        GetUserProfile();
    }, []);

    const showDrawer2 = () => {
        setOpenEdit(true);
    };

    const RefreshInvestorlist = () => {
        GetUserProfile(); // This will refresh the user profile
    };

    return (
        <div>
            {/* sticky top-0 */}
            <div className="h-[100vh] bg-[#F6F8FE]">
                <div className="max-h-[100vh] overflow-auto">

                    <div className="sticky top-0 bg-white z-0">
                        <SidebarHeader />
                    </div>
                    <div className="px-5 flex justify-between mt-5">
                        <div className=" my-auto">
                            <h1 className="text-[24px] font-bold">Investors</h1>
                        </div>
                        <div className="my-auto">
                            <Button type="dark"
                                className='bg-dark text-white h-[44px] rounded-[10px]'
                                onClick={showDrawer2}
                                icon={<PlusOutlined className='text-white' />}>Add New
                            </Button>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="px-5 overflow-x-auto my-5">
                        <table className="min-w-full bg-white rounded-[10px]">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Name</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Phone</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Email</th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Address </th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Bank Details </th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Status </th>
                                    <th className="py-2 px-4 font-[400] tetx-[14px] text-lightGray text-left">Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="6" className="text-center my-10"><Loader /></td>
                                    </tr>
                                ) : investor?.length > 0 ? (
                                    investor.map((item, index) => (
                                        <tr key={index} className='hover:bg-[#F6F8FE]'>
                                            <td className="py-2 px-4 text-[16px] text-dark flex gap-2">
                                                <img src={item?.image || Logo1} alt={item?.image || Logo1} className='rounded-full w-[40px] h-[40px] object-cover my-auto' />
                                                <span className='my-auto'>{item?.name}</span>
                                            </td>
                                            <td className="py-2 px-4 text-[16px] text-dark">{item?.phone}</td>
                                            <td className="py-2 px-4 text-[16px] text-dark">{item?.email}</td>
                                            <td className="py-2 px-4 text-[16px] text-dark">{item?.address}</td>
                                            <td className="py-2 px-4 text-[16px] text-dark">{item?.iban}</td>
                                            <td className="py-2 px-4 text-[16px] text-dark text-[16px]font-semibold text-textRed text-center">{item?.status}</td>
                                            <td className="py-2 px-4 text-[16px] text-dark">
                                                <span className='cursor-pointer my-auto'
                                                    onClick={() => navigate(`/InvestorDetail/${item?._id}`)}><RemoveRedEyeIcon /></span>
                                                <span className='cursor-pointer my-auto'>
                                                    <CustomizedDialogs
                                                        deleteID={item?._id}
                                                        onlistUpdate={RefreshInvestorlist}
                                                    />
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center"><NoDataFound /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*  */}
            <AddInvestor openEdit={openEdit} setOpenEdit={setOpenEdit} onlistUpdate={RefreshInvestorlist} />

        </div>
    )
}

export default Investors

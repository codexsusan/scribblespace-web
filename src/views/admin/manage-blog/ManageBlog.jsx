import React from 'react'
import Navbar from '../../../common/navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import { Body1, Body3, Heading2 } from '../../../common/typography/Typography';
import { yellow, darkyellow, black } from '../../../common/colors/colors';
import CustomButton from '../../../common/button/CustomButton';
import AdminNavbar from '../components/AdminNavbar';

function ManageBlog() {

    const navigate = useNavigate();

    const routeDashboard = () => {
        navigate("/admin/dashboard");
    }

    const routeManageBlog = () => {
        navigate('/admin/manage-blog');
    }

    const routeCreateBlog = () => {
        navigate("/admin/blog/create")
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const handleCreateBlog = () => {
        navigate('/admin/create-blog');
    }

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <AdminNavbar />
                <div className='w-full'>
                    <div className='mx-10 my-6 items-center w-5/6 flex justify-between'>
                        <div>
                            <Heading2>Manage Blog</Heading2>
                        </div>
                        <div>
                            <CustomButton handleClick={handleCreateBlog} customClass={`border bg-slate-50 hover:bg-slate-100`} text={`Create`} />
                        </div>
                    </div>
                    <div className='mt-6 mx-10 w-11/12'>
                        <table className='border w-full'>
                            <thead>

                                <tr className='bg-slate-100'>
                                    <td className='border w-1/4 px-2 py-3 text-center'>
                                        Title
                                    </td>
                                    <td className='border  px-2 py-3 text-center'>
                                        Description
                                    </td>
                                    <td className='border  px-2 py-3 text-center'>
                                        Visibility
                                    </td>
                                    <td className='border  px-2 py-3 text-center'>
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-slate-50'>
                                    <td className='border w-1/4 p-3 text-[18px] font-bold text-center'>

                                        Title Here
                                    </td>
                                    <td className='border w-1/4 p-3 text-center'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione, repudiandae eos porro amet excepturi
                                    </td>
                                    <td className='border w-1/4 p-3 text-center'>
                                        Visibility
                                    </td>
                                    <td className='border w-1/4 p-3 text-center'>
                                        <div>
                                            <button
                                                onClick={() => { }}
                                                type={``}
                                                className={`px-5 p-2 rounded fw-regular text-xl text-[${black}] bg-[${yellow}] hover:bg-[${darkyellow}]`}>
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ManageBlog

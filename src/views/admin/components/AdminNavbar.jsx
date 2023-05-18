import React from 'react'
import { Body1 } from '../../../common/typography/Typography';
import { useNavigate } from 'react-router-dom';

function AdminNavbar() {

    const navigate = useNavigate();

    const routeDashboard = () => {
        navigate('/admin/dashboard');
    }

    const routeManageBlog = () => {
        navigate('/admin/manage-blog');
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div className='w-1/6 border-r-2 p-10 h-11/12'>
            <div className='my-3 cursor-pointer hover:bg-slate-50 p-3' onClick={routeDashboard}>
                <Body1>Dashboard</Body1>
            </div>
            <div className='my-3 cursor-pointer hover:bg-slate-50 p-3' onClick={routeManageBlog}>
                <Body1>Manage Blog</Body1>
            </div>
            <div onClick={handleLogout} className='my-5 cursor-pointer hover:bg-slate-50 p-3'>
                <Body1>Log Out</Body1>
            </div>
        </div>
    )
}

export default AdminNavbar

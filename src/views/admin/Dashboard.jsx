import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import { Body1, Heading2, Heading4 } from '../../common/typography/Typography'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from './components/AdminNavbar';


function Dashboard() {

  const navigate = useNavigate();

  const routeDashboard = () => {
    navigate("/admin/dashboard");
  }

  const routeManageBlog = () => {
    navigate('/admin/manage-blog');
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex h-5/6'>
        <AdminNavbar />
        <div className='mx-10 w-full'>
          <Heading2>Dashboard</Heading2>
          <div className='flex w-full justify-center items-center h-full'>
            <div>
              This is the dashboard
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

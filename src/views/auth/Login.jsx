import React, { useState } from 'react'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import { yellow, darkyellow } from '../../common/colors/colors'

function login() {


    // Create usestate for email and password 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (event) => {
        const newEmail = event.target.value;
        console.log(newEmail);
        setEmail(newEmail);
    }

    const changePassword = (event) => {
        const newPassword = event.target.value;
        console.log(newPassword);
        setPassword(newPassword);
    }


    const handleLogin = (event) => {
        event.preventDefault();
        console.log(`Email: ${email} \nPassword: ${password}`);

    }
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex justify-center w-full items-center h-1/2'>
                <form onSubmit={(event) => { handleLogin(event) }} className='w-1/4'>
                    <div className='flex-col'>
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='mt-2 w-full'>
                            <input
                                onChange={changeEmail}
                                className='border p-3 w-full'
                                placeholder='Enter your email' type="email"
                                name="email"
                                id="email" />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="password">
                                Password
                            </label>
                        </div>
                        <div className='mt-2'>
                            <input
                                onChange={changePassword}
                                className='border p-3 w-full'
                                placeholder='Enter your password' type="password"
                                name="password"
                                id="password" />
                        </div>
                        <div>
                            <button
                                className={`bg-[${yellow}] hover:bg-[${darkyellow}] text-black p-3 mt-5 w-full`}
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default login

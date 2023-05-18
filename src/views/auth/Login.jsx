import React, { useState } from 'react'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import { yellow, darkyellow } from '../../common/colors/colors'
import { Link, useNavigate } from 'react-router-dom'
import { Body2 } from '../../common/typography/Typography'

function login() {

    const navigate = useNavigate();


    // Create usestate for email and password 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = import.meta.env.VITE_BASE_URL;

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await fetch(
                `${url}/auth/login`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            }
            ).then((res) => res.json())
                .then((data) => {
                    if (data.authToken == undefined) {
                        console.log(data.message);
                        return;
                    }
                    const token = data.authToken;
                    localStorage.setItem('authToken', token);
                    navigate("/home");
                });
        } catch (error) {
            console.log(error);
        }


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
                    <div className='mt-5 justify-center flex items-center '>
                        <Body2>
                            Don't have an account? <Link className='text-xl text-blue-500 cursor-pointer ml-2' to={"/register"}>Register</Link>
                        </Body2>

                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default login

import { React, useState } from 'react'
import Navbar from '../../common/navbar/Navbar'
import { yellow, darkyellow } from '../../common/colors/colors'
import Footer from '../../common/footer/Footer'
import { Body2 } from '../../common/typography/Typography'
import { Link, useNavigate } from 'react-router-dom'


function Register() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const url = import.meta.env.VITE_BASE_URL;


    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastName = (event) => {
        setLastName(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const changeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, password, confirmPassword)
        await fetch(
            `${url}/auth/register`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),
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
    }


    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex justify-center w-full items-center h-2/3'>
                <form onSubmit={(event) => { handleRegister(event) }} className='w-1/4'>
                    <div className='flex-col'>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className='mt-2 w-full'>
                            <input
                                onChange={changeFirstName}
                                className='border p-3 w-full'
                                placeholder='Enter your first name' type="text"
                                name="firstName"
                                id="firstName" />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className='mt-2 w-full'>
                            <input
                                onChange={changeLastName}
                                className='border p-3 w-full'
                                placeholder='Enter your last name' type="text"
                                name="lastName"
                                id="lastName" />
                        </div>
                        <div className='mt-5'>
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
                        <div className='mt-5'>
                            <label htmlFor="confirmpassword">
                                Confirm Password
                            </label>
                        </div>
                        <div className='mt-2'>
                            <input
                                onChange={changeConfirmPassword}
                                className='border p-3 w-full'
                                placeholder='Enter your confirm password' type="password"
                                name="confirmpassword"
                                id="confirmpassword" />
                        </div>
                        <div>
                            <button
                                className={`bg-[${yellow}] hover:bg-[${darkyellow}] text-black p-3 mt-5 w-full`}
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className='mt-5 justify-center flex items-center'>
                        <Body2>
                            Already have an account?
                            <Link className='text-xl ml-2 text-blue-500 cursor-pointer' to={"/login"}>
                                Login
                            </Link>
                        </Body2>

                    </div>
                </form>

            </div>

            <Footer />
        </div>
    )
}

export default Register

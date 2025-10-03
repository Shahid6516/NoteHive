import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-80 h-80 border rounded-2xl p-2'>

                <h1 className='text-center text-4xl mt-2'>Login</h1>
                <div className='mt-10 flex flex-col gap-4'>

                    <input type="email" placeholder='Email' className=' w-full border px-2 py-1.5 rounded-lg outline-none' />
                    <input type="password" placeholder='Password' className=' w-full border px-2 py-1.5 rounded-lg outline-none' />
                    <button className='bg-red-500 py-2.5 rounded-lg shadow-2xl'>SignUp</button>
                    <h3 className='text-center'>Don't have an account
                        <span className='text-lg hover:underline text-red-600 cursor-pointer' onClick={() => navigate("/signup")}> SignUp </span>
                    </h3>
                </div>

            </div>




        </div>




    )
}

export default Login
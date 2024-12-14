import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
            <div className='border-2 rounded-xl border-gray-700 p-10 shadow-lg bg-gray-800'>
                <h2 className='text-center text-2xl font-bold text-white mb-6'>Hey There!🖐🏻</h2>
                <form 
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required 
                        className='outline-none bg-transparent border-2 border-gray-600 text-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 transition duration-300 focus:border-blue-500' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required 
                        className='outline-none bg-transparent border-2 border-gray-600 text-white font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 transition duration-300 focus:border-blue-500' 
                        type="password" 
                        placeholder='Enter password' 
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-blue-600 font-semibold bg-blue-500 text-lg py-2 px-8 w-full rounded-full transition duration-300'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
    }
    
    export default Login;
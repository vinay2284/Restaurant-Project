import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { FaRegCircleUser, FaCartShopping } from "react-icons/fa6";
import { useState } from 'react';
import { useEffect, useRef } from 'react';

export const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const loginRef = useRef(null);
    const toggleLogin = () => {
        setShowLogin(prev => !prev);
    };
    const handleClickOutside = (event) => {
        if (loginRef.current && !loginRef.current.contains(event.target)) {
            setShowLogin(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <header className='fixed w-full shadow-md h-16 px-2 md:px-4 bg-white'>

            <div className='flex items-center h-full justify-between'>
                <Link to={"/"}>
                    <div className='h-10'>
                        <img className="h-full" src={logo} alt="Logo" />
                    </div>
                </Link>
                <div className='flex items-center h-full gap-3 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg font-light' >
                        <Link className=' text-gray-600 hover:text-black' to={"/"}>Home</Link>
                        <Link className=' text-gray-600 hover:text-black' to={"/menu"}>Menu</Link>
                        <Link className=' text-gray-600 hover:text-black' to={"/about"}>About</Link>
                        <Link className=' text-gray-600 hover:text-black' to={"/contact"}>Contact</Link>
                    </nav>
                    <div className='text-xl text-slate-600 relative'>
                        <div className="h-screen flex items-center pb-4">
                            <div className="relative py-2">
                                <div className="t-0 absolute left-3">
                                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div onClick={toggleLogin} className='text-2xl text-slate-600 cursor-pointer'>
                            <FaRegCircleUser />
                        </div>
                        {showLogin && (
                            <div ref={loginRef} className='absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl'>
                                <Link to="/login" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Login</Link>
                                <Link to="/register" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import dummyImg from '../../assets/dummyUser.png'


export const navLinks = (
    <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "bg-white  text-black font-semibold underline underline-offset-2" : ""}
            >
                Home
            </NavLink>


        </li>
        <li>
            <NavLink
                to="/task/addTask"
                className={({ isActive }) =>
                    isActive ? "bg-white  text-black font-semibold underline underline-offset-2" : ""}
            >
                Add Task
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/task/browse-tasks"
                className={({ isActive }) =>
                    isActive ? "bg-white  text-black font-semibold underline underline-offset-2" : ""}
            >
                Browse Task
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/task/my-posted-task"
                className={({ isActive }) =>
                    isActive ? " bg-white  text-black font-semibold underline underline-offset-2" : ""}
            >
                My Posted Task
            </NavLink>
        </li>
    </>
);

const conditionalLinks = <>
    <li>
        <NavLink
            to="/auth/login"
            className={({ isActive }) =>
                isActive ? " bg-white  text-black font-semibold underline underline-offset-2" : ""}
        >
            Login
        </NavLink>
    </li>

    <li>
        <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
                isActive ? " bg-white  text-black font-semibold underline underline-offset-2" : ""}
        >
            Sign up
        </NavLink>
    </li>
</>


const Navbar = () => {

    const { theme, setTheme, loading } = use(AuthContext);

    const { user, logOut } = use(AuthContext);
    // const [dbuser,setDbUser]= useState([]);
    // const {photoURL,email,displayName}=user;
    // console.log(photoURL);

    const handleLogout = () => {
        logOut();
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // useEffect(() => {
    //     if (!user) return;

    //     fetch('https://freelance-point-server.vercel.app/users')
    //         .then(res => res.json())
    //         .then(users => {
    //             const matchedUser = users.find(u => u.email === user.email);
    //             if (matchedUser) {
    //                 setDbUser(matchedUser);
    //             }
    //         })
    //         .catch(err => console.error("Error fetching users:", err));
    // }, [user]);

    // console.log(dbuser);






    return (
        <div className='bg-primary'>
            <div className="navbar md:w-10/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-100" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-base-200 text-base">
                            {navLinks}
                            {user ? '' : <>{conditionalLinks}</>}
                        </ul>
                    </div>
                    <NavLink to="/" className="text-base-200 dark:text-white font-semibold text-xl md:text-3xl">FreelancerPoint</NavLink>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base-200 text-base dark:text-white">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-4">
                    {loading ? (
                        <p><span className="loading loading-bars loading-xl"></span></p>
                    ) : (
                        <>
                            <div className="relative group">
                                <div>
                                    <div className="avatar cursor-pointer">
                                        <div className="w-12 rounded-full">
                                            <img src={user?.photoURL || dummyImg} alt="" />
                                        </div>
                                    </div>
                                    <div className="absolute -translate-x-1/2 top-full mt-3 bg-primary text-white text-sm px-3 py-1 rounded shadow transition-opacity opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                                        <div className='text-lg mb-2'>
                                            {user?.displayName || ''}
                                        </div>
                                        <div className='text-center'>
                                            {
                                                user && <Link to='/auth/login' onClick={handleLogout} className='btn'>Logout</Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {user ? (
                                ''
                            ) : (
                                <div className='hidden md:flex gap-3'>
                                    <Link to='/auth/login' className="btn btn-sm">Login</Link>
                                    <Link to='/auth/signup' className="btn btn-sm">Sign up</Link>
                                </div>
                            )}
                        </>
                    )}

                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="btn btn-sm"
                    >
                        {theme === "light" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

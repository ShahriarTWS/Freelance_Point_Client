import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';


export const navLinks = (
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addTask">Add Task</NavLink></li>
        <li><NavLink to="/browseTask">Browse Task</NavLink></li>
        <li><NavLink to="/myPostedTask">My Posted Task</NavLink></li>
    </>
);

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    const user = true;

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);



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
                        </ul>
                    </div>
                    <NavLink to="/" className="text-base-200 font-semibold text-2xl md:text-3xl">FreelancePoint</NavLink>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base-200 text-base">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-4">
                    {user ? (
                        <div className="avatar tooltip tooltip-bottom" data-tip="Your Profile">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://media.licdn.com/dms/image/v2/D4E03AQH65g40qjWCKA/profile-displayphoto-shrink_800_800/B4EZa0FNkJHoBc-/0/1746777987948?e=1753315200&v=beta&t=1mAfi1me6acQbobth_HB3oLgztFq704MvB9_yzo0hNI" alt="User" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-2 font-medium text-secondary dark:text-white">
                            <li className='btn'><NavLink to="/login">Login</NavLink></li>
                            <li className='btn'><NavLink to="/signup">Sign Up</NavLink></li>
                        </div>

                    )}

                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="btn btn-sm">
                        {theme === "light" ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>

                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

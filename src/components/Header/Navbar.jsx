import React, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';


export const navLinks = (
    <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `px-2 py-1 rounded 
        ${isActive
                        ? "bg-white   font-semibold underline underline-offset-2 text-black dark:text-white"
                        : "text-muted dark:text-white hover:underline"}`
                }
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

const Navbar = () => {

    const { theme, setTheme } = use(AuthContext);

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

//     fetch('http://localhost:3000/users')
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
                        </ul>
                    </div>
                    <NavLink to="/" className="text-base-200 dark:text-white font-semibold text-sm md:text-3xl">FreelancePoint</NavLink>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base-200 text-base dark:text-white">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-4">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="avatar btn btn-ghost btn-circle">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="User" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                                <li className="font-semibold text-center">{user.displayName}</li>
                                <li>
                                    <button onClick={handleLogout} className="btn btn-sm btn-error  mt-1">Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2 font-medium">
                            <NavLink to="/auth/login" className="btn btn-sm">Login</NavLink>
                            <NavLink to="/auth/signup" className="btn btn-sm">Sign Up</NavLink>
                        </div>
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

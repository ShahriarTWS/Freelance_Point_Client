import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AuthenticationPage from "../pages/Authentication/AuthenticationPage";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import TaskPage from "../pages/TaskPage/TaskPage";
import AddTask from "../pages/TaskPage/AddTask";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/auth',
        element: <AuthenticationPage></AuthenticationPage>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/task',
        element: <TaskPage></TaskPage>,
        children:([
           {
            path: '/task/addTask',
            element: <AddTask></AddTask>
           }
        ])
    }
])
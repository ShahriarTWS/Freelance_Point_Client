import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AuthenticationPage from "../pages/Authentication/AuthenticationPage";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import TaskPage from "../pages/TaskPage/TaskPage";
import AddTask from "../pages/TaskPage/AddTask";
import Loading from "../pages/Loading";
import FeaturedTasks from "../components/FeaturedTasks";
import TaskDetails from "../pages/TaskPage/TaskDetails";
import PrivateRoute from "../provider/PrivateRoute";
import MyPostedTasks from "../pages/TaskPage/MyPostedTasks";
import BrowseTasks from "../pages/TaskPage/BrowseTasks";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/task'),
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: '/',
                element: <FeaturedTasks></FeaturedTasks>,

            }
        ]
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
        element:
            <TaskPage></TaskPage>
        ,
        children: ([
            {
                path: '/task/addTask',
                element: <PrivateRoute>
                    <AddTask></AddTask>
                </PrivateRoute>
            },
            {
                path: '/task/taskDetails/:id',
                element: <PrivateRoute>
                    <TaskDetails></TaskDetails>
                </PrivateRoute>
            },
            {
                path: '/task/my-posted-task',
                element: <PrivateRoute>
                    <MyPostedTasks></MyPostedTasks>
                </PrivateRoute>
            },
            {
                path: '/task/browse-tasks',
                element: <BrowseTasks></BrowseTasks>
            }
        ])
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])
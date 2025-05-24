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
import InfoPage from "../pages/InfoPage/InfoPage";
import TermsAndConditions from "../pages/InfoPage/TermsAndCondition";
import PrivacyPolicy from "../pages/InfoPage/PrivacyPolicy";
import About from "../pages/InfoPage/About";
import Footer from "../components/Footer/Footer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://freelance-point-server.vercel.app/task'),
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
        path: '/info',
        element: <InfoPage></InfoPage>,
        children: ([
            {
                path: '/info/terms&condition',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/info/privacy-policy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/info/about',
                element: <About></About>
            }
        ])
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])
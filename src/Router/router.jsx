import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>This is error page..</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>
            },
            {
                path: 'jobs/:id',
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8800/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>
            },
            {
                path: 'myApplications',
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            }
        ]
    },
]);

export default router;
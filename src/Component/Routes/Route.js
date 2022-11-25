import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashBoard from "../Pages/DashBoard/DashBoard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/", element: <Main />, errorElement: <ErrorPage />, children: [
            { path: "/", element: <Home /> },
            { path: "/dashboard", element: <DashBoard /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/contactUs", element: <ContactUs /> },
        ]
    }
]);

export default router;
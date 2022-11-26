import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashBoard from "../Pages/DashBoard/DashBoard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products/Products";
import SignIn from "../Pages/SignInUp/SignIn";
import SignUp from "../Pages/SignInUp/SignUp";

const router = createBrowserRouter([
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    {
        path: "/", element: <Main />, errorElement: <ErrorPage />, children: [
            { path: "/", element: <Home /> },
            { path: "/dashboard", element: <DashBoard /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/contactUs", element: <ContactUs /> },
            { path: "//category/:id", element: <Products />, loader: ({ params }) => fetch(`http://localhost:5000/products/${params?.id}`) },
        ]
    },
]);

export default router;
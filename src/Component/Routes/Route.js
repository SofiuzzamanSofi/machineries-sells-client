import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../Layout/DashBoardLayOut/DashBoardLayOut";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllAdmin from "../Pages/DashBoard/AllAdmin/AllAdmin";
import AllBuyer from "../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products/Products";
import SignIn from "../Pages/SignInUp/SignIn";
import SignUp from "../Pages/SignInUp/SignUp";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/", element: <Main />, errorElement: <ErrorPage />, children: [
            { path: "/", element: <Home /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/contactUs", element: <ContactUs /> },
            { path: "/category/:id", element: <PrivetRoute><Products /></PrivetRoute>, loader: ({ params }) => fetch(`http://localhost:5000/products/${params?.id}`) },
            { path: "/category/all", element: <PrivetRoute><Products /></PrivetRoute>, loader: () => fetch(`http://localhost:5000/products/all`) },
        ]
    },
    {
        path: "/dashboard", element: <DashBoardLayOut />, errorElement: <ErrorPage />, children: [
            { path: "/dashboard/myOrders", element: <MyOrders /> },
            { path: "/dashboard/addProduct", element: <AddProduct /> },
            { path: "/dashboard/allSeller", element: <AllSeller /> },
            { path: "/dashboard/allBuyer", element: <AllBuyer /> },
            { path: "/dashboard/allAdmin", element: <AllAdmin /> },
        ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
]);

export default router;
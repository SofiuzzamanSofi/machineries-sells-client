import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../Layout/DashBoardLayOut/DashBoardLayOut";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllAdmin from "../Pages/DashBoard/AllAdmin/AllAdmin";
import AllBuyer from "../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller";
import MyBuyers from "../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products/Products";
import SignIn from "../Pages/SignInUp/SignIn";
import SignUp from "../Pages/SignInUp/SignUp";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    // homepage route ---
    {
        path: "/", element: <Main />, errorElement: <ErrorPage />, children: [
            { path: "/", element: <Home /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/contactUs", element: <ContactUs /> },
            { path: "/category/:id", element: <PrivetRoute><Products /></PrivetRoute>, loader: ({ params }) => fetch(`http://localhost:5000/products/${params?.id}`) },
            { path: "/category/all", element: <PrivetRoute><Products /></PrivetRoute>, loader: () => fetch(`http://localhost:5000/products/all`) },
        ]
    },
    // dash-board route----
    {
        path: "/dashboard", element: <DashBoardLayOut />, errorElement: <ErrorPage />, children: [
            { path: "/dashboard/myOrders", element: <MyOrders /> },
            { path: "/dashboard/addProduct", element: <AddProduct /> },
            { path: "/dashboard/myProducts", element: <MyProducts /> },
            { path: "/dashboard/myBuyers", element: <MyBuyers /> },
            { path: "/dashboard/allSeller", element: <AllSeller /> },
            { path: "/dashboard/allBuyer", element: <AllBuyer /> },
            { path: "/dashboard/allAdmin", element: <AllAdmin /> },
        ]
    },
    // sign in sign up route ---
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
]);

export default router;
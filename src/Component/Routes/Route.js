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
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
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
            { path: "/category/:id", element: <PrivetRoute><Products /></PrivetRoute>, loader: ({ params }) => fetch(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/products/${params?.id}`) },
            { path: "/category/all", element: <PrivetRoute><Products /></PrivetRoute>, loader: () => fetch(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/products/all`) },
            { path: "/product/:id", element: <PrivetRoute><ProductDetails /></PrivetRoute>, loader: ({ params }) => fetch(`https://machineries-sells-server-sofiuzzamansofi.vercel.app/product/${params?.id}`) },
        ]
    },
    // dash-board route----
    {
        path: "/dashboard", element: <PrivetRoute><DashBoardLayOut /></PrivetRoute>, errorElement: <ErrorPage />, children: [
            { path: "/dashboard", element: <MyOrders /> },
            { path: "/dashboard/addProduct", element: <PrivetRoute><AddProduct /></PrivetRoute> },
            { path: "/dashboard/myProducts", element: <PrivetRoute><MyProducts /></PrivetRoute> },
            { path: "/dashboard/myBuyers", element: <PrivetRoute><MyBuyers /></PrivetRoute> },
            { path: "/dashboard/allBuyer", element: <PrivetRoute><AllBuyer /></PrivetRoute> },
            { path: "/dashboard/allSeller", element: <PrivetRoute><AllSeller /></PrivetRoute> },
            { path: "/dashboard/allAdmin", element: <PrivetRoute><AllAdmin /></PrivetRoute> },
        ]
    },
    // sign in sign up route ---
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
]);

export default router;
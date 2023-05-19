import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import Error404 from "../Error404";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error404></Error404>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/mytoys',
            element: <PrivateRoute>
                <MyToys></MyToys>
            </PrivateRoute>
        },
        {
            path: '/addtoys',
            element: <PrivateRoute>
                <AddToys></AddToys>
            </PrivateRoute>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
      ],
    },
  ]);

  export default router;
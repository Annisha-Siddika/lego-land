import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ],
    },
  ]);

  export default router;
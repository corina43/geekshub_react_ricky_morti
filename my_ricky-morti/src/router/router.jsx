import {createBrowserRouter} from "react-router-dom";
import { NavBar } from "../components/navbar";
import { Home } from "../layout/home/Home";
import { Login } from "../layout/login/Login";
import { Register } from "../layout/register/Register";


export const rutas = createBrowserRouter([

  {
    path: "home",
    element: <Home/>
},

  {
    path: "Navbar",
    element: <NavBar/>
},

    {
        path: "register",
        element: <Register/>
    },
    {
        path: "login",
        element: <Login/>
    },
   
  
]);


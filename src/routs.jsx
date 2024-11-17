

import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
  import HomeLayout from "./layout/HomeLayout";
  import CategoryNews from "./components/CategoryNews";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NewsDetails from "./pages/NewsDetails";
import PrivetRoute from "./layout/PrivetRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element: <Navigate to={"category/01"}></Navigate>
        },
        {
          path: "category/:id",
          element: <CategoryNews></CategoryNews>,
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          
        }
      ]
    },
    {
        path: "/news/:id",
        element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
         
          {
            path: "/auth/login",
            element: <Login></Login>
          },
          {
            path: "/auth/register",
            element: <Register></Register>
          }
        ]
    },
    {
        path: "*",
        element: <div>Error</div>
    }

  ]);


  export default router;
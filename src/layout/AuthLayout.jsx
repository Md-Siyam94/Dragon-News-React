import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins">
            <div  className="w-11/12 py-2 mx-auto ">
            <Navbar></Navbar>
            </div>
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContex)
    const location = useLocation()
    
    if(loading){
        return <div><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return (
       <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    );
};

export default PrivetRoute;
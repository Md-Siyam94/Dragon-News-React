import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [showpassword, setPassword] = useState(false)
    const [error, setError] = useState("")
    const { login } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()

        const form = new FormData(e.targer)
        const email = form.get("email");
        const password = form.get("password")

        login(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state ? location.state : "/")
                
            })
            .catch(error => {
                setError(error.message.slice(16))
            })

    }

    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">

                <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="text-center my-3">
                            <h1 className="text-2xl font-bold">Login your Account</h1>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label relative">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type={showpassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered " required />
                            <button onClick={()=>setPassword(!showpassword)} className="absolute pt-1 mt-12 ml-72">
                                   {showpassword ? <FaEye /> : <FaEyeSlash /> }
                            </button>

                            <div className="my-3">
                                <p className="text-red-500 font-semibold text-sm">{error}</p>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-black opacity-80 text-white font-semibold p-3">Login</button>
                        </div>
                        <div className="mx-auto my-3">
                            <p>Don’t have an Account ? <Link className="font-semibold text-violet-900" to={"/auth/register"}>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
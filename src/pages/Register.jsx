import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [showpassword,setPassword] = useState(false)
    const {registerUser} = useContext(AuthContex)

    const handleRegister =(e)=>{
        e.preventDefault()

       const form = new FormData(e.target);
       const name = form.get("name");
       const photoURL = form.get("photoURL");
       const email = form.get("email");
       const password = form.get("password");


        registerUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log("ERROr",error.message)
        })

    }

    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">

                <div className=" bg-base-100 w-full max-w-md min-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="text-center my-3">
                            <h1 className="text-2xl font-bold">Register your Account</h1>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URl" className="input input-bordered" required />
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
                            <input type={showpassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <button onClick={()=>setPassword(!showpassword)} className="absolute pt-1 mt-12 ml-80">
                                   {showpassword ? <FaEye /> : <FaEyeSlash /> }
                            </button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className=" items-center flex gap-2 cursor-pointer">
                                <input type="checkbox"  className="checkbox" />
                                <span className="label-text ">Accept Tearms and Conditions</span>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-black opacity-90 text-white font-semibold p-3">Register</button>
                        </div>
                        <div className="mx-auto my-3">
                            <p>Already have an Account ? <Link className="font-semibold text-violet-900" to={"/auth/login"}>Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};



export default Register;
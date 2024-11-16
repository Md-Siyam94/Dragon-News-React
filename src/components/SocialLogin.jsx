import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const SocialLogin = () => {
    return (
        <div>
            <h3 className="font-semibold">Login With</h3>
            <div className="mt-3 ">
                <button className="flex px-2 md:px-0 gap-3 items-center border py-2 w-full justify-center ">
                    <FcGoogle className="text-2xl"/> Login With Google
                </button>
                <button className="flex px-2 md:px-0  gap-3 items-center border mt-2 py-2 w-full justify-center">
                    <FaGithub className="text-2xl"/> Login With GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
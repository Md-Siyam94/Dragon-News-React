import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const SocialLogin = () => {
    return (
        <div>
            <h3 className="font-semibold">Login With</h3>
            <div className="mt-3 ">
                <button className="flex gap-3 items-center border py-2 w-full justify-center text-blue-600">
                    <FaGoogle /> Login With Google
                </button>
                <button className="flex  gap-3 items-center border mt-2 py-2 w-full justify-center">
                    <FaGithub /> Login With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center bg-base-200 p-2 gap-2">
            <p className="py-2 px-3 bg-[#d72050] text-white font-semibold">Latest</p>
            <Marquee className="space-x-10 p-2  ">
                <Link to={"/news"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quia?</Link>
                <Link to={"/news"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quia?</Link>
                <Link to={"/news"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quia?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
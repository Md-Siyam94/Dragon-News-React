import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews"
import LeftAsside from "../components/LeftAsside";
import Navbar from "../components/Navbar";
import RightAsside from "../components/RightAsside";



const HomeLayout = () => {
    return (
        <div className="font-poppins w-11/12 mx-auto">
            <header><Header></Header></header>
            <section >
                <LatestNews></LatestNews>
            </section>
            <nav ><Navbar></Navbar></nav>
            <main className="grid grid-cols-12 gap-4">
                <aside className="col-span-3 "><LeftAsside></LeftAsside></aside>
                <section className="col-span-6 "><Outlet></Outlet></section>
                <aside className="col-span-3"><RightAsside></RightAsside></aside>
            </main>

        </div>
    );
};

export default HomeLayout;
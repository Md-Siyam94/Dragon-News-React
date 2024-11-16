import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightAsside from "../components/RightAsside";
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetails = () => {

    const data = useLoaderData()
    const news = data.data[0]
    const {image_url,details,rating,thumbnail_url,title,total_view} = news
    return (
        <div className="mb-32">
            <header><Header></Header></header>
            <h2 className="text-xl font-semibold p-4 ml-6">Dragon News</h2>
            <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
            
                <section className="col-span-9">
                    <div className="card bg-base-100  shadow-xl">
                        <figure className="px-6 pt-6">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className=" my-7 items-center px-6">
                            <h2 className="card-title my-4">{title}</h2>
                            <p className="my-4">{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id}`} className="p-3 flex items-center border bg-pink-600 font-semibold text-white "><FaArrowLeft /> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3"><RightAsside></RightAsside></aside>
            </main>
        </div>
    );
};

export default NewsDetails;
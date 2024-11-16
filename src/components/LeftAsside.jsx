import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Category from "./Category";
{/* <Category category={category}></Category> */}

const LeftAsside = () => {

    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=> res.json())
        .then(data=> {
            setCategory(data.data.news_category)
        })
        .catch(error=> {
            console.log("ERROr", error.message)
        })
    },[])
    console.log(category)
    return (
        <div>
            <h3>All Categories</h3>
            <div className="flex flex-col mt-6 gap-1 ">
                {
                    category.map(category=> <NavLink to={`category/${category.category_id}`} className="btn bg-base-100 text-start" category={category} key={category.id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAsside;
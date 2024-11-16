import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data} = useLoaderData()
    
  
    return (
        <div>
            <h2>Dragon News Home</h2>
            <div>
                {
                    data.map((news)=> <NewsCard key={news._id} news={news}></NewsCard> )
                }
            </div>
        </div>
    );
};

export default CategoryNews;
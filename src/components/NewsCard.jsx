import React from "react";
import { FaStar, FaEye, FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className=" bg-white border border-gray-300 rounded-lg shadow-md p-4 relative">
      {/* Author Section */}
      <div className="flex items-center mb-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="text-sm font-medium text-gray-800">{news.author.name}</h4>
          <p className="text-xs text-gray-500">
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {news.title}
      </h3>

      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full  object-cover rounded-md mb-3"
      />

      {/* Details */}
      <p className="text-sm text-gray-600 mb-3">
        {news.details.slice(0, 120)}...
      </p>

      {/* Read More */}
      <Link
        to={`/news/${news._id}`}
        className="text-sm text-blue-500 font-medium underline hover:text-blue-700 mb-3 inline-block"
      >
        Read More
      </Link>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center text-orange-500 text-sm">
          <FaStar className="mr-1" />
          {news.rating.number}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaEye className="mr-1" />
          {news.total_view}
        </div>
      </div>

      {/* Badge */}
      {news.others_info.is_trending && (
        <div className="absolute top-2 right-2 flex items-center bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded">
          <FaFire className="mr-1" />
          Trending
        </div>
      )}
    </div>
  );
};

export default NewsCard;

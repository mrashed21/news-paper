/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";

const SingleNews = ({ singleNews }) => {
  return (
    <div className=" p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className=" flex gap-2">
          <img
            src={singleNews.author.img}
            alt={singleNews.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{singleNews.author.name}</h3>
            <p className="text-gray-500 text-sm">
              {new Date(singleNews.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className=" flex gap-5 text-2xl text-gray-500">
          <span>
            <FaRegBookmark />
          </span>
          <span>
            <FaShareAlt />
          </span>
        </div>
      </div>
      <h2 className="font-bold text-lg mb-2">{singleNews.title}</h2>
      <img
        src={singleNews.thumbnail_url}
        alt={singleNews.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">
        {singleNews.details.slice(0, 150)}...{" "}
        <span className="text-blue-500">Read More</span>
      </p>
      <div className="divider"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ReactStars
            count={5}
            value={singleNews.rating.number}
            size={24}
            isHalf={true}
            edit={false}
            activeColor="#ffd700"
            emptyIcon={<AiFillStar className="text-gray-300" />}
            filledIcon={<AiFillStar className="text-yellow-500" />}
          />
          <span className="ml-2 text-sm font-semibold text-gray-600">
            {singleNews.rating.number}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaEye />
          <span className="ml-1">{singleNews.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((news) => setCategories(news.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold">All Category</h2>
      <div className="flex flex-col gap-2 mt-5">
        {categories.map((category) => (
          <NavLink
            className={
              ({ isActive }) =>
                isActive
                  ? "btn text-red-500 font-bold text-lg" 
                  : "btn text-gray-700 text-lg"
            }
            to={`/category/${category.category_id}`}
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;

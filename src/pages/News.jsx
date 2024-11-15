import { useLoaderData } from "react-router-dom";
import SingleNews from "../components/SingleNews";

const News = () => {
  const { data: news } = useLoaderData();
  // console.log(news);
  return (
    <>
      <div className="mt-5 space-y-5">
        {news.length > 0 ? (
          news.map((singleNews) => (
            <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews>
          ))
        ) : (
          <p>No news found</p>
        )}
      </div>
    </>
  );
};

export default News;

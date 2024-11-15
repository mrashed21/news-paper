import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Leatest = () => {
  return (
    <div className="flex items-center p-2 bg-gray-200 gap-4 ">
      <p className="px-3 py-1 bg-[#D72050] text-white">Latest</p>
      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex gap-10">
          <Link to="/news">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to="/news">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to="/news">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to="/news">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default Leatest;

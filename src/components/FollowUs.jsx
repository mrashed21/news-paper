import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const FollowUs = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Follow Us</h2>

      <div className="join join-vertical flex *:bg-base-100 mt-3">
        <button className="btn join-item justify-start">
          <span className="text-3xl">
            <FaFacebook />
          </span>
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <span className="text-3xl">
            <FaXTwitter />
          </span>
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <span className="text-3xl">
            <FaInstagram />
          </span>
          Instragram
        </button>
      </div>
    </div>
  );
};

export default FollowUs;

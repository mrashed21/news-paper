import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Login With</h2>
      <div className=" flex flex-col gap-2 mt-5">
        <button className="btn btn-outline">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn btn-outline"><FaGithub />  Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;

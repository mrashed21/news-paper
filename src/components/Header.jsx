import logo from "../assets/logo.png";
import DynamicTime from "./DynamicTime";
import Leatest from "./Leatest";
const Header = () => {
  return (
    <>
      <div className=" flex flex-col items-center">
        <div className="w-[300px] mt-5">
          <img className="w-full " src={logo} alt="" />
        </div>
        <p className="mt-2 text-gray-500 font-medium text-lg">
          Journalism Without Fear or Favour
        </p>
        <p>
          <DynamicTime />
        </p>
        <section className=" mt-5">
          <Leatest />
        </section>
      </div>
    </>
  );
};

export default Header;

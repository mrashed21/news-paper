import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const route = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Career", path: "/career" },
  ];
  return (
    <div className="flex justify-between items-center mt-5">
      <div className=""></div>
      <div className="flex gap-10">
        {route.map((singelRoute) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " text-red-500 font-medium text-xl"
                : " text-gray-700 text-xl font-medium"
            }
            key={singelRoute.id}
            to={singelRoute.path}
          >
            {singelRoute.name}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-2xl">
          <FaRegCircleUser />
        </p>
        <button className="btn btn-neutral rounded-none ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

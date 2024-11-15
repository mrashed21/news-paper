import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default AuthLayouts;

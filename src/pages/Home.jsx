import { Outlet } from "react-router-dom";
import FollowUs from "../components/FollowUs";
import Header from "../components/Header";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <header>
        <Header />
      </header>
      <nav className=" ">
        <Navbar />
      </nav>
      <main className=" md:grid grid-cols-12 gap-5">
        <aside className="col-span-3 ">
          <LeftNavbar />
        </aside>
        <div className="col-span-6 ">
          <h2 className="text-xl font-semibold">Dragon News Home</h2>
          <Outlet />
        </div>
        <aside className="col-span-3">
          <RightNavbar />
          <section className="mt-5">
            <FollowUs />
          </section>
        </aside>
      </main>
    </div>
  );
};

export default Home;

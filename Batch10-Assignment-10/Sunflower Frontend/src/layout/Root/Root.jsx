import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      {/* <div className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container"> */}
      <div className="min-h-[calc(100vh-350px)] dark:bg-slate-900 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

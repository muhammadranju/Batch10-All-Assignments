import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container">
        <div className="min-h-[calc(100vh-340px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;

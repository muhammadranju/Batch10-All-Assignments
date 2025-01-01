import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Review from "../../components/Review/Review";
import StatComponents from "../../components/StatComponents/StatComponents";
import BlogSection from "../../components/BlogSection/BlogSection";

const Home = () => {
  return (
    <div className="dark:bg-slate-900">
      <Helmet>
        <title>Home Page | Visa Navigator</title>
      </Helmet>

      <Banner />
      <section className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container">
        <StatComponents />
        <Review />
        <BlogSection />
      </section>
    </div>
  );
};

export default Home;

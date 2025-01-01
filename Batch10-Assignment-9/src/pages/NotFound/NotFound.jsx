import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" mt-52">
      <Helmet>
        <title>404 Page Not Found | Lingo Bingo</title>
      </Helmet>

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto  max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-teal-500 ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Something&lsquo;s missing.
            </p>
            <p className="mb-4 text-lg font-semibold text-gray-500 ">
              Sorry, we can&rsquo;t find that page. You&lsquo;ll find lots to
              explore on the home page.{" "}
            </p>
            <Link
              to="/"
              className="inline-flex btn bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none text-white rounded-full focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center  my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="lg:bg-gradient-to-b bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto px-6 py-14 flex  lg:flex-row items-center flex-col-reverse">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold mb-6 leading-tight">
              Explore worldwide artifacts <br /> and their collection history.
            </h1>
            <p className="mb-8 text-lg lg:w-[80%]">
              Uncover the beauty and history of artifacts worldwide with our
              platform. Contribute and preserve the tales for future
              generations.
            </p>

            <Link to="/artifacts">
              <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[3px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-gray-800 text-sm  backdrop-blur-3xl bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-3 text-white font-semibold rounded-xl shadow-lg hover:opacity-90">
                  Explore Artifacts
                </span>
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 my-8 lg:mt-0">
            <img
              src="/images/Phaistos-Disc.jpg"
              alt="Hero Image"
              className="rounded-lg shadow-lg mx-auto w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-10">
      <Helmet>
        <title>About | Lingo Bingo</title>
      </Helmet>
      <section className="overflow-hidden  bg-white ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="./languages-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="languages-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="languages-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-teal-500">
                  About
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Our Mission
                </h2>
                <p className="mb-5 text-base text-body-color ">
                  Easy Languages is a network of content creators who are
                  passionate about language learning and intercultural exchange.
                  We operate as a franchise business, granting licenses to local
                  teams and providing regular training and feedback to all of
                  our partners. As Easy Languages, we both produce our own media
                  (for example with the production of Easy German and Easy
                  Spanish), but also support local teams to establish their own
                  brands and businesses.
                </p>
                <Link
                  to={"/start-learning"}
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent px-20 bg-teal-500 rounded-full hover:bg-opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

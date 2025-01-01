import { Link } from "react-router-dom";

export const Newsletter = () => {
  return (
    <div className="px-4 pt-10 pb-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
        <div className="text-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Subscribe to our newsletter
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="b039bae0-fdd5-4311-b198-8557b064fce0"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Subscribe to our</span>
              </span>{" "}
              newsletter
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              The newsletter is the best way to stay up to date with our latest
              updates and exclusive content.
            </p>
          </div>
          <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-3 rounded-md hover:opacity-90"
            >
              Subscribe
            </button>
          </div>
          <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
            By subscribing, you agree to our{" "}
            <Link to="/" className="text-deep-purple-accent-400">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/" className="text-deep-purple-accent-400">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";

export const HeroSectionBottom = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 container mx-auto">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-64 lg:h-fit"
          src="/images/pyramids.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Explore
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="inline-block text-deep-purple-accent-400">
              Start Exploring history of the <br className="hidden md:block" />{" "}
              world in one place.
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Explore artifacts from all around the world and discover the stories
            behind them. Join our community and contribute to the preservation
            of history.
          </p>
          <div className="flex items-center gap-x-3">
            <Link
              to="/artifacts"
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Get started
            </Link>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

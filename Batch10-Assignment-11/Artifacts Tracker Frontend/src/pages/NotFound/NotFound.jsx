import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-64 text-gray-800 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          <h2 className="mt-6 text-6xl font-extrabold ">404</h2>
          <p className="mt-2 text-3xl font-bold  ">Page not found</p>
          <p className="mt-2 text-sm text-gray-600 ">
            Sorry, we couldn&apos;t find this person you&apos;re looking for.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18m-9-9l9 9-9 9"
              />
            </svg>
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

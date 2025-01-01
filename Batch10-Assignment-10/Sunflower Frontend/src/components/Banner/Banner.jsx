import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import LatestVisas from "../LatestVisas/LatestVisas";
const Banner = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateVisa, setUpdateVisa] = useState(null);

  // Fetch visas added by the logged-in user
  useEffect(() => {
    const fetchVisas = async () => {
      // Replace with your API endpoint
      const response = await fetch(
        "https://sunflower-bankend-api.vercel.app/visas"
      );
      const data = await response.json();
      const visas = data.visas.slice(0, 6);
      setVisas(visas);
      setLoading(false);
    };

    fetchVisas();
  }, []);

  return (
    <div className="min-h-screen bg-base ">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-b from-indigo-800 via-indigo-600 to-indigo-400">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 bg-[url('/images/airplane.png')] bg-no-repeat bg-cover bg-center filter blur-sm"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Highlighted Heading */}
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block drop-shadow-lg text-white ">
                Welcome to Visa Navigator
              </span>
              <span className="block text-slate-200 mt-3 drop-shadow-lg">
                <Typewriter
                  words={["Simple.", "Fast.", "Reliable."]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            {/* Highlighted Subtitle */}
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl drop-shadow-lg">
              Your trusted companion in navigating the visa application process.
              Get started today!
            </p>

            {/* CTA Button */}
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/all-visas"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-lg"
              >
                Explore Visas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Visas Section */}
      <div className="w-11/12 mx-auto lg:w-11/12 md:w-11/12 xl:container mt-20">
        <div className="flex flex-col justify-center text-center items-center">
          <h2 className="text-center text-4xl font-bold tracking-tight dark:text-slate-100 text-gray-900 sm:text-5xl">
            Latest Visas from our Customers
          </h2>
          <p className="mt-4 dark:text-slate-100 text-gray-500 sm:text-xl lg:max-w-2xl text-center">
            Find detailed visa requirements, processing times, fees, and
            application methods for over 100 countries worldwide.
          </p>
        </div>
        <LatestVisas visas={visas} loading={loading} />
      </div>
    </div>
  );
};

export default Banner;

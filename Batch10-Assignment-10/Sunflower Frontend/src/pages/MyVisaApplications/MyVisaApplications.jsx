import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { LuDelete } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import MyVisaAppSkCard from "../../components/Cards/SkCard";

const MyVisaApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          `https://sunflower-bankend-api.vercel.app/applications?userEmail=${user?.email}`
        ); // Replace with your API endpoint
        const data = await response.json();
        setApplications(data.application);

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleCancel = async (id) => {
    try {
      swal({
        title: "Are you sure?",
        text: "Do you want to cancel this application?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          swal("Your application file has been deleted!", {
            icon: "success",
          });
          const response = await fetch(
            `https://sunflower-bankend-api.vercel.app/applications/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            setApplications(applications.filter((app) => app._id !== id));
            // alert("Application canceled successfully!");
          }
        } else {
          swal("Your application file has not been canceled!", {
            icon: "error",
          });
        }
      });
    } catch (error) {
      console.error("Failed to cancel application:", error);
    }
  };

  const handelSearchFunction = async (e) => {
    e.preventDefault();

    setLoading(true);
    const searchValue = e.target.elements.search.value;
    console.log(searchValue);

    const response = await fetch(
      `https://sunflower-bankend-api.vercel.app/applications/s/${searchValue}?userEmail=${user?.email}`
    );
    const data = await response.json();
    setApplications(data.application);
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen  py-8 px-4">
      <Helmet>
        <title>My Visas Applications | Visa Navigator</title>
      </Helmet>
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-2xl dark:text-slate-100 font-bold mb-6 text-center">
          My Visa Applications
        </h1>

        <form
          onSubmit={handelSearchFunction}
          className="max-w-md mx-auto mb-10"
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              name="search"
              className="block w-full p-4 ps-10 text-sm dark:text-slate-100 dark:bg-slate-800/50 text-gray-900 border  rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your applications..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
            >
              Search
              <IoSearch className="text-xl ml-2" />
            </button>
          </div>
        </form>
        {applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          ""
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              <MyVisaAppSkCard />
              <MyVisaAppSkCard />
              <MyVisaAppSkCard />
              <MyVisaAppSkCard />
              <MyVisaAppSkCard />
              <MyVisaAppSkCard />
            </>
          ) : (
            applications.map((app) => (
              <div
                key={app._id}
                className="bg-white dark:bg-slate-800/50 dark:text-slate-100 rounded-lg shadow-md p-4"
              >
                <img
                  src={app.countryImage}
                  alt={app.country_name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold">{app.country_name}</h2>
                <p className="text-sm">Visa Type: {app.visa_type}</p>
                <p className="text-sm">
                  Processing Time: {app.processing_time}
                </p>
                <p className="text-sm">Fee: ${app.fee}</p>
                <p className="text-sm">Validity: {app.validity}</p>
                <p className="text-sm">
                  Application Method: {app.application_method}
                </p>
                <div className="mt-4">
                  <h3 className="text-md font-medium">Applicant Information</h3>
                  <p className="text-sm">
                    Name: {app.firstName} {app.lastName}
                  </p>
                  <p className="text-sm">Email: {app.email}</p>
                  <p className="text-sm">
                    Applied Date:{" "}
                    {new Date(app.appliedDate).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleCancel(app._id)}
                  className="bg-red-500 text-white flex items-center justify-center px-4 py-2 mt-4 rounded-md hover:bg-red-600 w-full"
                >
                  Cancel Application
                  <LuDelete className="text-xl ml-2" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyVisaApplications;

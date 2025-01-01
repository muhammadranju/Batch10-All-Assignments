import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import moment from "moment";

const VisaDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visas, setVisas] = useState({});
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const [applicationData, setApplicationData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    appliedDate: moment().format("L"), // Current Date
    country_name: "",
    visa_type: "",
    processing_time: "",
    fee: "",
    application_method: "",
    validity: "",
    countryImage: "",
  });

  const { visaID } = useParams();

  const handleApply = async () => {
    setApplicationData((prevData) => ({
      ...prevData,
      fee: visas?.fee || "", // Use fetched fee or fallback
      email: user?.email || "",
      country_name: visas?.country_name || "",
      visa_type: visas?.visa_type || "",
      processing_time: visas?.processing_time || "",
      application_method: visas?.application_method || "",
      validity: visas?.validity || "",
      countryImage: visas?.countryImage || "",
    }));
    const response = await fetch(
      `https://sunflower-bankend-api.vercel.app/applications`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      }
    );

    if (response.ok) {
      setIsModalOpen(false);
      toast.success("Application Submitted Successfully!");
      swal({
        title: "Your Application has been submitted!",
        text: "Application Submitted Successfully!",
        icon: "success",
        button: "Ok",
      });
    } else {
      toast.error("Failed to submit application. Please try again.");
    }

    console.log("Application Submitted:", applicationData);
  };

  useEffect(() => {
    const fetchVisas = async () => {
      // Replace with your API endpoint
      const response = await fetch(
        `https://sunflower-bankend-api.vercel.app/visas/${visaID}`
      );
      const data = await response.json();
      setVisas(data.visa);

      setApplicationData((prevData) => ({
        ...prevData,
        fee: data.visa?.fee || "",
        email: user?.email || "",
        country_name: data.visa?.countryName || "", // Adjust field name
        visa_type: data.visa?.visaType || "",
        processing_time: data.visa?.processingTime || "",
        application_method: data.visa?.applicationMethod || "",
        validity: data.visa?.validity || "",
        countryImage: data.visa?.countryImage || "",
      }));
      setLoading(false);
    };

    fetchVisas();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RotatingLines
          visible={true}
          height="50"
          width="50"
          strokeColor="#3b82f6"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
        />
      </div>
    );
  }
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-20">
      <Helmet>
        <title>{visas?.countryName} - My Visa Details | Visa Navigator</title>
      </Helmet>
      <div className="w-full max-w-4xl dark:bg-slate-800/50 dark:text-slate-100  bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          {visas?.countryName} Visa Details
        </h1>
        <img
          src={visas?.countryImage}
          alt={visas?.countryName}
          className="w-full h-fit shadow-md object-cover rounded-lg mb-6"
        />
        <div className="space-y-4">
          <p>
            <strong>Visa Type:</strong> {visas?.visaType}
          </p>
          <p>
            <strong>Processing Time:</strong> {visas?.processingTime}
          </p>
          <p>
            <strong>Fee:</strong> ${visas?.fee}
          </p>
          <p>
            <strong>Validity:</strong> {visas?.validity}
          </p>
          <p>
            <strong>Application Method:</strong> {visas?.applicationMethod}
          </p>
          <p>
            <strong>Age Restriction:</strong> {visas?.ageRestriction}+
          </p>
          <p>
            <strong>Required Documents:</strong>
            <ul className="list-disc list-inside ml-4">
              {visas?.requiredDocuments?.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </p>
          <p>
            <strong>Description:</strong> {visas?.description}
          </p>
        </div>
        <button
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          Apply for Visa
        </button>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="w-full max-w-md dark:bg-slate-800 dark:text-slate-100 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Apply for Visa</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleApply();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  placeholder="Enter your email"
                  required
                  className="w-full px-3  py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={applicationData.firstName}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      firstName: e.target.value,
                    })
                  }
                  placeholder="Enter your first name"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700  focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={applicationData.lastName}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      lastName: e.target.value,
                    })
                  }
                  placeholder="Enter your last name"
                  required
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700  focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Applied Date
                </label>
                <input
                  type="text"
                  value={applicationData.appliedDate}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      appliedDate: e.target.value,
                    })
                  }
                  disabled
                  className="w-full px-3 py-2 dark:bg-slate-700  border rounded-md shadow-sm bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  mb-2">Fee</label>
                <input
                  type="number"
                  value={applicationData?.fee}
                  disabled
                  className="w-full px-3 py-2 dark:bg-slate-700  border rounded-md shadow-sm bg-gray-100"
                />
              </div>

              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 dark:bg-slate-600  px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-20">
        <Link to={"/all-visas"}>
          <button className="cursor-pointer rounded-xl  bg-gradient-to-r  from-indigo-700   to-indigo-500  px-10 shadow-lg  py-3 text-base font-medium text-white transition hover:bg-opacity-90">
            See all visas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VisaDetails;

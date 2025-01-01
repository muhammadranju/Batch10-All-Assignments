import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
// import axios from "axios";
import { toast } from "react-hot-toast";

import swal from "sweetalert";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

import { IoAdd } from "react-icons/io5";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: 0,
    fee: 0,
    validity: "",
    applicationMethod: "",
    email: user?.email,
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          requiredDocuments: [...prevData.requiredDocuments, value],
        };
      } else {
        return {
          ...prevData,
          requiredDocuments: prevData.requiredDocuments.filter(
            (doc) => doc !== value
          ),
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://sunflower-bankend-api.vercel.app/visas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        swal({
          title: "Successfully Added Visa!",
          text: "Your visa has been added successfully!",
          icon: "success",
          button: "Okk!!",
        });
        setFormData({
          countryImage: "",
          countryName: "",
          visaType: "",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: 0,
          fee: 0,
          validity: "",
          applicationMethod: "",
        });
      } else {
        toast.error("Failed to add visa. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to add visa. Please try again.");
    }
  };

  return (
    <div className=" flex items-center justify-center px-4 py-20">
      <Helmet>
        <title>Add New Visa | Visa Navigator</title>
      </Helmet>
      <div className="w-full max-w-4xl bg-white dark:bg-slate-800/50 rounded-lg dark:border dark:border-slate-100/40 shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-slate-100">
          Add New Visa
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Country Image */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Country Image URL<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.countryImage}
              onChange={(e) =>
                setFormData({ ...formData, countryImage: e.target.value })
              }
              placeholder="Enter image URL"
              required
              className="w-full px-3 py-2 border  rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            />
          </div>
          {/* Country Name */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Country Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.countryName}
              onChange={(e) =>
                setFormData({ ...formData, countryName: e.target.value })
              }
              placeholder="Enter country name"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            />
          </div>
          {/* Visa Type */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Visa Type<span className="text-red-500">*</span>
            </label>
            <select
              value={formData.visaType}
              onChange={(e) =>
                setFormData({ ...formData, visaType: e.target.value })
              }
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            >
              <option value="">Select visa type</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>
          {/* Processing Time */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Processing Time<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.processingTime}
              onChange={(e) =>
                setFormData({ ...formData, processingTime: e.target.value })
              }
              placeholder="Enter processing time"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            />
          </div>
          {/* Required Documents */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Required Documents<span className="text-red-500">*</span>
            </label>
            <div className="space-y-2 lg:space-x-5 flex lg:flex-row flex-col">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Valid passport"
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-primary h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm dark:text-slate-100 text-gray-700">
                  Valid passport
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Visa application form"
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-primary h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm dark:text-slate-100 text-gray-700">
                  Visa application form
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Recent passport-sized photograph"
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-primary h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm dark:text-slate-100 text-gray-700">
                  Recent passport-sized photograph
                </span>
              </label>
            </div>
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter a short description"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            ></textarea>
          </div>
          {/* Age Restriction */}
          <div className="flex gap-x-5 justify-between w-full">
            <div className="w-full">
              <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
                Age Restriction<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.ageRestriction}
                onChange={(e) =>
                  setFormData({ ...formData, ageRestriction: e.target.value })
                }
                placeholder="Enter age restriction"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
              />
            </div>
            {/* Fee */}
            <div className="w-full">
              <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
                Fee<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.fee}
                onChange={(e) =>
                  setFormData({ ...formData, fee: e.target.value })
                }
                placeholder="Enter visa fee"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
              />
            </div>
          </div>
          {/* Validity */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Validity<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.validity}
              onChange={(e) =>
                setFormData({ ...formData, validity: e.target.value })
              }
              placeholder="Enter validity period"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            />
          </div>
          {/* Application Method */}
          <div>
            <label className="block text-sm font-medium dark:text-slate-100 text-gray-700 mb-2">
              Application Method<span className="text-red-500">*</span>
            </label>
            <select
              value={formData.applicationMethod}
              onChange={(e) =>
                setFormData({ ...formData, applicationMethod: e.target.value })
              }
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 dark:bg-slate-700/30 dark:text-slate-100 focus:border-indigo-500"
            >
              <option value="">Select application method</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center transition duration-200"
          >
            Add Visa <IoAdd className="text-xl ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;

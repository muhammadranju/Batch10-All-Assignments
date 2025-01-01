import React, { useState, useEffect, useContext } from "react";
import CardSkeletons from "../../components/Cards/CardSkeletons";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { MdDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import MyAddedVisasSK from "../../components/Cards/MyAddedVisasSK";

const MyAddedVisas = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateVisa, setUpdateVisa] = useState(null);
  const { user } = useContext(AuthContext);
  // Fetch visas added by the logged-in user
  useEffect(() => {
    const fetchVisas = async () => {
      // Replace with your API endpoint
      const response = await fetch(
        `https://sunflower-bankend-api.vercel.app/visas?userEmail=${user.email}`
      );
      const data = await response.json();
      setVisas(data.visas);
      setLoading(false);
    };

    fetchVisas();
  }, []);

  // Delete a visa
  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Do you want to delete this visa?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal("Visa deleted successfully!", {
          icon: "success",
        });

        const response = await fetch(
          `https://sunflower-bankend-api.vercel.app/visas/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setVisas(visas.filter((visa) => visa._id !== id));
        }
      } else {
        swal("Failed to delete visa.", {
          icon: "error",
        });
      }
    });
  };

  // Update visa functionality
  const handleUpdate = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint

    const response = await fetch(
      `https://sunflower-bankend-api.vercel.app/visas/${updateVisa._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateVisa),
      }
    );

    if (response.ok) {
      setVisas((prev) =>
        prev.map((visa) => (visa._id === updateVisa._id ? updateVisa : visa))
      );
      setUpdateVisa(null);
      swal({
        title: "Update Successfully!",
        text: "Your visa Information updated!",
        icon: "success",
        button: "Close",
      });
    } else {
      swal({
        title: "Error Visa Update",
        text: "Your visa Information could not be updated!",
        icon: "error",
        button: "Close",
      });
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <Helmet>
        <title>My Added Visas | Visa Navigator</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl dark:text-slate-100 font-bold mb-6 text-center">
          My Added Visas
        </h1>
        {visas.length === 0 && (
          <p className="text-center dark:text-slate-100 text-gray-500">
            No visas found.
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              <MyAddedVisasSK />
              <MyAddedVisasSK />
              <MyAddedVisasSK />
              <MyAddedVisasSK />
              <MyAddedVisasSK />
              <MyAddedVisasSK />
            </>
          ) : (
            visas.map((visa) => (
              <div
                key={visa._id}
                className="bg-white dark:bg-slate-800 rounded-lg dark:text-slate-100 shadow-md p-4"
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold">{visa.countryName}</h2>
                <p className="text-sm">Visa Type: {visa.visaType}</p>
                <p className="text-sm">
                  Processing Time: {visa.processingTime}
                </p>
                <p className="text-sm">Fee: ${visa.fee}</p>
                <p className="text-sm">Validity: {visa.validity}</p>
                <p className="text-sm">
                  Application Method: {visa.applicationMethod}
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => setUpdateVisa(visa)}
                    className="bg-indigo-600 flex items-center text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    <TiEdit className="text-xl" /> Update
                  </button>
                  <button
                    onClick={() => handleDelete(visa._id)}
                    className="bg-red-500 flex items-center text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    <MdDeleteForever className="text-xl" /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
          {}
        </div>
      </div>

      {/* Update Visa Modal */}
      {updateVisa && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className=" dark:bg-slate-800 dark:text-slate-100 bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Update Visa</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Country Name
                </label>
                <input
                  type="text"
                  value={updateVisa.countryName}
                  onChange={(e) =>
                    setUpdateVisa({
                      ...updateVisa,
                      countryName: e.target.value,
                    })
                  }
                  required
                  className="w-full dark:bg-slate-700 px-3 py-2 border rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Visa Type
                </label>
                <input
                  type="text"
                  value={updateVisa.visaType}
                  onChange={(e) =>
                    setUpdateVisa({ ...updateVisa, visaType: e.target.value })
                  }
                  required
                  className="w-full dark:bg-slate-700  px-3 py-2 border rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Processing Time
                </label>
                <input
                  type="text"
                  value={updateVisa.processingTime}
                  onChange={(e) =>
                    setUpdateVisa({
                      ...updateVisa,
                      processingTime: e.target.value,
                    })
                  }
                  required
                  className="w-full dark:bg-slate-700  px-3 py-2 border rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fee</label>
                <input
                  type="number"
                  value={updateVisa.fee}
                  onChange={(e) =>
                    setUpdateVisa({ ...updateVisa, fee: e.target.value })
                  }
                  required
                  className="w-full dark:bg-slate-700  px-3 py-2 border rounded-md shadow-sm"
                />
              </div>
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setUpdateVisa(null)}
                  className=" dark:bg-slate-600 bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;

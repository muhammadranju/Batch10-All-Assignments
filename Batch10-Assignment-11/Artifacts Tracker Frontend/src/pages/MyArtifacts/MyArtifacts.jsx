/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert"; // For SweetAlert
import { IoMdClose } from "react-icons/io";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/AuthProvider";
import { CardsSkeleton3 } from "../../components/CardsSkeleton/CardsSkeleton";
import { SlLike } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const MyArtifacts = () => {
  const { user, setRefetch, setLoading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Dummy Data for Artifacts added by the logged-in user
  const [userArtifacts, setUserArtifacts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArtifact, setCurrentArtifact] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    artifactName: "",
    imageUrl: "",
    artifactType: "",
    createdAt: "",
    discoveredAt: "",
    historicalContext: "",
    discoveredBy: "",
    presentLocation: "",
  });

  useEffect(() => {
    const getArtifacts = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_BackendURL
        }/api/artifacts/my-artifacts?userEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = await response.json();
      setUserArtifacts(data.data);
      setIsLoading(false);
    };
    getArtifacts();
    setRefetch(Date.now());
  }, []);

  // Handle Update Button Click
  const handleUpdateClick = (artifact) => {
    setCurrentArtifact(artifact);
    setUpdatedData({ ...artifact }); // Pre-populate the form with existing data

    setIsModalOpen(true); // Open the modal
  };

  // Handle Delete Button Click
  const handleDeleteClick = (artifactId) => {
    Swal({
      title: "Are you sure?",
      text: "Once deleted, this artifact cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      try {
        if (willDelete) {
          // setLoading(true);
          const sendDeleteRequest = await fetch(
            `${import.meta.env.VITE_BackendURL}/api/artifacts/${artifactId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`,
              },
            }
          );
          const data = await sendDeleteRequest.json();
          // Update the artifact in the state
          setUserArtifacts((prevArtifacts) =>
            prevArtifacts.filter((artifact) => artifact._id !== artifactId)
          );
          Swal("Deleted!", "Your artifact has been deleted.", "success");
        } else {
          Swal("Cancelled", "Your artifact has not been deleted.", "error");
        }
        // setLoading(false);

        if (!isLoading) {
          navigate("/artifacts");
        }
      } catch (error) {
        console.log(error);
      }

      if (willDelete) {
        // Simulate deleting the artifact
        Swal("Deleted!", "Your artifact has been deleted.", "success");
        // Logic for deleting the artifact from the database goes here
      }
    });
  };

  // Handle Form Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Update Submission
  // Handle Update Submission
  const handleUpdateSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const sendUpdateRequest = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/artifacts/${
          currentArtifact.slug
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({
            artifactName: updatedData.artifactName,
            imageUrl: updatedData.imageUrl,
            artifactType: updatedData.artifactType,
            historicalContext: updatedData.historicalContext,
            createdAt: updatedData.createdAt,
            discoveredAt: updatedData.discoveredAt,
            discoveredBy: updatedData.discoveredBy,
            presentLocation: updatedData.presentLocation,
          }),
        }
      );

      const data = await sendUpdateRequest.json();

      if (sendUpdateRequest.ok) {
        // Update the artifact in the state
        setUserArtifacts((prevArtifacts) =>
          prevArtifacts.map((artifact) =>
            artifact.slug === currentArtifact.slug
              ? { ...artifact, ...data.artifact }
              : artifact
          )
        );

        Swal("Updated!", "Your artifact has been updated.", "success");
        setIsModalOpen(false); // Close the modal
      } else {
        Swal(
          `Error: ${data.message}`,
          "Failed to update artifact. Please try again.",
          "error"
        );
      }
      setLoading(false);
    } catch (error) {
      console.error("Update Error:", error);
      Swal("Error", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="py-16 px-6 w-11/12 lg:w-11/12 md:w-11/12 xl:container mx-auto ">
      <Helmet>
        <title>My Artifacts Page | Historical Artifacts</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        My Artifacts
      </h1>

      {/* Check if user has any artifacts */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 h-full">
        {isLoading ? (
          <>
            <CardsSkeleton3 />
            <CardsSkeleton3 />
            <CardsSkeleton3 />
            <CardsSkeleton3 />
            <CardsSkeleton3 />
            <CardsSkeleton3 />
            <CardsSkeleton3 />
            <CardsSkeleton3 />
          </>
        ) : (
          <>
            {userArtifacts?.map((artifact) => (
              <div
                key={artifact._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 h-full"
              >
                <img
                  src={artifact.imageUrl}
                  alt={artifact.artifactName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {artifact.artifactName}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Type: {artifact.artifactType}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Created At: {artifact.createdAt}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Discovered At: {artifact.discoveredAt}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Discovered By: {artifact.discoveredBy}
                  </p>
                  <p className="text-gray-600 mt-2 flex items-center gap-x-2">
                    <SlLike /> {artifact.likes}
                  </p>

                  <div className="flex justify-between items-center mt-4 ">
                    {/* Update Button */}
                    <button
                      onClick={() => handleUpdateClick(artifact)}
                      className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-3 rounded-md hover:opacity-90"
                    >
                      Update
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteClick(artifact.slug)}
                      className="bg-gradient-to-r from-red-500 to-red-800 text-white px-4 py-3 rounded-md hover:opacity-90"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Modal for Update Artifact */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 lg:w-[30%] w-[95%]">
            <div className="flex justify-between items-center ">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Update Artifact
              </h2>
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer text-xl">
                <IoMdClose onClick={() => setIsModalOpen(false)} />
              </span>
            </div>

            <form onSubmit={handleUpdateSubmit}>
              {/* Artifact Name */}
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Artifact Name
              </label>
              <input
                type="text"
                id="artifactName"
                name="artifactName"
                value={updatedData.artifactName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              {/* Artifact Image URL */}
              <label className="block text-gray-700 mb-2" htmlFor="image">
                Artifact Image (valid URL)
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={updatedData.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              `{" "}
              <label className="block text-gray-700 mb-2" htmlFor="image">
                Artifact Image (valid URL)
              </label>
              <textarea
                type="text"
                id="historicalContext"
                name="historicalContext"
                value={updatedData.historicalContext}
                onChange={handleInputChange}
                cols={40}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              ></textarea>
              `{/* Artifact Type */}
              <label className="block text-gray-700 mb-2" htmlFor="type">
                Artifact Type
              </label>
              <select
                id="artifactType"
                name="artifactType"
                value={updatedData.artifactType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              >
                <option value="Tools">Tools</option>
                <option value="Weapons">Weapons</option>
                <option value="Documents">Documents</option>
                <option value="Writings">Writings</option>
                <option value="Statue">Statue</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Stone Tablet">Stone Tablet</option>
                <option value="Painting">Painting</option>
                <option value="Mask">Mask</option>
                <option value="Cup">Cup</option>
                <option value="Textile">Textile</option>
                <option value="Architecture">Architecture</option>
                <option value="Religious Cloth">Religious Cloth</option>
                <option value="Art">Art</option>
                <option value="Treasure">Treasure</option>
                <option value="Helmet">Helmet</option>
                <option value="Statue">Statue</option>
                {/* Add more options as needed */}
              </select>
              <div className="flex justify-between items-center gap-x-5">
                {/* Created At */}
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="createdAt"
                  >
                    Created At
                  </label>
                  <input
                    type="text"
                    id="createdAt"
                    name="createdAt"
                    value={updatedData.createdAt}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                </div>

                <div>
                  {/* Discovered At */}
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="discoveredAt"
                  >
                    Discovered At
                  </label>
                  <input
                    type="text"
                    id="discoveredAt"
                    name="discoveredAt"
                    value={updatedData.discoveredAt}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-x-5">
                {/* Discovered By */}

                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="discoveredBy"
                  >
                    Discovered By
                  </label>
                  <input
                    type="text"
                    id="discoveredBy"
                    name="discoveredBy"
                    value={updatedData.discoveredBy}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                </div>

                <div>
                  {" "}
                  {/* Present Location */}
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="location"
                  >
                    Present Location
                  </label>
                  <input
                    type="text"
                    id="presentLocation"
                    name="presentLocation"
                    value={updatedData.presentLocation}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                </div>
              </div>
              {/* Update Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-3 rounded-md hover:opacity-90"
              >
                Update Artifact
              </button>
            </form>

            {/* Close Modal Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      {userArtifacts?.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          <img src="/Blogging-bro.svg" className="lg:w-[40%] mx-auto" />
          <p className="text-gray-600 lg:w-[30%] mx-auto mt-2">
            You don&apos;t have any artifacts yet. Add some artifacts to your
            collection!
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyArtifacts;

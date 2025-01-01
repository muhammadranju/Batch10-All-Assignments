import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { CardsSkeletonDetails } from "../../components/CardsSkeleton/CardsSkeleton";
import { RotatingLines } from "react-loader-spinner";
import { AiFillLike } from "react-icons/ai";

const ArtifactDetails = () => {
  const [liked, setLiked] = useState(false); // Track the like state
  const [loading, setLoading] = useState(false);
  const [artifact, setArtifact] = useState({});
  const { id } = useParams();

  const [isLiked, setIsLiked] = useState(false);

  // Fetch the artifact data when the component mounts
  useEffect(() => {
    const getArtifact = async () => {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/artifacts/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setArtifact(data.data);
      setIsLiked(data.data.likes);
      setLoading(false);
      // setLiked(data.data.likes > 0); // Set liked state based on the likes count
    };
    getArtifact();
  }, [id]);

  console.log(isLiked);
  // Toggle like/dislike when the button is clicked
  const toggleLike = async () => {
    try {
      // Toggle the like status
      const newLikedState = !liked;
      setLiked(newLikedState); // Update the UI immediately

      // Send the updated like state to the backend
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/artifacts/${id}`,
        {
          method: "PATCH", // Ensure the method is PATCH
          headers: {
            "Content-Type": "application/json", // This should be correct
            Authorization: `Bearer ${Cookies.get("token")}`, // Ensure this header is set correctly
          },
          body: JSON.stringify({
            liked: newLikedState, // Send updated state
          }),
        }
      );
      if (!liked) {
        setIsLiked((prev) => prev + 1);
      } else {
        setIsLiked((prev) => prev - 1);
      }
      const data = await response.json();
      console.log(data);
      if (data.success) {
        // If backend update is successful, show a success message
        toast.success("Like status updated successfully");
      } else {
        // Revert the UI if something went wrong on the backend
        setLiked(!newLikedState);
        toast.error("Error updating like status");
      }
    } catch (error) {
      console.error("Error toggling like status", error);
      // Revert the UI in case of any error
      setLiked(!liked);
      toast.error("Error occurred while updating like status");
    }
  };
  loading && (
    <>
      <div className="flex justify-center items-center mt-72">
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
    </>
  );
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center py-16 lg:px-0 px-3">
      <Helmet>
        <title>Artifact Details Page | Historical Artifacts</title>
      </Helmet>
      {loading ? (
        <>
          <CardsSkeletonDetails />
        </>
      ) : (
        <>
          <div className="max-w-5xl w-full bg-white/20 rounded-lg shadow-xl overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-full bg-gray-200 relative">
              <img
                src={artifact?.imageUrl}
                alt={artifact?.artifactName}
                className="w-full h-full object-cover"
              />
              <button
                onClick={toggleLike}
                className={`absolute top-4 right-4 p-2 rounded-full ${
                  liked
                    ? "bg-red-400 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } shadow-md transition duration-300`}
              >
                {liked ? "❤️" : "♡"}
              </button>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800">
                {artifact?.artifactName}
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {artifact?.historicalContext}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed flex items-center gap-x-2">
                Liked: <AiFillLike className="text-xl text-red-500 font-bold" />{" "}
                <span className="text-red-500 font-bold">
                  {isLiked || artifact?.likes}
                </span>
              </p>
            </div>

            {/* Metadata Section */}
            <div className="px-8 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Creation Date</p>
                <p className="text-lg text-gray-800 font-medium">
                  {artifact?.createdAt}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Discovered Date</p>
                <p className="text-lg text-gray-800 font-medium">
                  {artifact?.discoveredAt}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Material</p>
                <p className="text-lg text-gray-800 font-medium">
                  {artifact?.artifactType}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Discovered By</p>
                <p className="text-lg text-gray-800 font-medium">
                  {artifact?.discoveredBy}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Present Location</p>
                <p className="text-lg text-gray-800 font-medium">
                  {artifact?.presentLocation}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Artifact Added By</p>
                <p className="text-lg text-gray-800 font-medium">
                  {artifact?.addedBy?.name}
                </p>
              </div>
            </div>

            {/* Actions Section */}
            <div className="px-8 py-6 border-t border-gray-200 flex justify-between items-center">
              <button
                onClick={toggleLike}
                className={`px-6 py-2 text-white font-medium rounded-md hover:bg-blue-700 hover:opacity-90 transition duration-300 ${
                  liked
                    ? "bg-gradient-to-r from-red-500 to-red-800"
                    : "bg-gradient-to-r from-blue-500 to-blue-800"
                }`}
              >
                <span>{liked ? "Dislike ❤️" : "Like  ♡"}</span>
              </button>
              <button
                onClick={() => {
                  window.navigator.clipboard.writeText(window.location.href);
                  toast.success("Copied to clipboard!");
                }}
                className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition duration-300"
              >
                Share
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArtifactDetails;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardsSkeleton } from "../CardsSkeleton/CardsSkeleton";
import { SlLike } from "react-icons/sl";
// import CardsSkeleton from "../CardsSkeleton/CardsSkeleton";

const ArtifactCards = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getArtifacts = async () => {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BackendURL}/api/artifacts?likeCount=true`
      );
      const data = await response.json();
      console.log(data);
      setArtifacts(data.data);
      setLoading(false);
    };
    getArtifacts();
  }, []);

  return (
    <>
      {/* Featured Artifacts Section */}
      <section className="w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto lg:px-6 py-24">
        <div className="text-center mb-8">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-center text-gray-800 ">
            Featured Artifacts
          </h2>
          <p className="text-center lg:w-1/2 mx-auto text-gray-600 mt-5">
            Artifacts are the physical objects that have been used by humans to
            create history.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-5 gap-5 ">
          {loading ? (
            <>
              <CardsSkeleton />
              <CardsSkeleton />
              <CardsSkeleton />
              <CardsSkeleton />
              <CardsSkeleton />
              <CardsSkeleton />
            </>
          ) : (
            <>
              {artifacts?.slice(0, 6)?.map((artifact) => (
                <div
                  key={artifact?._id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                >
                  <img
                    src={artifact?.imageUrl}
                    alt="Artifact"
                    className="rounded-lg mb-4 w-full h-64 object-cover"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {artifact?.artifactName}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {artifact?.historicalContext.length > 50
                      ? artifact?.historicalContext.slice(0, 120) + "..."
                      : artifact?.historicalContext}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-700 font-medium flex items-center gap-x-2">
                      <SlLike />
                      {artifact?.likes}
                    </span>
                    <Link
                      to={`/artifact/${artifact?.slug}`}
                      className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/artifacts"
            className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-10 rounded-md hover:opacity-90"
          >
            See All
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArtifactCards;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { CardsSkeleton2 } from "../../components/CardsSkeleton/CardsSkeleton";

const LikedArtifacts = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Dummy Data for Liked Artifacts
  // const likedArtifacts = [
  //   {
  //     id: 1,
  //     title: "Golden Ring",
  //     image: "https://via.placeholder.com/300x200",
  //     description: "A beautifully crafted golden ring with intricate designs.",
  //   },
  //   {
  //     id: 2,
  //     title: "Ancient Scroll",
  //     image: "https://via.placeholder.com/300x200",
  //     description: "A rare ancient scroll from the early 12th century.",
  //   },
  //   {
  //     id: 3,
  //     title: "Stone Pendant",
  //     image: "https://via.placeholder.com/300x200",
  //     description: "A pendant made from stone with mystical carvings.",
  //   },
  //   {
  //     id: 4,
  //     title: "Silver Cup",
  //     image: "https://via.placeholder.com/300x200",
  //     description: "An elegantly designed silver cup used in royal ceremonies.",
  //   },
  //   {
  //     id: 5,
  //     title: "Golden Statue",
  //     image: "https://cdn.audleytravel.com/-/-/79/527793-terracotta-army.jpg",
  //     description: "A small golden statue representing an ancient deity.",
  //   },
  //   {
  //     id: 6,
  //     title: "Bronze Sword",
  //     image:
  //       "https://assets.editorial.aetnd.com/uploads/2012/05/this-day-in-history-07-19-1799-rosetta-stone-found.jpg",
  //     description: "A bronze sword, beautifully preserved through centuries.",
  //   },
  // ];

  useEffect(() => {
    const getLikedArtifacts = async () => {
      setLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_BackendURL
        }/api/artifacts/liked-artifacts/liked`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setLikedArtifacts(data.artifacts);
      setLoading(false);
    };
    getLikedArtifacts();
  }, []);

  return (
    <div className="py-16 px-6 w-11/12 lg:w-11/12 md:w-11/12 xl:container mx-auto ">
      <Helmet>
        <title>Liked Artifacts Page | Historical Artifacts</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Liked Artifacts
      </h1>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          <>
            <CardsSkeleton2 />
            <CardsSkeleton2 />
            <CardsSkeleton2 />
            <CardsSkeleton2 />
            <CardsSkeleton2 />
            <CardsSkeleton2 />
            <CardsSkeleton2 />
            <CardsSkeleton2 />
          </>
        ) : (
          <>
            {likedArtifacts?.map((artifact) => (
              <div
                key={artifact.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={artifact.imageUrl}
                  alt={artifact.artifactName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {artifact.artifactName}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {artifact.historicalContext.length > 50
                      ? artifact.historicalContext.slice(0, 100) + "..."
                      : artifact.historicalContext}
                  </p>
                  <button
                    onClick={() => navigate(`/artifact/${artifact.slug}`)}
                    className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-3 rounded-md hover:opacity-90  "
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {likedArtifacts?.length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          <img src="/curious-bro.svg" className="lg:w-[35%]  mx-auto" />
          <p className="text-gray-600 lg:w-[40%] mx-auto mt-2">
            You don&apos;t have any liked artifacts yet. You can like artifacts
            from the featured artifacts section.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LikedArtifacts;

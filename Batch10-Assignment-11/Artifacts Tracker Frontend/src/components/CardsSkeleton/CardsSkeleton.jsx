export const CardsSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="rounded-lg mb-4 w-full h-64 bg-gray-300" />
      <div className="h-8 bg-gray-300 rounded w-2/4" />
      <div className="mt-2 h-6 bg-gray-300 rounded w-full" />
      <div className="flex justify-between items-center mt-4">
        <div className="h-4 bg-gray-300 rounded w-1/4" />
        <div className="h-10 bg-gray-300 rounded w-1/3" />
      </div>
    </div>
  );
};

export const CardsSkeleton2 = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 animate-pulse">
        <div className="w-full h-64 bg-gray-200" />
        <div className="p-4">
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-2" />
          <div className="h-4 bg-gray-200 rounded w-full mt-2" />
          <div className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-8 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      </div>
    </>
  );
};
export const CardsSkeleton3 = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 animate-pulse h-full">
        <div className="w-full h-64 bg-gray-200" />
        <div className="p-4">
          <div className="h-5 bg-gray-200 rounded w-1/2 mt-2" />
          <div className="h-5 bg-gray-200 rounded w-1/3 mt-2" />
          <div className="h-5 bg-gray-200 rounded w-1/3 mt-2" />
          <div className="h-5 bg-gray-200 rounded w-1/3 mt-2" />
          <div className="h-5 bg-gray-200 rounded w-1/3 mt-2" />
          <div className="h-5 bg-gray-200 rounded w-1/4 mt-2" />
          <div className="flex justify-between items-center mt-4 ">
            <div className="text-white px-10 py-6 rounded-md bg-gray-200" />
            <div className="text-white px-10 py-6 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
};
export const CardsSkeletonDetails = () => {
  return (
    <>
      <div className="max-w-5xl w-full bg-gray-200 rounded-lg shadow-xl overflow-hidden animate-pulse">
        {/* Image Section */}
        <div className="w-full h-64 bg-gray-400 relative"></div>
        {/* Content Section */}
        <div className="p-8">
          <div className="h-8 bg-gray-400 rounded w-1/2 my-4" />
          <div className="h-4 bg-gray-400 rounded w-full mb-2" />
          <div className="h-4 bg-gray-400 rounded w-4/5" />
        </div>
        {/* Metadata Section */}
        <div className="px-8 py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="h-4 bg-gray-400 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-400 rounded w-1/2" />
          </div>
          <div>
            <div className="h-4 bg-gray-400 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-400 rounded w-1/2" />
          </div>
          <div>
            <div className="h-4 bg-gray-400 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-400 rounded w-1/2" />
          </div>
          <div>
            <div className="h-4 bg-gray-400 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-400 rounded w-1/2" />
          </div>
          <div>
            <div className="h-4 bg-gray-400 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-400 rounded w-1/2" />
          </div>
          <div>
            <div className="h-4 bg-gray-400 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-400 rounded w-1/2" />
          </div>
        </div>
        {/* Actions Section */}
        <div className="px-8 py-6 border-t border-gray-200 flex justify-between items-center">
          <div className="px-6 py-2 h-6 w-24 bg-gray-400 rounded-md"></div>
          <div className="px-6 py-2 h-6 w-24 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </>
  );
};

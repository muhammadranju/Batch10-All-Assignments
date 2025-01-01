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

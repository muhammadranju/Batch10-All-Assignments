const CardSkeletons = () => {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 animate-pulse shadow-lg rounded-lg overflow-hidden transform transition">
      {/* Image Section */}
      <div className="w-full h-40 bg-gray-400 dark:bg-slate-700" />
      {/* Content Section */}
      <div className="p-4">
        {/* Country Name */}
        <div className="h-5 bg-gray-400 dark:bg-slate-600 rounded mb-2" />
        {/* Visa Details */}
        <div className="h-4 bg-gray-400 dark:bg-slate-600 rounded mb-1 w-3/4" />
        <div className="h-4 bg-gray-400 dark:bg-slate-600 rounded mb-1 w-3/4" />
        <div className="h-4 bg-gray-400 dark:bg-slate-600 rounded mb-1 w-3/4" />
        <div className="h-4 bg-gray-400 dark:bg-slate-600 rounded mb-1 w-3/4" />
        {/* Button */}
        <div className="card-actions">
          <div className="h-10 bg-gray-400 dark:bg-slate-600 rounded w-1/3 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeletons;

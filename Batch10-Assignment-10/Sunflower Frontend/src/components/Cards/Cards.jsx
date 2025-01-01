import { Link } from "react-router-dom";

const Cards = ({ visa }) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 dark:border dark:border-slate-100/40  shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
      {/* Image Section */}
      <img
        src={visa?.countryImage}
        alt={`${visa?.countryName} image`}
        className="w-full h-64 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 space-y-2 text-slate-800 dark:text-slate-100">
        {/* Country Name */}
        <h2 className="text-lg lg:text-2xl font-bold ">{visa?.countryName}</h2>

        {/* Visa Details */}
        <p className="text-sm  mt-2">
          <span className="font-semibold">Visa Type:</span> {visa?.visaType}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Processing Time:</span>{" "}
          {visa?.processingTime}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Fee:</span> ${visa?.fee}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Validity:</span> {visa?.validity}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Application Method:</span>{" "}
          {visa?.applicationMethod}
        </p>

        {/* Button */}
        <div className="card-actions ">
          <Link to={`/visas-details/${visa?._id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

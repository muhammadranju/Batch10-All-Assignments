import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

const Card = ({ card }) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <figure className="px-6 pt-6">
        <img
          src={card?.product_image}
          alt="Shoes"
          className="rounded-xl w-full lg:h-72 object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{card?.product_title}</h2>
        <p className="font-semibold text-lg">Price: ${card?.price}</p>
        <div className="flex items-center gap-1">
          <ReactStars
            count={5}
            size={30}
            value={card?.rating}
            activeColor="#ffd700"
            edit={false}
          />
          <span>{card?.rating}</span>
        </div>
        <div className="card-actions">
          <Link
            to={`/product/${card?.slug}`}
            className="btn btn-outline text-purple-600 border-purple-600 rounded-full px-6 font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

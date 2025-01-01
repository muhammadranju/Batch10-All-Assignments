/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const Card = ({ card, handelPlayerPrice }) => {
  return (
    <div>
      <div className="border rounded-xl">
        <figure className="p-5 w-full">
          <img
            src={card?.image}
            alt={card.name}
            className="rounded-xl w-full lg:h-64 h-52 object-center"
          />
        </figure>
        <div className="px-6 pb-8 space-y-4">
          <h2 className="flex items-center gap-x-3 font-bold text-2xl space-x-3">
            <FaUserAlt />
            {card?.name}
          </h2>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xl font-medium text-gray-500">
              <IoFlagSharp /> {card.country}
            </span>
            <span className="px-4 py-3 bg-gray-200 rounded-full font-semibold">
              {card.role}
            </span>
          </div>

          <div className="divider"></div>
          <p className="font-bold text-xl">Rating</p>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-lg font-semibold ">
              {card.battingStyle}
            </span>
            <span className="text-lg font-medium text-gray-500">
              {card.bowlingStyle}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">
              Price: ${card.biddingPrice}
            </span>
            <button
              onClick={() => handelPlayerPrice(card.biddingPrice, card)}
              className="btn rounded-xl bg-transparent hover:bg-[#E7FE29] border-base shadow-none"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propType = {
  card: PropTypes.object.isRequired,
  handelPlayerPrice: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  battingStyle: PropTypes.string.isRequired,
  bowlingStyle: PropTypes.string.isRequired,
  biddingPrice: PropTypes.number.isRequired,
};
export default Card;

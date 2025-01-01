import { useState } from "react";
import playersData from "../../assets/data/data.json";
import { useEffect } from "react";
import Card from "./Card";
import Types from "prop-types";

import { RiDeleteBin6Line } from "react-icons/ri";
import CardPlaceholder from "../UI/CardPlaceholder";

const Cards = ({ handelPlayerPrice, selectedPlayers, handelRemovePlayer }) => {
  const [players, setPlayers] = useState([]);

  const [isAvailable, setIsAvailable] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  let totalPrice = selectedPlayers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.biddingPrice,
    0
  );

  const handelAvailableStyle = () => {
    setIsAvailable(true);
    setIsSelected(false);
  };
  const handelSelectedStyle = () => {
    setIsAvailable(false);
    setIsSelected(true);
  };
  setTimeout(() => {
    return setIsLoading(false);
  }, 1000);
  useEffect(() => {
    setPlayers(playersData);
  }, []);

  return (
    <div className=" mt-10 ">
      <div className="flex lg:justify-between sticky top-28 z-10 lg:py-3 py-5 rounded-xl bg-white/15 backdrop-blur-xl flex-col lg:flex-row gap-3 justify-center items-center mb-10 px-3">
        <h1 className="text-2xl font-bold">{`${
          isAvailable
            ? "Available Players"
            : `Selected Players (${selectedPlayers?.length}/6)`
        }`}</h1>
        {/*  */}
        <div className="join sticky top-0 z-50">
          <button
            onClick={handelAvailableStyle}
            className={`btn  join-item ${
              isAvailable
                ? "bg-[#E7FE29] hover:bg-[#E7FE90] border-0 font-black"
                : "bg-white font-semibold text-gray-500"
            }`}
          >
            Available
          </button>
          <button
            onClick={handelSelectedStyle}
            className={`btn join-item ${
              isSelected
                ? "bg-[#E7FE29] hover:bg-[#E7FE90] border-0 font-black"
                : "bg-white font-semibold text-gray-500"
            }`}
          >
            Selected <span>({selectedPlayers?.length})</span>
          </button>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-3 grid-cols-1 gap-5 ${
          isAvailable && !isLoading ? "" : "hidden"
        } `}
      >
        {players.map((card) => (
          <Card
            key={card.playerId}
            card={card}
            handelPlayerPrice={handelPlayerPrice}
          />
        ))}
      </div>

      <div
        className={`grid lg:grid-cols-3 grid-cols-1 gap-5 ${
          isLoading ? "" : "hidden"
        }`}
      >
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </div>
      <div className={` ${!isAvailable ? "space-y-3" : "hidden"} `}>
        {selectedPlayers?.map((player) => (
          <div
            key={player.playerId}
            className="flex items-center justify-between border rounded-xl p-5"
          >
            <div className="flex items-center gap-x-4">
              <img
                src={player.image}
                className="w-20 h-20 object-cover rounded-xl"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">{player?.name}</h3>
                <span className="">{player?.role}</span>
                <span className="font-semibold text-lg">
                  ${player?.biddingPrice}
                </span>
              </div>
            </div>
            <button
              onClick={() => handelRemovePlayer(player)}
              className="text-red-500 cursor-pointer p-3 text-2xl"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
        <h1
          className={`text-center font-bold text-2xl ${
            selectedPlayers?.length <= 0 ? "" : "hidden"
          }`}
        >
          Player Selected data not found!{" "}
        </h1>
        <div className="flex justify-between items-center">
          <button
            onClick={handelAvailableStyle}
            className={`btn  join-item ${
              !isAvailable
                ? "bg-[#E7FE29] hover:bg-[#E7FE90] border-0"
                : "bg-transparent"
            }`}
          >
            Add More Player
          </button>

          <div
            className={`border rounded-xl p-3 text-center bg-slate-50 ${
              selectedPlayers?.length <= 0 ? "hidden" : ""
            }`}
          >
            <span className="font-semibold">Total: ${totalPrice} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  handelPlayerPrice: Types.func.isRequired,
  selectedPlayers: Types.array.isRequired,
  handelRemovePlayer: Types.func.isRequired,
};

export default Cards;

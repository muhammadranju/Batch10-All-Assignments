import { useState } from "react";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { toast } from "react-toastify";

function App() {
  const [coin, setCoin] = useState(0);

  const handelAddCoin = () => {
    setCoin((prev) => prev + 100000000);
    return toast.success("Credit Added to your Account", {
      autoClose: 2000,
      position: "top-center",
    });
  };
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handelPlayerPrice = (price, card) => {
    const findPlayer = selectedPlayers.find(
      (player) => player.playerId === card.playerId
    );

    if (coin === 0) {
      return toast.warning("You can't buy player not have enough amount", {
        autoClose: 2000,
        position: "top-center",
      });
    }
    if (selectedPlayers.length >= 6) {
      return toast.error("You can't Add more player", { autoClose: 2000 });
    }

    if (!findPlayer) {
      setSelectedPlayers((prev) => [...prev, card]);
      setCoin((prov) => prov - price);
      toast.success(`Congrats!! ${card?.name} is now your squad`, {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    } else {
      return toast.error("This player already exits!", { autoClose: 2000 });
    }
  };
  const handelRemovePlayer = (player) => {
    const isFoundPlayer = selectedPlayers.find(
      (player) => player.playerId === player.playerId
    );

    if (isFoundPlayer) {
      const findPlayer = selectedPlayers.filter(
        (isPlayer) => isPlayer.playerId !== player.playerId
      );
      setSelectedPlayers(findPlayer);
      return toast.warning("Player removed successfully!", { autoClose: 2000 });
    }
  };

  return (
    <section>
      <div className="w-11/12 lg:w-11/12 md:w-11/12 xl:container mx-auto">
        <Header handelAddCoin={handelAddCoin} coin={coin} />
        <Cards
          handelPlayerPrice={handelPlayerPrice}
          selectedPlayers={selectedPlayers}
          handelRemovePlayer={handelRemovePlayer}
        />
      </div>
      <Footer />
    </section>
  );
}

export default App;

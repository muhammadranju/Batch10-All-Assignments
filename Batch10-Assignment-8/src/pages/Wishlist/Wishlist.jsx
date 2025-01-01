import { useContext, useEffect } from "react";
import WishlistCompo from "../../components/Carts/WishlistCompo";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { ProductContext } from "../../layout/Root/MainRoot";

const Wishlist = () => {
  const { wishlistArray } = useContext(ProductContext);
  useEffect(() => {
    document.title = "Wishlist | GadgetHeaven ";
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-purple-600 text-white py-5  rounded-xl">
        <Heading
          title={"Wishlist"}
          p={
            "A wishlist captures dreams and desires, guiding loved ones to meaningful gifts and helping organize future goals"
          }
        />
      </div>

      {/* card */}
      <div className="flex justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl">Your Wishlists Here</h3>
      </div>
      {wishlistArray.map((wishlist) => (
        <WishlistCompo key={wishlist.product_id} wishlist={wishlist} />
      ))}
    </div>
  );
};

export default Wishlist;

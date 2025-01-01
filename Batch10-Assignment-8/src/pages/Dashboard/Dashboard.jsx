import { useContext, useEffect, useState } from "react";
import Carts from "../../components/Carts/Carts";
import Heading from "../../components/Heading/Heading";
import Header from "../../layout/Header/Header";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import WishlistCompo from "../../components/Carts/WishlistCompo";
import { ProductContext } from "../../layout/Root/MainRoot";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const Dashboard = () => {
  const [isCart, setIsCart] = useState(true);
  const [sortPrice, setSortPrice] = useState([]);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);
  const {
    cartArray,
    wishlistArray,
    handelAddToCart,
    setCartArray,
    setHistoryArray,
  } = useContext(ProductContext);

  const navigate = useNavigate();

  const handelCartBtn = () => {
    setIsCart(true);
  };
  const handelWishlistBtn = () => {
    setIsCart(false);
  };

  const handelSortByPrice = () => {
    const sortByPriceArray = cartArray.sort((a, b) => b.price - a.price);

    setSortPrice(sortByPriceArray);
  };

  const totalPrice = cartArray.reduce((accumulator, product) => {
    return parseInt(accumulator + product.price);
  }, 0);

  const handelPurchaseBtn = () => {
    sortPrice;
    setCartArray([]);
    toast.success("Successfully Purchase your items ", msgInfo);
    document.getElementById("purchaseModel").showModal();
    setHistoryArray((prev) => [...prev, ...cartArray]);

    setTotalPurchasePrice((prev) => prev + totalPrice);
  };

  useEffect(() => {
    document.title = "Dashboard | GadgetHeaven ";
  }, []);
  console.log(totalPrice);

  return (
    <div>
      <Header />
      <div className="bg-purple-600  text-white py-5 rounded-xl lg:h-64 ">
        <Heading
          title={"Dashboard"}
          p={
            "A dashboard displays key data visually, helping users monitor, analyze, and make quick, informed decisions efficiently."
          }
        />
        <div className="flex lg:flr justify-center items-center gap-2 font-bold  ">
          <button
            onClick={handelCartBtn}
            className={`btn rounded-full px-14 ${
              isCart ? "bg-white text-purple-500" : "bg-transparent text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handelWishlistBtn}
            className={`btn border rounded-full px-14  ${
              isCart ? "bg-transparent text-white" : "bg-white text-purple-500"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="flex lg:justify-between items-center mt-10 ">
        <h3 className="font-bold text-2xl hidden lg:block">
          {isCart ? "Cart" : "Wishlist"}
        </h3>
        {isCart && (
          <div className="lg:space-x-3 flex lg:flex-row flex-col items-center justify-center">
            <div className="lg:flex lg:flex-row flex-col justify-center items-center gap-2">
              <span className="font-bold text-xl">
                Total cost: ${totalPrice}
                {totalPrice !== 0 && ".00"}
              </span>
              <div className="flex  gap-2">
                <button
                  onClick={handelSortByPrice}
                  disabled={totalPrice === 0 ? true : false}
                  className={`btn rounded-full disabled border-purple-500 text-purple-500 px-10  `}
                >
                  Sort by Price <HiAdjustmentsVertical className="text-2xl" />
                </button>
                <button
                  onClick={handelPurchaseBtn}
                  disabled={totalPrice === 0 ? true : false}
                  className={`btn border rounded-full  bg-purple-600 text-white lg:px-14 px-10 ${
                    totalPrice === 0 ? "disabled" : ""
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* card */}
      {isCart
        ? cartArray.map((cart) => <Carts cart={cart} key={cart.product_id} />)
        : wishlistArray.map((wishlist) => (
            <WishlistCompo
              key={wishlist.product_id}
              wishlist={wishlist}
              handelAddToCart={handelAddToCart}
            />
          ))}

      <dialog
        id="purchaseModel"
        className="modal modal-middle sm:modal-middle flex justify-center items-center text-center lg:px-0 px-3"
      >
        <div className="modal-box">
          <div className="flex justify-center items-center mt-4 mb-4">
            <img src="./assets/Group.png" className="w-20" alt="" />
          </div>
          <h3 className="text-4xl font-bold text-gray-800">
            Payment Successfully
          </h3>

          <p className="py-4 font-semibold text-xl" id="errorId"></p>
          <h4 className="font-bold text-lg text-gray-800">
            Thanks for purchasing.
          </h4>
          <span className="font-bold ">
            Total cost: ${totalPurchasePrice}.00
          </span>
          <form method="dialog" className="mt-5">
            <button
              onClick={() => navigate("/")}
              className="btn  rounded-full font-bold w-full"
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;

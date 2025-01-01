/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { ProductContext } from "../../layout/Root/MainRoot";
import { toast } from "react-toastify";
const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
const Cart = ({ cart, isRemove = false }) => {
  const { cartArray, setCartArray } = useContext(ProductContext);

  const handelCartRemove = (id) => {
    const filterNadRemove = cartArray.filter((item) => {
      return item.product_id !== id;

      // console.log(item);
    });
    console.log(filterNadRemove);
    setCartArray(filterNadRemove);
    toast.info("Successfully Remove Item ", msgInfo);
  };
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-5 bg-gray-100 p-5 mt-10 rounded-xl">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="lg:w-52 lg:h-52 ">
          <img
            src={cart?.product_image}
            className="bg-gray-400 rounded-xl w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="space-y-3 flex justify-center flex-col">
          <h1 className="font-bold text-2xl">{cart?.product_title}</h1>
          <p>{cart?.description}</p>
          <span className="font-bold text-lg mt-5">
            Price: ${cart?.price}.00
          </span>
        </div>
      </div>

      <button
        onClick={() => handelCartRemove(cart.product_id)}
        className={`cursor-pointer ${isRemove ? "hidden" : ""}`}
      >
        <FaDeleteLeft className="text-3xl text-red-500 mx-10  lg:float-start float-right" />
      </button>
    </div>
  );
};

export default Cart;

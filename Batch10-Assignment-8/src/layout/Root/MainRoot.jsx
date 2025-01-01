import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const ProductContext = createContext();
const msgInfo = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
const MainRoot = () => {
  const [products, setProducts] = useState([]);

  const [cartArray, setCartArray] = useState([]);
  const [wishlistArray, setWishlistArray] = useState([]);
  const [historyArray, setHistoryArray] = useState([]);

  const handelAddToCart = (cartItem) => {
    setCartArray((prev) => [...prev, cartItem]);
    toast.success("Successfully Add to Cart!", msgInfo);
    // console.log("Cart click", cartItem);
  };
  const handelWishlist = (wishlistItem) => {
    const findToWishlist = wishlistArray.find(
      (item) => item.product_id === wishlistItem.product_id
    );
    if (!findToWishlist) {
      setWishlistArray((prev) => [...prev, wishlistItem]);
      toast.success("Successfully Add to Wishlist!", msgInfo);
    } else {
      toast.error("Product Already Exist in Wishlist!", msgInfo);
    }

    // console.log("Wishlist click", wishlistItem);
  };

  const getProducts = async () => {
    const response = await fetch("../data/products.json");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="b pt-5">
      <div className="mx-auto xl:container md:w-11/12 lg:w-11/12 w-11/12 ">
        <ProductContext.Provider
          value={{
            products,
            handelAddToCart,
            handelWishlist,
            cartArray,
            wishlistArray,
            setCartArray,
            historyArray,
            setHistoryArray,
            setWishlistArray,
          }}
        >
          <div className="min-h-[calc(100vh-288px)]">
            <Outlet />
          </div>
        </ProductContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default MainRoot;

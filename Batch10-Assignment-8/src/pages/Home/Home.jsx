import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Categories from "../../layout/Categories/Categories";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../layout/Root/MainRoot";
import Card from "../../components/Card/Card";
import Navbar from "../../layout/Header/Navbar";
import { useLocation } from "react-router-dom";
const Home = () => {
  const [catProducts, setCatProducts] = useState([]);
  const location = useLocation();

  const categories = useLoaderData();
  const { products } = useContext(ProductContext);
  const { categoryId } = useParams();
  const isActive =
    location.pathname === "/" || location.pathname === "/category/all-products";

  useEffect(() => {
    if (categoryId === "all-products") {
      setCatProducts(products);
    } else {
      const findProducts = products.filter((category) => {
        return category.category === categoryId;
      });
      setCatProducts(findProducts);
      if (findProducts.length > 0) {
        setCatProducts(findProducts);
      } else {
        setCatProducts(products.slice(0, 9));
      }
    }

    document.title = "Home | GadgetHeaven E-Commerce a gadget-buying website";
  }, [categoryId, products]);

  return (
    <>
      <Navbar />
      <div className="mt-72">
        <h1 className="text-3xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>

        {/* main category and cards section */}
        <div className="flex lg:flex-row flex-col gap-5 mt-10 ">
          {/* Category btn */}
          <div className="lg:w-[20%] bg-white border rounded-2xl h-full  flex flex-col gap-5 p-5">
            <NavLink
              to="/category/all-products"
              className={`btn rounded-full  text-white"} ${
                isActive ? "bg-purple-600 text-white" : ""
              }`}
            >
              All Products
            </NavLink>

            {categories.map((category, idx) => (
              <Categories key={idx} category={category} />
            ))}
          </div>

          <div className="lg:w-[80%] grid lg:grid-cols-3 grid-cols-1 gap-4 h-full">
            {catProducts.map((card) => (
              <Card key={card.product_id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

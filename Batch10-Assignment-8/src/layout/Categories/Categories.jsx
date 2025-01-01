/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ category, handelIsActive }) => {
  return (
    <>
      <NavLink
        onClick={handelIsActive}
        to={`/category/${category.category_name}`}
        className={({ isActive }) =>
          `btn rounded-full ${isActive ? "bg-purple-600 text-white" : ""}`
        }
      >
        {category.category_name}
      </NavLink>
      {/* <NavLink className="btn">All Products</NavLink> */}
    </>
  );
};

export default Categories;

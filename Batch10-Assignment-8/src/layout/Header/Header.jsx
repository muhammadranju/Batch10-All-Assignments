import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../Root/MainRoot";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Statistics", url: "/statistics" },
  { name: "Dashboard", url: "/dashboard" },
  { name: "History", url: "/history" },
];

const Header = () => {
  const { cartArray, wishlistArray } = useContext(ProductContext);
  return (
    <div className="navbar bg-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item, idx) => (
              <li key={idx} className="">
                <NavLink to={item.url}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost hover:bg-transparent text-xl ">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                className={({ isActive }) =>
                  `btn btn-ghost hover:bg-transparent  
       ${
         isActive
           ? "underline underline-offset-4 font-bold text-gray-900"
           : "text-gray-500 hover:bg-transparent font-medium"
       }`
                }
                to={item.url}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-4 ">
        <NavLink
          to={"/cart"}
          className="btn bg-white border rounded-full text-lg relative"
        >
          <IoCartOutline />
          {cartArray && (
            <div className="badge bg-purple-600 text-white badge-sm absolute -mt-10 -mr-6 py-3 text-sm">
              {cartArray.length}
            </div>
          )}
        </NavLink>

        <NavLink
          to={"/wishlist"}
          className="btn rounded-full bg-white border text-lg"
        >
          {wishlistArray && (
            <div className="badge bg-purple-600 text-white badge-sm absolute -mt-10 -mr-6 py-3 text-sm">
              {wishlistArray.length}
            </div>
          )}
          <FaRegHeart />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

import { BiLogOutCircle } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handelSignOut = () => {
    signOutUser();
    toast.success("User Log Out Successfully!");
  };
  return (
    <div className="navbar pt-5 container mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box gap-y-5 z-[1] mt-3 w-52 p-2 shadow font-semibold"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/start-learning">Start Learning</NavLink>
            {user && <NavLink to="/tutorials">Tutorials</NavLink>}
            <NavLink to="/about">About Us</NavLink>
            {user && <NavLink to="/profile">My Profile</NavLink>}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost font-bold lg:text-3xl text-xl hover:bg-transparent underline"
        >
          Lingo<span className="text-teal-500 -ml-3">Bingo</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/start-learning">Start Learning</NavLink>
          {user && <NavLink to="/tutorials">Tutorials</NavLink>}
          <NavLink to="/about">About Us</NavLink>
          {user && <NavLink to="/profile">My Profile</NavLink>}
        </ul>
      </div>
      <div className="navbar-end gap-x-2">
        <h3 className="font-semibold text-gray-700 lg:flex hidden">
          {user ? "Welcome, " + user.displayName : ""}
        </h3>
        {!user && (
          <Link
            to={"/login"}
            className="btn px-5 bg-teal-500 text-white  rounded-full hover:bg-teal-600 border-0"
          >
            Login <MdLogin className="font-bold  text-xl" />
          </Link>
        )}

        {user && (
          <>
            <Link to={"/profile"}>
              <figure className="rounded-full p-1 bg-gray-50">
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="rounded-full w-10 h-10 object-cover"
                />
              </figure>
            </Link>
            <Link
              to={"/"}
              onClick={handelSignOut}
              className="btn px-5 p-1 border-0 rounded-full bg-teal-500 text-white font-bold hover:bg-teal-600"
            >
              Log Out <BiLogOutCircle className="font-black  text-xl" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

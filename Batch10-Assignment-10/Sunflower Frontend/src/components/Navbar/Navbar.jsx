import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useContext } from "react";
import { Globe2, LogOut } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { IoMdLogIn } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 bg-white/70 dark:bg-slate-900 shadow-lg">
      <div className="container mx-auto navbar py-4">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden dark:text-slate-100"
            >
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
              className="menu menu-sm dropdown-content dark:bg-slate-800 dark:text-slate-100 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 pl-8 space-y-3 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-visas">All Visas</NavLink>
              {user && (
                <>
                  <NavLink to="/add-visa">Add New Visa</NavLink>
                  <NavLink to="/my-added-visas">My Added Visas</NavLink>
                  <NavLink to="/my-visas-applications">
                    My Visas Applications
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          {/* Logo */}
          <Link
            to={"/"}
            className="btn btn-ghost -ml-5 lg:ml-0 lg:text-3xl text-xl font-bold hover:bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-indigo-500"
          >
            <Globe2 className="lg:h-10 lg:w-10  text-indigo-600" /> VisaPortal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Navbar Links */}
          <ul className="menu menu-horizontal dark:text-slate-100 px-1 gap-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-visas">All Visas</NavLink>
            {user && (
              <>
                <NavLink to="/add-visa">Add New Visa</NavLink>
                <NavLink to="/my-added-visas">My Added Visas</NavLink>
                <NavLink to="/my-visas-applications">
                  My Visas Applications
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end space-x-2 z-40">
          {/* User Info or Auth Links */}
          {user ? (
            <div className="relative group" data-tooltip-id="my-tooltip">
              <details className="dropdown relative">
                <summary className="btn m-1 bg-transparent border-none shadow-none hover:bg-transparent">
                  <div className="w-10 h-10 rounded-full cursor-pointer">
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/40"}
                      alt={user?.displayName || "User"}
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                  </div>
                </summary>
                {/* Center the dropdown */}
                <ul className="menu space-y-2 dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow dark:bg-slate-800 w-32 sm:w-40 lg:w-36 absolute left-1/2 transform -translate-x-1/2 mt-2">
                  <li>
                    <div className="px-3 py-2 text-sm text-gray-700 dark:text-slate-100 dark:hover:bg-slate-700">
                      {user?.displayName || "Guest"}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={signOutUser}
                      className="flex items-center border w-full px-3 py-2 text-sm text-gray-700 dark:text-slate-100 dark:hover:bg-slate-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Sign out</span>
                      <span className="sm:hidden">SignOut</span>
                    </button>
                  </li>
                </ul>
              </details>

              <Tooltip id="my-tooltip">
                <div>{user?.displayName}</div>
                <small className="flex">
                  <LogOut className="w-4 h-4 mr-2" />
                  Click an open menu
                </small>
              </Tooltip>
            </div>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn cursor-pointer rounded-xl btn-outline px-5 py-3 font-medium hover:bg-transparent text-base dark:hover:border-slate-100 dark:text-white dark:hover:text-white  hover:text-black transition hover:bg-opacity-90"
              >
                Login <IoMdLogIn className="text-xl" />
              </Link>
              <Link
                to={"/register"}
                className="cursor-pointer hidden lg:flex rounded-xl bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
              >
                Register <RiUserAddLine className="text-xl" />
              </Link>
            </>
          )}
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

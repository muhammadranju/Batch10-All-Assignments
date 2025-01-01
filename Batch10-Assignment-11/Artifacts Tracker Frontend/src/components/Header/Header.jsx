/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert"; // For SweetAlert
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../context/AuthProvider";
import { FaDeviantart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      Swal("Logged Out", "You have successfully logged out.", "success");
      signOut();
      // history.push("/"); // Redirect to homepage after logout
    } catch (error) {
      Swal("Error", "Failed to log out. Please try again.", "error");
    }
  };

  return (
    <header className="shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-70 bg-white/70">
      <nav className="w-11/12 lg:w-11/12 md:w-11/12 xl:container mx-auto flex justify-between items-center lg:pt-1   ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 py-3 p-3 space-y-1 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/artifacts"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    All Artifacts
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/add-artifact"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                      >
                        Add Artifact
                      </NavLink>
                    </li>
                    <li>
                      <a>My Profile</a>
                      <ul className="p-2 space-y-1 w-48">
                        <li>
                          <NavLink to={"/my-artifacts"}>My Artifacts</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/liked-artifacts"}>
                            Liked Artifacts
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="btn btn-ghost lg:text-xl hover:bg-transparent bg-transparent">
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="flex items-center lg:text-3xl text-xl font-extrabold text-blue-600 -ml-4"
                >
                  <FaDeviantart className="lg:text-4xl text-xl text-blue-600" />{" "}
                  Artifacts<span className="text-gray-800">Tracker</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/artifacts"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  All Artifacts
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      to="/add-artifact"
                      className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                      Add Artifact
                    </NavLink>
                  </li>
                  <li>
                    <details>
                      <summary>My Profile</summary>
                      <ul className="p-2 space-y-1 w-48">
                        <li>
                          <NavLink to={"/my-artifacts"}>My Artifacts</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/liked-artifacts"}>
                            Liked Artifacts
                          </NavLink>
                        </li>
                      </ul>
                    </details>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            {user ? (
              <details className="dropdown">
                <summary className="btn m-1 bg-transparent border-none hover:bg-transparent shadow-none">
                  <div className="flex items-center justify-start space-x-1">
                    <div
                      className="dropdown bg-white/70 rounded-full  border-2 tooltip tooltip-bottom"
                      data-tooltip-id="my-tooltip"
                    >
                      <img
                        src={
                          user.photoURL ||
                          "https://avatars.githubusercontent.com/u/80270685?v=4"
                        }
                        className="lg:w-12 w-14  rounded-full    p-1"
                        alt=""
                      />
                    </div>
                    <div className="text-start lg:flex flex-col hidden">
                      <p className="text-base ">
                        {user.displayName || "User Name"}
                      </p>
                      <span className="text-xs">My Account</span>
                    </div>
                  </div>
                  <div className="lg:block hidden">
                    <Tooltip id="my-tooltip">
                      <h3 className="text-lg font-semibold text-gray-100">
                        {user.displayName || "User Name"}
                      </h3>
                      <p className="mt-1">Click to open menu</p>
                    </Tooltip>
                  </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] lg:-ml-10 -ml-12 w-auto p-2 shadow">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn mt-1 bg-red-600 text-white hover:bg-red-700 "
                    >
                      <IoIosLogOut className="text-xl font-bold" />
                      Log Out
                    </button>
                  </li>
                </ul>
              </details>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="border-2 border-gray-500/50 text-gray-800 py-3 rounded-lg hover:opacity-90 hover:shadow-lg transition-shadow w-fit px-5 "
                >
                  Login
                </Link>

                <Link
                  to={"/register"}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:opacity-90 w-fit px-5 lg:flex hidden"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

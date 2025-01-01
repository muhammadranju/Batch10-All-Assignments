/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa6";
// import bgImage from "./assets/bg-shadow.png";
const Header = ({ handelAddCoin, coin }) => {
  return (
    <>
      <nav className="bg-white/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="navbar text text-gray-600 mt-3">
          <div className="navbar-start  ">
            <img src="./assets/logo.png" className="w-20" alt="logo" />
            <a className=""></a>
            <div className="dropdown z-50 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-xl"
              >
                <FaBars />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-white rounded-box  mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-end hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
            <a className="btn bg-transparent hover:bg-transparent shadow-none">
              <span>{coin}</span>Coin
              <img
                src="./assets/coin.png"
                className="w-6 h-6 "
                alt="coin image"
              />
            </a>
          </div>
          <div className="navbar-end lg:hidden">
            <a className="btn bg-transparent hover:bg-transparent shadow-none">
              <span>{coin}</span>Coin
              <img
                src="./assets/coin.png"
                className="w-6 h-6 "
                alt="coin image"
              />
            </a>
          </div>
        </div>
      </nav>
      <header className="mt-10 rounded-2xl bg-[url('/assets/bg-shadow.png')] bg-slate-950 lg:h-[550px] h-60 bg-cover bg-center ">
        <div className="flex justify-center items-center  text-center flex-col  text-white lg:gap-5 gap-1">
          <img
            src="./assets/banner-main.png"
            className="lg:mt-20 lg:w-64 w-20"
            alt="main banner image"
          />
          <h1 className="lg:text-5xl md:text-3xl text-lg font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-medium lg:text-xl text-base text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>
          <span className="p-2 border rounded-2xl border-[#E7FE29]">
            <button
              onClick={handelAddCoin}
              className="btn border-0 bg-[#E7FE29] font-bold hover:bg-[#E7FE90]"
            >
              Claim Free Credit
            </button>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;

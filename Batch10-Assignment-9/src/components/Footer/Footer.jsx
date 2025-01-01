import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer footer-center bg-teal-500/50 text-base-content p-10 relative">
      <nav>
        <ul className="flex lg:flex-row  z-50 flex-col gap-4 px-1 font-semibold underline">
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </ul>
      </nav>
      <nav className=" z-50  ">
        <ul className="flex lg:flex-row flex-col gap-4 px-1 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/start-learning">Start Learning</Link>
          {user && <Link to="/tutorials">Tutorials</Link>}
          <Link to="/about">About Us</Link>
          {user && <Link to="/profile">My Profile</Link>}
        </ul>
      </nav>

      <nav>
        <ul className="grid grid-flow-col gap-4 text-3xl">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaSquareXTwitter />
          </li>
          <li>
            <FaSquareInstagram />
          </li>
        </ul>
      </nav>

      <aside className="z-40">
        <p className="font-medium text-sm  sm:text-center text-gray-900">
          Copyright © {new Date().getFullYear()} - All right reserved by Lingo
          Bingo Ltd - (
          <a href="https://www.mdranju.xyz" target="_blank">
            <small className="font-bold">Md. Ranju</small>
          </a>
          )
        </p>
      </aside>
      <div className="absolute opacity-30 left-0  z-0 bottom-0 right-0 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // eslint-disable-next-line react/no-unknown-property
          xmlns:svgjs="http://svgjs.dev/svgjs"
          width="full"
          height={320}
          preserveAspectRatio="none"
          viewBox="0 0 1920 350"
        >
          <g mask='url("#SvgjsMask1155")' fill="none">
            <path
              d="M63 350L413 0L545 0L195 350z"
              fill='url("#SvgjsLinearGradient1156")'
            />
            <path
              d="M373 350L723 0L1009.5 0L659.5 350z"
              fill='url("#SvgjsLinearGradient1156")'
            />
            <path
              d="M681 350L1031 0L1224.5 0L874.5 350z"
              fill='url("#SvgjsLinearGradient1156")'
            />
            <path
              d="M1029 350L1379 0L1709 0L1359 350z"
              fill='url("#SvgjsLinearGradient1156")'
            />
            <path
              d="M1941 350L1591 0L1112.5 0L1462.5 350z"
              fill='url("#SvgjsLinearGradient1157")'
            />
            <path
              d="M1645 350L1295 0L983 0L1333 350z"
              fill='url("#SvgjsLinearGradient1157")'
            />
            <path
              d="M1298 350L948 0L831 0L1181 350z"
              fill='url("#SvgjsLinearGradient1157")'
            />
            <path
              d="M952 350L602 0L233 0L583 350z"
              fill='url("#SvgjsLinearGradient1157")'
            />
            <path
              d="M1813.7308944420631 350L2000 163.7308944420631L2000 350z"
              fill='url("#SvgjsLinearGradient1156")'
            />
            <path
              d="M0 350L186.2691055579369 350L 0 163.7308944420631z"
              fill='url("#SvgjsLinearGradient1157")'
            />
          </g>
          <defs>
            <mask id="SvgjsMask1155">
              <rect width={2000} height={350} fill="#ffffff" />
            </mask>
            <linearGradient
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
              id="SvgjsLinearGradient1156"
            >
              <stop stopColor="rgba(15, 118, 110, 1)" offset={0} />
              <stop
                stopOpacity={0}
                stopColor="rgba(15, 118, 110, 1)"
                offset="0.66"
              />
            </linearGradient>
            <linearGradient
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
              id="SvgjsLinearGradient1157"
            >
              <stop stopColor="rgba(15, 118, 110, 1)" offset={0} />
              <stop
                stopOpacity={0}
                stopColor="rgba(15, 118, 110, 1)"
                offset="0.66"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

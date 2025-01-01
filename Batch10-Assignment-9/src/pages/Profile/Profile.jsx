import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Profile | Lingo Bingo</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center  my-20 relative">
        <figure className="w-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="full"
            height={280}
            className="rounded-t-xl "
            preserveAspectRatio="none"
            viewBox="0 0 1440 350"
          >
            <g mask='url("#SvgjsMask1525")' fill="none">
              <rect
                width={1920}
                height={280}
                x={0}
                y={0}
                fill='url("#SvgjsLinearGradient1526")'
              />
              <path
                d="M2016 280L0 280 L0 178.17Q53.53 135.7, 96 189.24Q165 98.25, 256 167.25Q333.17 84.42, 416 161.58Q476.38 125.96, 512 186.34Q585.34 99.68, 672 173.01Q731.98 136.99, 768 196.97Q798.77 131.74, 864 162.51Q918.16 120.68, 960 174.84Q1017.53 136.37, 1056 193.9Q1086.67 128.57, 1152 159.24Q1207.89 119.13, 1248 175.02Q1334.99 102.01, 1408 189Q1461.1 146.09, 1504 199.19Q1570.69 105.88, 1664 172.57Q1736.12 84.69, 1824 156.81Q1890.49 127.3, 1920 193.79Q1962 139.79, 2016 181.79z"
                fill="rgba(153, 246, 228, 1)"
              />
              <path
                d="M2016 280L0 280 L0 219.04Q51.46 174.5, 96 225.95Q159.74 129.69, 256 193.43Q312.08 153.51, 352 209.6Q439.01 136.61, 512 223.62Q575.15 126.77, 672 189.92Q725.03 146.95, 768 199.99Q853.8 125.8, 928 211.6Q997.14 120.75, 1088 189.89Q1187.04 128.93, 1248 227.96Q1314.59 134.55, 1408 201.13Q1449.84 146.97, 1504 188.81Q1603.67 128.49, 1664 228.16Q1703.56 171.72, 1760 211.28Q1798.57 153.85, 1856 192.42Q1954.17 130.59, 2016 228.77z"
                fill="rgba(17, 94, 89, 1)"
              />
              <path
                d="M1984 280L0 280 L0 239.71Q85.51 165.22, 160 250.73Q224.96 155.69, 320 220.65Q377.09 181.75, 416 238.84Q472.54 199.38, 512 255.93Q574.28 158.21, 672 220.49Q764.66 153.16, 832 245.82Q873.06 190.88, 928 231.94Q1002.31 146.25, 1088 220.55Q1179.41 151.96, 1248 243.37Q1336.59 171.96, 1408 260.55Q1435.31 191.86, 1504 219.16Q1598.84 154, 1664 248.84Q1734.96 159.81, 1824 230.77Q1900.59 147.36, 1984 223.95z"
                fill="rgba(20, 184, 166, 1)"
              />
              <path
                d="M1984 280L0 280 L0 269.44Q44.66 218.1, 96 262.75Q185.15 191.9, 256 281.05Q341.33 206.38, 416 291.72Q446.91 226.63, 512 257.55Q602.97 188.52, 672 279.49Q725.16 236.65, 768 289.82Q800.46 226.28, 864 258.75Q953.67 188.43, 1024 278.1Q1066.71 224.81, 1120 267.53Q1180.21 231.75, 1216 291.96Q1244.15 224.12, 1312 252.27Q1398.87 179.13, 1472 266Q1562.93 196.94, 1632 287.87Q1694.93 190.81, 1792 253.74Q1850.88 216.62, 1888 275.5Q1943.85 235.35, 1984 291.19z"
                fill="rgba(255, 255, 255, 1)"
              />
            </g>
            <defs>
              <mask id="SvgjsMask1525">
                <rect width={1920} height={280} fill="#ffffff" />
              </mask>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient1526"
              >
                <stop stopColor="rgba(20, 184, 166, 0.4)" offset="0.62" />
                <stop stopColor="#00459e" offset={1} />
              </linearGradient>
            </defs>
          </svg>
        </figure>
        <figure className="w-36 rounded-full shadow-xl overflow-hidden   show -mt-24">
          <img
            src={user?.photoURL}
            className="border-[5px]  border-white w-full h-36 object-cover rounded-full"
            alt=""
          />
        </figure>
        <div className="flex flex-col mt-5 space-y-3 justify-center items-center w-full mb-16">
          <h1 className="text-3xl font-bold">{user?.displayName}</h1>
          <p className="font-semibold text-lg">Email: {user?.email}</p>

          <Link to={"/profile-update"}>
            <button className="btn cursor-pointer rounded-full bg-teal-500 px-10 py-3 font-bold text-white hover:bg-teal-600 ">
              Update Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

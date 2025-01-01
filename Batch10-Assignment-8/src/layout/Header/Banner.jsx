import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-white space-y-4 mt-8">
        <h1 className="lg:text-5xl text-3xl  font-bold lg:w-[70%] ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="lg:w-[60%] lg:px-0 px-3 ">
          Upgrade your tech experience by accessorizing with Gadget
          Heaven&apos;s premium accessories, designed to enhance functionality,
          style, and personalization for your devices. Explore our innovative
          range today!
        </p>
        <NavLink
          to={"/dashboard"}
          className="btn bg-white text-purple-600 px-6 font-bold rounded-full"
        >
          Show Now
        </NavLink>
      </div>
      {/* herder banner */}
      <div className=" w-[90%] lg:w-[60%]  mx-auto rounded-2xl p-5 border-2 border-slate-50 bg-white/25 absolute left-0 right-0 mt-8">
        <img
          src="../assets/banner.jpg"
          className="rounded-xl w-full lg:h-[450px] object-cover"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;

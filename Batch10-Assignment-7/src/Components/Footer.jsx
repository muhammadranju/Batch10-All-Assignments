const Footer = () => {
  return (
    <footer className="lg:mt-96 mt-72  bg-[#06091A] text-gray-500 py-10 relative  ">
      <div className="border-2 container mx-auto  p-5   rounded-3xl bg-white bg-opacity-35 absolute -top-44 right-0 left-0 ">
        <div className=" flex justify-center flex-col items-center rounded-3xl h-80 space-y-3 lg:px-0 px-5  bg-[url('/assets/bg-shadow.png')] bg-slate-100 bg-cover bg-center ">
          <h1 className="lg:text-3xl text-xl lg:text-start text-center font-bold text-black">
            Subscribe to our Newsletter
          </h1>
          <p className="font-medium lg:text-start text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center items-center lg:gap-x-4 gap-x-2 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn join-item bg-gradient-to-r from-[#f472b6] via-[#fb923c] to-[#fdba74]  border-0 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-52 items-center">
        <img src="./assets/logo-footer.png" alt="" />
      </div>
      <section className="flex lg:flex-row flex-col lg:text-start text-center justify-between w-11/12 lg:w-11/12 pt-20 md:w-11/12 xl:container  mx-auto ">
        <div className="space-y-5">
          <h4 className="font-semibold text-white">About Us</h4>
          <p className="lg:w-64">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="space-y-5">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-4">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h4 className="font-semibold text-white">Subscribe</h4>
          <p className="lg:w-64">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Enter your email"
            />
            <button className="btn join-item bg-gradient-to-r from-[#fdba74] via-[#fb923c] to-[#f472b6]  border-0 ">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div className="w-full border-b border-slate-800 pt-10"></div>
      <section className=" flex justify-center items-center mt-5 w-11/12 lg:w-11/12 md:w-11/12 xl:container  mx-auto ">
        <span className="">@2024 Your Company All Rights Reserved.</span>
      </section>
    </footer>
  );
};

export default Footer;

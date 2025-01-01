import Heading from "../../components/Heading/Heading";

const Footer = () => {
  return (
    <footer className=" bg-gray-100  p-10 pt-28 mt-20">
      <Heading
        title={"Gadget Heaven"}
        p={
          "Gadget Heaven offers tech lovers a curated collection of innovative devices, making it easy to discover exciting gadgets."
        }
      />
      <div className="divider container mx-auto mb-5"></div>
      <div className="footer container mx-auto text-slate-800 font-medium justify-around  items-center">
        <nav>
          <h6 className="footer-title text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

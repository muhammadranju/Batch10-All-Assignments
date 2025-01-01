import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">
        Home
      </NavLink>
      <NavLink
        to="/artifacts"
        className="text-gray-700 hover:text-blue-600 font-medium"
      >
        Artifacts
      </NavLink>
      <NavLink
        to="/add-artifact"
        className="text-gray-700 hover:text-blue-600 font-medium"
      >
        Add Artifact
      </NavLink>
    </nav>
  );
};

export default Navbar;

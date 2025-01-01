/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

const PublicRoutes = ({ children }) => {
  const user = auth.currentUser;
  return user ? <Navigate to="/profile" /> : children;
};

export default PublicRoutes;

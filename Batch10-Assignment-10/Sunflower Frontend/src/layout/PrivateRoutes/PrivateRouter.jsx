import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

/* eslint-disable react/prop-types */
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center mt-72">
        <RotatingLines
          visible={true}
          height="50"
          width="50"
          strokeColor="#3b82f6"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
        />
      </div>
    );

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace={true} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoutes;

import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import PuffLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-40">
        <PuffLoader
          color="#F79837"
          cssOverride={{}}
          loading
          size={70}
          speedMultiplier={1}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to Login first to View Details",
    });
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

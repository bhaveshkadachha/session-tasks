import { useContext } from "react";
import UserContext from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  
  return <>{userCtx.isLogin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoute;

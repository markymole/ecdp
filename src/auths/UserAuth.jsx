import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from '../context/Authentication'

const UserAuth = () => {
  const { user } = useAuthContext();
  return !user ? <Outlet></Outlet>: <Navigate to="/dashboard"/>;

};

export default UserAuth;
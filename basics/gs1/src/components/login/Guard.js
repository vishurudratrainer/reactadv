import { Navigate, Outlet } from "react-router-dom";

export default function Guard({ authenticated }) {
  if (authenticated) return  <Outlet />;
  else
    return (
    <Navigate to={"/"}></Navigate>
    );
}
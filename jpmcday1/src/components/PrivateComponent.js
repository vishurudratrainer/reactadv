import { Link, Navigate, Outlet } from "react-router-dom";

export default function PrivateComponent({ authenticated }) {
  if (authenticated) return  <Outlet />;
  else
    return (
    <Navigate to={"/"}></Navigate>
    );
}

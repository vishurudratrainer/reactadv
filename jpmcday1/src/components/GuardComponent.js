import { Navigate, Outlet } from "react-router-dom";

export default function GuardComponent({ authenticated }) {
  if (authenticated) return  <Outlet />;
  else
    return (
    <Navigate to={"/"}></Navigate>
    );
}

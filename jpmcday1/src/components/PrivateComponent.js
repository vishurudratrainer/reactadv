import { Link, Outlet } from "react-router-dom";

export default function PrivateComponent({ authenticated }) {
  if (authenticated) return  <Outlet />;
  else
    return (
      <div>
        To access page please login<Link to={"/"}>To Login click here</Link>
      </div>
    );
}

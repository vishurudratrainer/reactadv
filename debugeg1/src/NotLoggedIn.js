import { Link } from "react-router-dom";

export default function NotLoggedIn(props) {
  if (!props.loggedIn) {
    return (
      <div>
        You are not logged in Kindly do it <Link to="/login">Login</Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

import { Link } from "react-router-dom"
export default function PageAbsent(props){
    if (!props.loggedIn) {
    return (
      <div>
        You are not logged in Kindly do it <Link to="/login">Login</Link>
      </div>
    );
  }
    return(<div>Page is not found</div>)
}
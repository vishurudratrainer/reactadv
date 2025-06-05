import { Navigate,Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoutes=(props)=>{
    const authContext = useContext(AuthContext)
    return(authContext.token ? <Outlet/> : <Navigate to="/"/>)

}

export default PrivateRoutes
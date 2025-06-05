import { Navigate,Outlet } from "react-router-dom";

const PrivateRoutes=(props)=>{
    return(props.token ? <Outlet/> : <Navigate to="/"/>)

}

export default PrivateRoutes
import UserContext from "../../context/UserContext"
import { useContext } from "react"

const Profile =()=>{
    const userContext = useContext(UserContext)
    console.log(userContext)
    
    return (<div style={{background:userContext.theme}}>User name:{userContext.username} </div>)}


export default Profile

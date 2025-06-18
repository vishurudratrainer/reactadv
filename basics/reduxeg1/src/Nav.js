
import {Route,Routes,Link} from 'react-router-dom'
import Todos from "./Todos"
export default function Nav(){

    return(<div>
        <Routes>
            <Route path='/' element={<Todos/>}/>
        </Routes>
    </div>)
}

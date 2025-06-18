
import {Route,Routes,Link} from 'react-router-dom'
import Counter from './Counter'
export default function Nav(){

    return(<div>
        <Routes>
            <Route path='/' element={<Counter/>}/>
        </Routes>
    </div>)
}

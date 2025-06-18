import { FETCHED_DOG } from "../ActionType"


const DogReducer=(state={message:null},action)=>{
    if(action){

        if(action.type===FETCHED_DOG){
            return {...state,message:action.data.message}
        }
    }
    return state
}

export default DogReducer
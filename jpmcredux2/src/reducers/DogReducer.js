import { FETCHED_DOG } from "../ActionType";


export default function DogReducer(state={dog:null},action){
    if(action){
        if(action.type===FETCHED_DOG){
            return {...state,dog:action.dog}
        }
    }
    return state
}
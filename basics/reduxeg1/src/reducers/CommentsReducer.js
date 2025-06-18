import { FETCHED_COMMENTS } from "../ActionType"



export default function CommentsReducer(state={comments:[]},action){
    if(action){

        if(action.type===FETCHED_COMMENTS){
            return {...state,comments:action.data}
        }
    }
    return state
}
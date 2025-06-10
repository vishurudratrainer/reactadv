import { CAPTURE_FORM, POST_FORM_SUCCESS } from "../ActionType"


const PostReducer=(state={form:{title:"",userId:"",body:""},res:{}},action)=>{

    if(action){
        if(action.type ===POST_FORM_SUCCESS){
            let res = action.result
            let resData=Object.assign({},state.res,res)
            return {...state,res:resData}
        }
        if(action.type ===CAPTURE_FORM){
            let formData = action.form
            let form = Object.assign({},state.form,formData)
            console.log(formData)
            return {...state,form:form}
        }
    }
    return state

}

export default PostReducer
import {GetUserRequest,GetUserSuccess,GetUserFail,AddUser} from "./usersAction"
import { ADD_USER, DELETE_USER, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER } from "./usersTypes"
 const initialState={
     users:[],
     error:"",
     loading:true
 }
export const usersReducer=(state=initialState,action)=>{
  switch(action.type){
      case GET_USER_REQUEST:
       return {users:[],error:"",loading:true}
      case GET_USER_SUCCESS:
          console.log(action.payload)
        return {users:action.payload,
            error:"",loading:false}
      case GET_USER_FAIL:
        return {users:[],error:action.payload,loading:false}
        case ADD_USER:
         console.log(action.payload.id)
          return {...state,users:[...state.users,{id:action.payload.id,
            first_name:action.payload.firstName,last_name:action.payload.lastName
            ,avatar:action.payload.avatar
          }]}
          case UPDATE_USER:
            console.log("x")
            return{...state,users:state.users.map((element)=>{
              console.log(action.payload)
              
               if(element.id==action.payload.id){
                console.log("a")
                 return {...element,first_name:action.payload.firstName,last_name:action.payload.lastName
                  ,avatar:action.payload.avatar};
               }
               else{
                 return element;
               }
            })}
            case DELETE_USER:
              // console.log(action.payload)
              return{...state,users:state.users.filter((element)=> element.id!=action.payload)}
      default:
          return state
  }
}



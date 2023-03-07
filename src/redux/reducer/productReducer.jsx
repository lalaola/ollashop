import { GET_REGIS ,GET_REGIS_GOOGLE} from "../action/loginAction";
import { GET_LOGIN,GET_LOGIN_GOOGLE } from "../action/loginAction";

const innitialState ={
    getRegis : false,
    getRegisLoading : false,
    getRegisError : false,

}

const job = (state = innitialState, action) =>{
    switch (action.type) {
        case GET_REGIS :
            return {
                ...state,
                getRegis : action.payload.data,
                getRegisLoading : action.payload.loading,
                getRegisError : action.payload.errorMassage

            }
        default:
            return state;
    }
}

export default job
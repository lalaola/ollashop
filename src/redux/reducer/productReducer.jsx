import { GET_LIST_PRODUCT } from "../action/productAction";

const innitialState ={
    getProduct : false,
    getProductLoading : false,
    getProductError : false,

}

const job = (state = innitialState, action) =>{
    switch (action.type) {
        case GET_LIST_PRODUCT :
            return {
                ...state,
                getProduct : action.payload.data,
                getProductLoading : action.payload.loading,
                getProductError : action.payload.errorMassage

            }
        default:
            return state;
    }
}

export default job
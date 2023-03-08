import { GET_DETAIL_PRODUCT, GET_LIST_PRODUCT, SEARCH_KEY } from "../action/productAction";

const innitialState ={
    getProduct : false,
    getProductLoading : false,
    getProductError : false,
    
    getProductDetail : false,
    getProductDetailLoading : false,
    getProductDetailError : false,

    keyWordCari : '',
    keyWordCariLoading : false,

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
        case GET_DETAIL_PRODUCT :
            return {
                ...state,
                getProductDetail : action.payload.data,
                getProductDetailLoading : action.payload.loading,
                getProductDetailError : action.payload.errorMassage
                
            }
            case SEARCH_KEY :
                return {
                    ...state,
                    keyWordCari : action.payload.data,
                    keyWordCariLoading : action.payload.loading,
            }
        default:
            return state;
    }
}

export default job
import { api } from "../../config"

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT'
export const GET_DETAIL_PRODUCT = 'GET_DETAIL_PRODUCT'
export const SEARCH_KEY = 'SEARCH_KEY'


export const fatchDataProduct = () => {
    return (dispatch) => {
        console.log('2. loading masuk action')
        dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // fetching data api
         api
            .get("products")
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data
                    dispatch({
                        type: GET_LIST_PRODUCT,
                        payload: {
                            loading: false,
                            data: response.data,
                            errorMassage: false
                        }
                    })
                    console.log("data: ", data)
                  
                }
            })
            .catch((error) => { });
            
    }
}
export const detailProduct = (id) => {
    return (dispatch) => {
        console.log('2. loading masuk action')
        dispatch({
            type: GET_DETAIL_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // fetching data api
         api
            .get(`products/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data
                    dispatch({
                        type: GET_DETAIL_PRODUCT,
                        payload: {
                            loading: false,
                            data: response.data,
                            errorMassage: false
                        }
                    })                  
                }
            })
            .catch((error) => { });
            
    }
}
export const searchProduct = (keyword) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_KEY,
            payload: {
                data: keyword.toLowerCase(),
            }
        })
    }
}
import { api } from "../../config"

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT'
export const GET_DETAIL_PRODUCT = 'GET_DETAIL_PRODUCT'
export const GET_PRODUCT_BARU = 'GET_PRODUCT_BARU'
export const SEARCH_KEY = 'SEARCH_KEY'


export const fatchDataProductBaru = () => {
    return (dispatch) => {
        console.log('2. loading masuk action')
        dispatch({
            type: GET_PRODUCT_BARU,
            payload: {
                loading: true,
                data: false,
                errorMassage: false
            }
        })
        // fetching data api
        api
            .get("products", {
                page: 2,
                per_page: 8,
            })
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data
                    dispatch({
                        type: GET_PRODUCT_BARU,
                        payload: {
                            loading: false,
                            data: data,
                            errorMassage: false
                        }
                    })
                }
            })
    }
}
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
            .get("products", {
                per_page: 8,
            })
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
import { api } from "../../config"

export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT'


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
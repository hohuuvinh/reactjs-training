import * as Types from './../actions/ActionTypes';
import callapi from './../callapi/callapi';



export function addProduct(product){
    return{
        type: Types.ADD_PRODUCT,
        payload: product,
    }
}


export const getProducts = () => {  
    return (dispatch) => {
        return callapi('products', 'GET', null).then(res => {
            dispatch(getProductsOk(res.data))
        })
    }
    
}
export const getProductsOk = (products) => {
    return {
        type: Types.GET_PRODUCTS,
        payload: products
    }

}

// export const getProducts = () => {
//     return {
//         type: Types.GET_PRODUCTS
//     }
// }

// export const getProductsOk = (items) => {
//     return {
//         type: Types.GET_PRODUCTS,
//         items
//     }

// }

// export function deleteTodo(productId){
//     return{
//         type: Types.DELETE_PRODUCT,
//         payload:productId,
//     }
// }

// export function updateTodo(product){
//     return{
//         type: Types.UPDATE_PRODUCT,
//         payload: product,
//     }
// }
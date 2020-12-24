import * as Types from './../actions/ActionTypes';
import callapi from './../callapi/callapi';

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
export function addProduct(product){
    return (dispatch) => {
        return callapi('products', 'POST', product).then(res => {
            dispatch(getProducts()); 
        })
    }
}
export function editProduct(productId){
    return (dispatch) => {
        return callapi(`products/${productId}`, 'GET', null).then(res => {
            dispatch(editProductRD(res.data))
        })
        
    }
}

export function editProductRD(product){
    return{
        type: Types.EDIT_PRODUCT,
        payload: product,
    }
}

export function PostEditProduct(product){
    return (dispatch) => {
        return callapi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(getProducts())
        })     
    }
}

export function DeleteProduct(productId){
    return (dispatch) => {
        return callapi(`products/${productId}`, 'DELETE', null).then(res => {
            dispatch(getProducts())
        })     
    }
}

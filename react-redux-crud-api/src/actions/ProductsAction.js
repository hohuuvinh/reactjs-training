import * as Types from './../actions/ActionTypes';
import callapi from './../callapi/callapi';

export const getProducts = () => {  
    return (dispatch) => {
        return callapi('products', 'GET', null).then(res => {
            dispatch(getProductsRD(res.data))
        })
    }
}
export const getProductsRD = (products) => {
    return {
        type: Types.GET_PRODUCTS,
        payload: products
    }

}
export function addProduct(product){
    return (dispatch) => {
        return callapi('products', 'POST', product).then(res => {
            dispatch(addProductRD(product)); 
        })
    }
}
export function addProductRD(product){
    return {
        type: Types.ADD_PRODUCT,
        payload: product
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
            dispatch(PostEditProductRD(product))
        })     
    }
}
export function PostEditProductRD(product){
    return{
        type: Types.UPDATE_PRODUCT,
        payload: product,
    }
}


export function DeleteProduct(productId){
    return (dispatch) => {
        return callapi(`products/${productId}`, 'DELETE', null).then(res => {
            dispatch(DeleteProductRD(productId))
        })     
    }
}


export function DeleteProductRD(productId){
    return{
        type: Types.DELETE_PRODUCT,
        payload: productId,
    }
}

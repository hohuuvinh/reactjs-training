import * as Types from './../actions/ActionTypes';

var initialState = [];

const ProductRD = (state = initialState, action) => {
    let newProductList;
    switch (action.type) {
        case Types.GET_PRODUCTS:
            state = action.payload;
            return [...state];
        case Types.ADD_PRODUCT:
            newProductList = [...state];
            let idMax = 0;
            for (let i = 0; i < newProductList.length; i++) {
                    idMax = newProductList[i].id;
            }
            action.payload.id=parseInt(1*idMax+1);
            newProductList.push(action.payload);
            console.log(action.payload.id);
            return newProductList;
        case Types.UPDATE_PRODUCT:
            newProductList = [...state];
            let index = -1;
            for (let i = 0; i < newProductList.length; i++) {
                index++;
                if (newProductList[i].id == action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newProductList[index] = action.payload;
                console.log(newProductList);
                return newProductList;
            }
        case Types.DELETE_PRODUCT:
            newProductList = [...state];
            newProductList = newProductList.filter(todo => todo.id !== action.payload)
            return newProductList;
        default: return [...state];
    }
}
export default ProductRD;
import * as Types from './../actions/ActionTypes';

var initialState = [];

const ProductRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return [...state];
        case Types.GET_PRODUCTS:              
            state = action.payload;
            console.log(state)
            return [...state];
        default: return [...state];
    }
}
export default ProductRD;
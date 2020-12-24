import * as Types from './../actions/ActionTypes';

var initialState = [];

const ProductRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PRODUCTS:              
            state = action.payload;
            return [...state];
        default: return [...state];
    }
}
export default ProductRD;
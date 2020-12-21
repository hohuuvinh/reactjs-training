import * as Types from './../actions/ActionTypes';
import callapi from './../callapi/callapi';

var initialState = [];



const ProductRD = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
        case Types.ADD_PRODUCT:
            console.log(action.payload);
            return [...state];
        case Types.GET_PRODUCTS:              
            state = action.payload;
            console.log(state)
            return [...state];
        default: return [...state];
    }
}
export default ProductRD;
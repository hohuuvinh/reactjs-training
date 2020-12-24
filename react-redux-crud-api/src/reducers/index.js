import { combineReducers } from 'redux';
import ProductRD from './ProductRD';
import EditProductRD from './EditProductRD';

const appReducers = combineReducers({
    ProductRD: ProductRD,
    EditProductRD:EditProductRD
})
export default appReducers;
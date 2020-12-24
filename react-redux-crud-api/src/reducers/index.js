import { combineReducers } from 'redux';
import ProductRD from './ProductRD';
import CardRD from './CardRD';
import EditProductRD from './EditProductRD';

const appReducers = combineReducers({
    ProductRD: ProductRD,
    CardRD:CardRD,
    EditProductRD:EditProductRD
})
export default appReducers;
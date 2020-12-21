import { combineReducers } from 'redux';
import ProductRD from './ProductRD';
import CardRD from './CardRD';

const appReducers = combineReducers({
    ProductRD: ProductRD,
    CardRD:CardRD
})
export default appReducers;
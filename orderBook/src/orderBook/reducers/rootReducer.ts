import {combineReducers} from 'redux'
import ordersReducer, {State as OrdersState} from './orders'


export default combineReducers({
    data: ordersReducer
})

export type OrdersReducersState = {
    data: OrdersState;
};
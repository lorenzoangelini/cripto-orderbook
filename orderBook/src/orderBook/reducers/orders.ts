import _ from 'lodash';
import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from '../actions'

export type State = {
    isLoading: boolean
    asks: { [key: string]: any },
    bids: { [key: string]: any },
    statusWebSocket?: 'subscribed' | 'info' | 'none' | 'unsubscribed'
    productId: 'PI_XBTUSD' | 'PI_ETHUSD',
    error?: string,  
}
const initialState: State = {
    isLoading: false,
    asks: [],
    bids: [],
    statusWebSocket: 'none',
    productId: 'PI_XBTUSD',
}

type Types = ActionType<typeof actions>;

const reducer = createReducer<State, Types>(initialState)
.handleAction(
    actions.successOrdersResponse,
    (state, actions) => ({
        ...state,
        asks:  _.merge(state.asks ,actions.payload.asks),
        bids: _.merge(state.bids ,actions.payload.bids),
    }),
)
.handleAction(
    actions.resetOrdersBook,
    (state, actions) => ({
        ...state,
        asks:  {},
        bids:{},
    }),
)
.handleAction(
    actions.setStatusWebSocket,
    (state, actions) => ({
        ...state,
        statusWebSocket: actions.payload
    }),
).handleAction(
    actions.subscribe,
    (state, actions) => ({
        ...state,
        productId: actions.payload
    }),
).handleAction(
    actions.setError,
    (state, actions) => ({
        ...state,
        error: actions.payload
    }),
)
export default reducer;

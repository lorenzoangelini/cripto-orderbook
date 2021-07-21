import { ActionType, createReducer } from 'typesafe-actions'
import * as actions from '../actions'
import { Level } from '../types';
export type State = {
    isLoading: boolean
    asks: Level[] ,
    bids: Level[] ,
}
const initialState: State = {
    isLoading: false,
    asks: [],
    bids: [],
}

type Types = ActionType<typeof actions>;

const reducer = createReducer<State, Types>(initialState).handleAction(
    actions.successOrdersResponse,
    (state, actions) => ({
        ...state,
        asks: state.asks.length > 0 ?  [...actions.payload.asks]: actions.payload.asks,
        bids: state.bids.length > 0 ?  [...actions.payload.bids]: actions.payload.bids
    }),
)

export default reducer;

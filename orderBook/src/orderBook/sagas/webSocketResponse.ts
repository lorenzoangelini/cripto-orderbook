import { put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { select, debounce, takeLatest, takeEvery, takeLeading } from 'redux-saga/effects';
import * as actions from '../actions'
import { Level } from '../types';

function* handleWebSocketRequestSaga(
    action: ReturnType<typeof  actions.handleWebSocketResponse>
): SagaIterator {
    try{
       const asks: number[][] = action.payload?.asks;
       const bids: number[][] = action.payload?.bids;
       const asksObject =  Object.fromEntries(asks); 
       const bidsObject =  Object.fromEntries(bids);

       yield put(actions.successOrdersResponse({bids :bidsObject, asks: asksObject}))
      
    }catch(e){
      yield put(actions.setError("Error retrieve asks and bids"))
    }
}

export function* handleWebSocketSaga() {
    yield takeEvery(actions.handleWebSocketResponse, handleWebSocketRequestSaga);
}
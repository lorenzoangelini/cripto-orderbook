import { put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { select, debounce } from 'redux-saga/effects';
import * as actions from '../actions'
import {getAsks, getBids} from '../selectors'
import { Level } from '../types';

function* handleWebSocketRequestSaga(
    action: ReturnType<typeof  actions.handleWebSocketResponse>
): SagaIterator {
    try{
       const asks: number[][] = action.payload?.asks;
       const bids: number[][] = action.payload?.bids;
       const level = action.payload?.numLevels
       const asksFromState: Level[] = yield select(getAsks);
       const bidsFromState: Level[] = yield select(getBids);
    if(level){
        const resultAsks = getTotalFromTuple(asks);
        const resultBids = getTotalFromTuple(bids);
        yield put(actions.successOrdersResponse({asks: resultAsks, bids: resultBids}))
        return;
      }
     const asksLevels = composeLevels(asksFromState, asks);
     const bidsLevels = composeLevels(bidsFromState, bids);
     yield put(actions.successOrdersResponse({asks: asksLevels, bids: bidsLevels}))

    }catch(e){
      console.error(e)
        
    }
}

export function* handleWebSocketSaga() {
    yield debounce(10,actions.handleWebSocketResponse, handleWebSocketRequestSaga);
}


function getTotalFromTuple(arr:number[][]): Level[] {
  let size: number = 0
        const resultAsks: Level[] = arr.map(item => {
          size += item[1]
        return { price: item[0], size: item[1], total: size }
    });

    return resultAsks;

}

function getTotalFromArray(arr:Level[]): Level[] {
  let size: number = 0
    const resultAsks: Level[] = arr.map(item => {
      size += item.size
    return { price: item.price, size: item.size, total: size }
});
    return resultAsks;

}


function composeLevels(selector:Level[], tuple:number[][]): Level[] | undefined {
  
  if(selector.length > 0 && tuple){
    let levelClone = selector;
    tuple.map(item => {
      const [price,size] = item;
      const index = selector.findIndex((level) => level.price === price);
      if(index != -1){
        if(size!= 0){
          levelClone[index].size = size;
        }else{
          levelClone.splice(index, 1)
        }
      }else{
        if(size > 0){
          levelClone.push({ price: price, size: size, total: 0 })
        }
       
      }
  })
  levelClone.sort((a,b) => { return a.price - b.price})
  const resultAsks = getTotalFromArray(levelClone)
  return resultAsks;
  }
  else{
    return selector;
  }

}
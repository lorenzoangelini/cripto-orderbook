import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {initWebSocket, closeWebSocket} from '../actions';
import {getAsks, getBids} from '../selectors';

export function useOrderBook(){

  const asks = useSelector(getAsks);
  const bids = useSelector(getBids);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initWebSocket())
  },[])

  const stopWebSocket = useCallback(() => {
   dispatch(closeWebSocket())
  },[])


  const startWebSocket = useCallback(() => {
    dispatch(initWebSocket())
   },[])


    return {
      stopWebSocket,
      startWebSocket,
      asks,
      bids
    }
}
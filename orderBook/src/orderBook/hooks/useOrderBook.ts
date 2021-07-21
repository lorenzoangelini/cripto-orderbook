import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {initWebSocket, closeWebSocket, unSubscribe,successOrdersResponse, subscribe,} from '../actions';
import {getAsks, getBids, getWebSocketStatus, getProductsId} from '../selectors';
import { ProductId } from "../types";

export function useOrderBook(){

  const asks = useSelector(getAsks);
  const bids = useSelector(getBids);
  const status = useSelector(getWebSocketStatus);
  const productId =  useSelector(getProductsId);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initWebSocket())
  },[])

  const stopWebSocket = useCallback(() => {
   dispatch(closeWebSocket())
  },[])

  const subScribeSocket = useCallback(() => {
    dispatch(subscribe(productId === ProductId.PI_XBTUSD ? ProductId.PI_ETHUSD : ProductId.PI_XBTUSD ))
   },[productId])
   
  const toggleSubscribeSocket = useCallback(() => {
    dispatch(unSubscribe(productId))
    dispatch(successOrdersResponse({bids: [], asks:[]}))
    subScribeSocket()
   },[productId])

  

  const startWebSocket = useCallback(() => {
    dispatch(initWebSocket())

   },[])


    return {
      stopWebSocket,
      startWebSocket,
      asks,
      bids,
      toggleSubscribeSocket
    }
}
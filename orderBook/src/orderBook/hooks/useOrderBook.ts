import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {initWebSocket, closeWebSocket, unSubscribe,successOrdersResponse, subscribe, resetOrdersBook,} from '../actions';
import {getWebSocketStatus, getProductsId} from '../selectors';
import { ProductId } from "../types";

export function useOrderBook(){

  const status = useSelector(getWebSocketStatus);
  const productId =  useSelector(getProductsId);
  const [isAlive, setIsAlive] = useState<boolean>(true);

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(initWebSocket())
  },[])

  const stopWebSocket = useCallback(() => {

    if(isAlive){
      dispatch(closeWebSocket())
      setIsAlive(false)
    }else{
      setIsAlive(true)
      dispatch(initWebSocket())
     
    }
  },[isAlive])

  const subScribeSocket = useCallback(() => {
    dispatch(subscribe(productId === ProductId.PI_XBTUSD ? ProductId.PI_ETHUSD : ProductId.PI_XBTUSD ))
   },[productId])
   
  const toggleSubscribeSocket = useCallback(() => {
    dispatch(unSubscribe(productId))
    subScribeSocket()
   },[productId])

  const startWebSocket = useCallback(() => {
    dispatch(initWebSocket())

   },[])


    return {
      stopWebSocket,
      startWebSocket,
      toggleSubscribeSocket,
      isAlive
    }
}
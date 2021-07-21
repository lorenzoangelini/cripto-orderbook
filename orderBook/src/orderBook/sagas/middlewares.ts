import { Middleware } from "redux";
import { getType } from "typesafe-actions";
import {WEB_SOCKET_URL} from '../paths'
import {initWebSocket, closeWebSocket, handleWebSocketResponse} from '../actions'
import { ResponseWebSocket } from "../types";

import _ from "lodash";

let ws:WebSocket;
const subscribe = {
    event: 'subscribe',
    feed: 'book_ui_1',
    product_ids: ["PI_XBTUSD"]
  };

export const socketMiddleWare: Middleware<any> = store => next => action => {

    if(action.type === getType(initWebSocket)){

            ws = new WebSocket(WEB_SOCKET_URL);
            ws.onopen = () => {
                ws.send(JSON.stringify(subscribe));
              };
              ws.onmessage = (event: WebSocketMessageEvent) => {
               
                const response: ResponseWebSocket = JSON.parse(event.data);
                store.dispatch(handleWebSocketResponse(response))
                 
               
              };
              ws.onclose = () => {
                console.error("close")
              };
              ws.onerror = (event) => {
                console.error("error")
              }
    }

    if(action.type === getType(closeWebSocket)){   
            ws.close();
    }

    return next(action);
}
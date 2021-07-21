import { Middleware } from "redux";
import { getType } from "typesafe-actions";
import { WEB_SOCKET_URL } from '../paths'
import { initWebSocket, closeWebSocket, handleWebSocketResponse, setStatusWebSocket, unSubscribe, subscribe, setError } from '../actions'
import { ResponseWebSocket } from "../types";

import _ from "lodash";
import { getProductsId } from "../selectors";

let ws: WebSocket;
const messageBuilder = (productId: string, event: string) => {
  return {
    event: event,
    feed: 'book_ui_1',
    product_ids: [productId]
  }
};

export const socketMiddleWare: Middleware<any> = store => next => action => {

  if (action.type === getType(initWebSocket)) {
    ws = new WebSocket(WEB_SOCKET_URL);
    ws.onopen = () => {
      const productId = getProductsId(store.getState())
      ws.send(JSON.stringify(messageBuilder(productId, 'subscribe')));
    };
    ws.onmessage = (event: WebSocketMessageEvent) => {
      const response: ResponseWebSocket = JSON.parse(event.data);
      if (response.event) {
        store.dispatch(setStatusWebSocket(response.event))
      } else {
        store.dispatch(handleWebSocketResponse(response))
      }
    };
    ws.onclose = () => {
      store.dispatch(setError("Feed Killed"))
     
    };
    ws.onerror = (event) => {
      store.dispatch(setError("Error during processing feed"))
    }
  }
  if (action.type === getType(closeWebSocket)) {
    ws.close();
  }

  if (action.type === getType(unSubscribe)) {
    ws.send(JSON.stringify(messageBuilder(action.payload, 'unsubscribe')));
  }

  if (action.type === getType(subscribe)) {
    ws.send(JSON.stringify(messageBuilder(action.payload, 'subscribe')));
  }


  return next(action);
}
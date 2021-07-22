import { createAction } from "typesafe-actions";
import { ActionOrders, ResponseWebSocket,  } from "../types";

export const initWebSocket= createAction(
    'orderBook/INIT_WEB_SOCKET',
)();

export const closeWebSocket= createAction(
    'orderBook/CLOSE_WEB_SOCKET',
)();

export const setStatusWebSocket= createAction(
    'orderBook/SET_WEB_SOCKET',
)<"subscribed" | "info" | "none" |"unsubscribed"| undefined>();

export const handleWebSocketResponse= createAction(
    'orderBook/HANDLE_WEB_SOCKET',
)<ResponseWebSocket>();


export const successOrdersResponse= createAction(
    'orderBook/SUCCESS_ORDERS',
)<ActionOrders>();

export const resetOrdersBook= createAction(
    'orderBook/RESET_ORDERS_BOOK',
)();

export const unSubscribe= createAction(
    'orderBook/UNSUBSCRIBE_WEB_SOCKET',
)<"PI_XBTUSD"|"PI_ETHUSD">();

export const subscribe = createAction(
    'orderBook/SUBSCRIBE_WEB_SOCKET',
)<"PI_XBTUSD"|"PI_ETHUSD">();

export const setError = createAction(
    'orderBook/SET_ERROR_WEB_SOCKET',
)<string|undefined>();

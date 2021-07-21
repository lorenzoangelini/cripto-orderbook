import { createAction } from "typesafe-actions";
import { ActionOrders, ResponseWebSocket,  } from "../types";

export const initWebSocket= createAction(
    'orderBook/INIT_WEB_SOCKET',
)();

export const closeWebSocket= createAction(
    'orderBook/CLOSE_WEB_SOCKET',
)();

export const handleWebSocketResponse= createAction(
    'orderBook/HANDLE_WEB_SOCKET',
)<ResponseWebSocket>();

export const successOrdersResponse= createAction(
    'orderBook/SUCCESS_ORDERS',
)<ActionOrders>();
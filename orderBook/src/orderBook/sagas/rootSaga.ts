import { all, fork } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { handleWebSocketSaga } from "./webSocketResponse";

const allSagas: any[] = [
    handleWebSocketSaga
]


export function* rootSaga(): SagaIterator{
    yield all(allSagas.map(s => fork(s)))
}
import { createSelector } from "reselect";
import { OrdersReducersState } from "../reducers";

const selectState = (state: {orders: OrdersReducersState}) => state;

export const isLoading = createSelector(
    selectState,
    slice => slice.orders?.data?.isLoading
);


export const getBids = createSelector(
    selectState,
    slice => slice.orders?.data?.bids
);

export const getAsks = createSelector(
    selectState,
    slice => slice.orders?.data?.asks
);

import { createSelector } from "reselect";
import { OrdersReducersState } from "../reducers";
import { getTotalFromTupleString } from "../../_shared/utils";

const selectState = (state: { orders: OrdersReducersState }) => state;

export const isLoading = createSelector(
    selectState,
    slice => slice.orders?.data?.isLoading
);

export const getBids = createSelector(
    selectState,
    slice => {
        const propertyNames: [string, string][] = Object.entries(slice.orders?.data?.bids);
        propertyNames.sort((a, b) => {
            const [price] = a
            const [priceB] = b
            return parseFloat(price) - parseFloat(priceB)
        })
        const result = getTotalFromTupleString(propertyNames);
        return result
    }
);

export const getAsks = createSelector(
    selectState,
    slice => {
        const propertyNames: [string, string][] = Object.entries(slice.orders?.data?.asks);
        propertyNames.sort((a, b) => {
            const [price] = a
            const [priceB] = b
            return parseFloat(price) - parseFloat(priceB)
        })
        const result = getTotalFromTupleString(propertyNames);
        return result
    }
);


export const getCurrentRowAsks = (index: number) => createSelector(
    getAsks,
    slice => {
        return slice[index];
    }
);

export const getCurrentBidsRow = (index: number) => createSelector(
    getBids,
    slice => {
        return slice[index];
    }
);

export const getCurrentBidsPriceRow = (index: number) => createSelector(
    getBids,
    slice => {
        return slice[index]?.price;
    }
);
export const getCurrentBidsTotalRow = (index: number) => createSelector(
    getBids,
    slice => {
        return slice[index]?.total;
    }
);

export const getCurrentBidsSizeRow = (index: number) => createSelector(
    getBids,
    slice => {
        return slice[index]?.size;
    }
);

export const getCurrentAsksPriceRow = (index: number) => createSelector(
    getAsks,
    slice => {
        return slice[index]?.price;
    }
);
export const getCurrentAsksTotalRow = (index: number) => createSelector(
    getAsks,
    slice => {
        return slice[index]?.total;
    }
);

export const getCurrentAsksSizeRow = (index: number) => createSelector(
    getAsks,
    slice => {
        return slice[index]?.size;
    }
);

export const getErros = createSelector(
    selectState,
    slice => slice.orders?.data?.error
);


export const getWebSocketStatus = createSelector(
    selectState,
    slice => slice.orders?.data?.statusWebSocket
);

export const getProductsId = createSelector(
    selectState,
    slice => slice.orders?.data?.productId
);


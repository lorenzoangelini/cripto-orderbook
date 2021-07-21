export type ResponseWebSocket = {

    asks: Array<[number, number]> 
    bids: Array<[number, number]> 
    feed: string;
    product_id: "PI_XBTUSD" | "PI_ETHUSD",
    numLevels: number;

}
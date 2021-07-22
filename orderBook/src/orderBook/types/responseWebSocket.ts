export type ResponseWebSocket = {

    asks: Array<[number, number]> 
    bids: Array<[number, number]> 
    feed: string;
    product_id: "PI_XBTUSD" | "PI_ETHUSD",
    numLevels: number;
    event?: 'subscribed' | 'info' | 'unsubscribed'

}


export enum ProductId  {
    PI_XBTUSD = "PI_XBTUSD",
    PI_ETHUSD = "PI_ETHUSD"
}
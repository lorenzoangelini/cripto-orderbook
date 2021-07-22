

export type ActionOrders= {
    asks: { [key: string]: string }; 
    bids: { [key: string]: string }; 
}

export type Level = {
    price: number; 
    size: number; 
    total: number;
}
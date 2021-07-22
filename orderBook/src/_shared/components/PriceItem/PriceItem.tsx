import React from "react"
import { View, Text, FlatList } from "react-native"
import { useSelector } from "react-redux"
import { getCurrentAsksPriceRow, getCurrentBidsPriceRow, getCurrentBidsRow, getCurrentRowAsks, Level } from "../../../orderBook"
import { appStyle } from "../../styles"
import { TableText } from "../TableText"

type TableRowProps = {
    index: number
    textColors: string;
    isAsk: boolean
   
}

const PriceItemComponent: React.FC<TableRowProps> = ({
    index,
    textColors = 'white',
    isAsk }): JSX.Element => {
    const price = isAsk  ?  useSelector(getCurrentAsksPriceRow(index)) : useSelector(getCurrentBidsPriceRow(index))
    return <TableText value={price} toRound={true} textColors={textColors}/>
}

PriceItemComponent.displayName = 'PriceItem'

export const PriceItem = React.memo(PriceItemComponent);
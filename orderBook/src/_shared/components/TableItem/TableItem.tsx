import React from "react"
import { View, Text, FlatList } from "react-native"
import { useSelector } from "react-redux"
import { getCurrentBidsRow, getCurrentRowAsks, Level } from "../../../orderBook"
import { appStyle } from "../../styles"
import { PriceItem } from "../PriceItem/PriceItem"
import { SizeItem } from "../SizeItem"
import { TableText } from "../TableText"
import { TotalItem } from "../TotalItem"


type TableRowProps = {
    index: number
    textColors: string;
}


const TableCell: React.FC<TableRowProps> = ({
    index,
    textColors = 'red' }): JSX.Element => {
    return <View style={appStyle.spaceBetween}>
     <View style={appStyle.cellContainer}>
     <PriceItem isAsk={textColors == 'red'} textColors={textColors} index={index}/>
     <SizeItem isAsk={textColors == 'red'}  index={index}/>
     <TotalItem isAsk={textColors == 'red'}  index={index}/>
    </View>
    </View>
}

TableCell.displayName = 'TableItem'

export const TableItem = React.memo(TableCell);
import React from "react"
import { View, Text, FlatList } from "react-native"
import { useSelector } from "react-redux"
import { getCurrentAsksPriceRow, getCurrentBidsPriceRow, getCurrentBidsRow, getCurrentRowAsks, Level } from "../../../orderBook"
import { appStyle } from "../../styles"

type TableRowProps = {
    textColors: string;
    toRound?: boolean;
    value: number

}

const TableTextComponent: React.FC<TableRowProps> = ({
    textColors = 'white',
    value,
    toRound = false }): JSX.Element => {

    return <View style={appStyle.flex1}><Text style={[appStyle.textCenter, appStyle.p1White, { color: textColors },]}>{
        toRound ? value?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,') : value}</Text></View>
}

TableTextComponent.displayName = 'TableItem'

export const TableText = React.memo(TableTextComponent);
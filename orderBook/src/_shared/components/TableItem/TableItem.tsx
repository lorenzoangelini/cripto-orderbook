import React from "react"
import { View, Text, FlatList } from "react-native"
import { Level } from "../../../orderBook"
import { appStyle } from "../../styles"


type TableRowProps = {
    level: Level
    textColors: string;
}


export const TableItem: React.FC<TableRowProps> = ({
    level,
    textColors = 'red' }): JSX.Element => {

    return <View style={appStyle.spaceBetween}>
        
     <View style={appStyle.cellContainer}>
        <View style={appStyle.flex1}><Text style={[appStyle.textCenter, { color: textColors }]}>{level?.price?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')}</Text></View>
        <View style={appStyle.flex1}><Text style={appStyle.textCenter}>{level?.size?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')}</Text></View>
        <View style={appStyle.flex1}><Text style={appStyle.textCenter}>{level?.total?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')}</Text></View>
    </View>
 

    </View>



}

TableItem.displayName = 'TableItem'
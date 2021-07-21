import React from "react"
import { View, Text, FlatList } from "react-native"
import { Level } from "../../../orderBook"
import { appStyle } from "../../styles"
import { TableItem } from "../TableItem"


type TableRowProps = {
    items: Level[]
    textColors: string;
}


export const TableRow: React.FC<TableRowProps> = ({
    items = [],
    textColors = 'red' }): JSX.Element => {

    return <View style={appStyle.spaceBetween}>
        
    <FlatList
        scrollEnabled={false}
        data={items}
        renderItem={({item})=> <TableItem textColors={textColors} level={item}/>}
        keyExtractor={(item) => "key"+item.price}
      />
    </View>

}

TableRow.displayName = 'TableRow'
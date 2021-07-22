import React from "react"
import { View, FlatList } from "react-native"
import { appStyle } from "../../styles"
import { TableItem } from "../TableItem"


type TableRowProps = {
    textColors: string;
}


export const TableRowMemo: React.FC<TableRowProps> = ({
    textColors = 'red' }): JSX.Element => {
    return <View style={appStyle.spaceBetween}>
       {/* { <TableItem index={0} key={"key_" + 1} textColors={textColors} />
        <TableItem index={1} key={"key_" + 2} textColors={textColors} />
        <TableItem index={2} key={"key_" + 3} textColors={textColors} />
        <TableItem index={3} key={"key_" + 4} textColors={textColors} />
        <TableItem index={4} key={"key_" + 5} textColors={textColors} />
        <TableItem index={5} key={"key_" + 6} textColors={textColors} />
        <TableItem index={6} key={"key_" + 7} textColors={textColors} />} */}
       
        {/*[...Array(10)].map((item,index) => {
            return <TableItem index={index} key={"key_" + index} textColors={textColors} />
        })*/}
        {<FlatList
        scrollEnabled={false}
        data={[0,1,2,3,4,5,7,8,9,10,11]}
        renderItem={({item, index})=> <TableItem textColors={textColors} index={index}/>}
        keyExtractor={(item) => "key"+item}
      />}
    </View>

}

TableRowMemo.displayName = 'TableRow'


export const TableRow = React.memo(TableRowMemo);
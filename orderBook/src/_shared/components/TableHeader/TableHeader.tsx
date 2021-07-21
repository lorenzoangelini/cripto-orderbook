import React from "react"
import { View, Text } from "react-native"
import { appStyle } from "../../styles"


type TableHeaderProps = {
    items: string[]
}


export const TableHeader: React.FC<TableHeaderProps> = ({ items = [] }): JSX.Element => {

    return <View style={appStyle.headerContainer}>

        {items?.map((value) => {
            return <View key={'key' + value} style={appStyle.headerRow}>
                <View style={appStyle.flex1}><Text style={appStyle.textCenter}>{value}</Text></View>
            </View>
        })
        }


    </View>

}

TableHeader.displayName = 'TableHeader'
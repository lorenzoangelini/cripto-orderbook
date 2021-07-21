import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import { Button, TableHeader, TableRow } from "../../_shared/components";
import { useOrderBook } from "../hooks";
import { appStyle } from "../../_shared/styles"
const OrderBookScreen: React.FC = () => {

    const { stopWebSocket, startWebSocket, asks, bids, toggleSubscribeSocket } = useOrderBook();

    return <><ScrollView style={appStyle.height100}>
        <TableHeader items={['PRICE', 'SIZE', 'TOTAL']} />
        <TableRow textColors={'green'} items={bids} />
        <View style={appStyle.separator} />
        <TableRow textColors={'red'} items={asks} />
    </ScrollView>

        <View style={[appStyle.headerRow, appStyle.bottomBarContainer]}>
            <Button color={appStyle.backgroundPurple} onPress={toggleSubscribeSocket} text={"Toggle Feed"} />
            <Button color={appStyle.backgroundRed} onPress={stopWebSocket} text={"Kill Feed"} />
        </View>
    </>
}

export default OrderBookScreen;
import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import { Button, TableHeader, TableRow } from "../../_shared/components";
import { useOrderBook } from "../hooks";
import { appStyle } from "../../_shared/styles"
import { NotificationBanner } from "../../_shared/components/NotificationBanner";
const OrderBookScreen: React.FC = () => {

    const { stopWebSocket, toggleSubscribeSocket, isAlive } = useOrderBook();

    return <><ScrollView style={[appStyle.height100, appStyle.backgroundBlack]}>
        <TableHeader items={['PRICE', 'SIZE', 'TOTAL']} />
        <TableRow textColors={'green'}  />
        <View style={appStyle.separator} />
        <TableRow textColors={'red'} />
    </ScrollView>

        <View style={[appStyle.headerRow, appStyle.bottomBarContainer]}>

            {isAlive ? <><Button color={appStyle.backgroundPurple} onPress={toggleSubscribeSocket} text={"Toggle Feed"} />
                <Button color={appStyle.backgroundRed} onPress={stopWebSocket} text={"Kill Feed"} /></>
                : <Button color={appStyle.backgroundGreen} onPress={stopWebSocket} text={"Reactivate Feed"} />}
        </View>
        <NotificationBanner/>
    </>
}

export default OrderBookScreen;
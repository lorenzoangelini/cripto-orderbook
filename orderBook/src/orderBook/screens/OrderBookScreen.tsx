import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import { useOrderBook } from "../hooks";

const OrderBookScreen: React.FC = () => {

    const {stopWebSocket, startWebSocket, asks, bids} = useOrderBook();
   
    return <ScrollView>
    <Pressable onPress={stopWebSocket}>
        <View style={{height:100, backgroundColor: 'blue', width:100}}>
    </View></Pressable>
    <Pressable onPress={startWebSocket}>
    <View style={{height:100, backgroundColor: 'red', width:100}}>
</View></Pressable>

{asks?.map((item) => {

return <View style={{flexDirection: 'row'}}>
    <Text>{item.price}</Text>
    <Text>----------</Text>
    <Text>{item.size}</Text>
    <Text>----------</Text>
    <Text>{item.total}</Text>
    </View>
})
}

{bids?.map((item) => {

return <View style={{flexDirection: 'row'}}>
    <Text style={{color:"red"}}>{item.price}</Text>
    <Text style={{color:"red"}}>----------</Text>
    <Text style={{color:"red"}}>{item.size}</Text>
    <Text style={{color:"red"}}>----------</Text>
    <Text style={{color:"red"}}>{item.total}</Text>
    </View>
})
}


</ScrollView>
}

export default OrderBookScreen;
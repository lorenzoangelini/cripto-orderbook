import React from "react"
import { View, Text, Pressable } from "react-native"
import { appStyle } from "../../styles"


type ButtonProps = {
    onPress: () => void;
    text: string;
    color: {backgroundColor: string}

}


export const Button: React.FC<ButtonProps> = ({ onPress, text, color }): JSX.Element => {

    return <Pressable onPress={onPress}>
        <View style={[appStyle.button,color]}><Text style={[appStyle.padding10,appStyle.h2White]}>{text}</Text></View>
    </Pressable>

}

Button.displayName = 'Button'
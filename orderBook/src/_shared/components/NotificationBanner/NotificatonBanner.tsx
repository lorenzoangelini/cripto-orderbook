import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getErros, setError } from "../../../orderBook"
import { appStyle } from "../../styles"

export const NotificationBanner: React.FC = (): JSX.Element => {

    const error = useSelector(getErros)
    const dispatch = useDispatch();

    useEffect(() => {

        if(error){
            setTimeout(() => {
                dispatch(setError(undefined))
            },3000)
        }

    },[error])


    return <>
     {error!! && <View style={appStyle.errorBannerContainer}>
        <Text style={appStyle.h1White}>{error}</Text>
    </View>}
    </>

}

NotificationBanner.displayName = 'NotificationBanner'
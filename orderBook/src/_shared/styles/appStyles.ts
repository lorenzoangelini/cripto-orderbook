import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({

    flex1: {
        flex: 1
    },
    textCenter: {
        textAlign: 'center'
    },
    headerContainer: {
        flexDirection: 'row', backgroundColor: 'gray', paddingTop: 15, paddingBottom: 15,
        justifyContent: "space-around"
    },
    headerRow: {
        flexDirection: 'row', alignItems: 'center', flex: 1
    },
    spaceBetween: {
        justifyContent: "space-between", flex: 1
    },
    cellContainer: {
        flexDirection: 'row', padding: 5
    },
    separator: {
        marginBottom: 30
    },
    backgroundRed: {
        backgroundColor: 'red'
    },
    backgroundPurple: {
        backgroundColor: 'purple'
    },
    backgroundGreen: {
        backgroundColor: 'green'
    },
    bottomBarContainer: {
        position: 'absolute', bottom: 0, left: 0, right: 0, flex: 1, backgroundColor: '#242D3C', height: "12%", justifyContent: 'center', alignItems: 'center'
    },
    button: {
        height: 50, minWidth: '25%', borderRadius: 10, marginLeft: 10, marginRight: 10, alignItems: 'center', justifyContent: 'center'
    },
    height100: {
        height: "100%"
    },
    h1: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    h1White: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    h2: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    h2White: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    padding10: {
        padding: 10
    },
    errorBannerContainer: {
        position: 'absolute', borderRadius: 20, top: 0, left: 20,
        right: 20, flex: 1, backgroundColor: 'red', height: "8%", justifyContent: 'center',
        alignItems: 'center'
    },


})
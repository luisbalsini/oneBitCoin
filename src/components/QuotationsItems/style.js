import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10 
    },
    logoBitCoin: {
        width: 40,
        height: 40,
        marginLeft: 2
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    },
    contextLeft: {
        width: "36%",
        height: "100%",
        alignItems: "flex-start"
    },
    contextRigth: {
        width: "60%",
        alignItems: "flex-end"    
    },
    dayCotation: {
        fontSize: 16,
        color: "#ffffff",
        paddingLeft: 5
    },
    price: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default styles
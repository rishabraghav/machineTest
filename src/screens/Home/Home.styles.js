import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "92%",
        backgroundColor: "#FDFDFD",
        // backgroundColor: "transparent",
        paddingHorizontal: 20,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    textcontainer: {
        color: "red"
    },
    button: {
        backgroundColor: "#FF9843",
        marginVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 15
    }
})

export default styles;
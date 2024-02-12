import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icons from "../../../common/icons";

const Header = ({title}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
           <TouchableOpacity style={styles.buttonContainer}>
                <Image source={icons.switchIcon} style={{height: 16, width: 16, transform: [{rotate: '90deg'}, {scaleX: -1}]}} />
                <Text style={styles.buttonText}>switch</Text>
           </TouchableOpacity>
            
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 24,
        fontWeight: "900",
        textTransform: "capitalize",
        color: "black",
        opacity: 0.6
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        color: "#78C1F3",
        fontWeight: "600",
        fontSize: 15,
        margin: 4,
        textTransform: "capitalize"
    }
})
 
export default Header;
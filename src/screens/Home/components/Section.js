import { StyleSheet, Text, View } from "react-native";

const Section = ({title}) => {
    return ( 
        <View style={styles.container}> 
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.horizontalLineContainer}>
                <View style={styles.lineFilled} />
                <View style={styles.lineEmpty} />
                <View style={styles.lineEmpty} />
                <View style={styles.lineEmpty} />
            </View>
        </View>
     );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    },
    titleContainer: {
        backgroundColor: "#FF9843",
        alignSelf: "flex-start",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    titleText: {
        color: "white",
        fontWeight: "600",
        textTransform: "capitalize"
    },
    horizontalLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 10,
    },
    lineFilled: {
        height: 5,
        borderRadius: 20,
        width: "55%", 
        backgroundColor: "#FF9843",
    },
    lineEmpty: {
        height: 5,
        borderRadius: 20,
        width: "12%", 
        backgroundColor: "#F7D4B7",
    }
})
 
export default Section;
import { StyleSheet, Text, View } from "react-native";
import CustomSliderTwo from "./CustomSliderTwo";
import { useState } from "react";

const Question = ({title, sliderData}) => {
    const [selectedDotIndex, setSelectedDotIndex] = useState(0);
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{sliderData[selectedDotIndex]}</Text>
            <CustomSliderTwo 
                selectedDotIndex={selectedDotIndex} 
                setSelectedDotIndex={setSelectedDotIndex} />
        </View>
     );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "black",
        opacity: 0.6,
    },
    subtitle: {
        fontWeight: "700",
        marginVertical: 10,
        color: "black",
        opacity: 0.6,
    }
})
 
export default Question;
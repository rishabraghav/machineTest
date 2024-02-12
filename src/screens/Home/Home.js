import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.styles";
import Header from "./components/Header";
import Section from "./components/Section";
import Question from "./components/Question";

const questions = [
    "How would you rate your sleep routine?",
    "Do you like Hangout with friends?"
]

const sliderData = {
    0: "Rarely",
    1: "Seldom",
    2: "Occasionally",
    3: "Infrequently",
    4: "Moderate",
    5: "Sometimes",
    6: "Frequently",
    7: "Often",
    8: "Oftenly",
    9: "Regularly",
    10: "Always",
}

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"quick assesment"} />
            <Section title={"physical health"} />
            <FlatList
                data={questions}
                renderItem={({ item }) => <Question title={item} sliderData={sliderData} />}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Home;
import { SafeAreaView, StatusBar } from "react-native";
import Home from "./src/screens/Home/Home";

const App = () => {
  return ( 
    <SafeAreaView style={{backgroundColor: "#E9B824", flex: 1}}>
      <Home />
    </SafeAreaView>
   );
}
 
export default App;
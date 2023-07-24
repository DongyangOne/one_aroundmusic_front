import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router_1 from "./Screen/Router_1";
import Router_2 from "./Screen/Router_2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="one" component={Router_1} />
        <Stack.Screen name="two" component={Router_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



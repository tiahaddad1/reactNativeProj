import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/IndexScreen";
import ScreenOne from "./src/ScreenOne";
import ScreenTwo from "./src/ScreenTwo";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          container={IndexScreen}
          options={{ title: "AnythingYouLike App" }}
        />
        <Stack.Screen
          name="ScreenOne"
          container={ScreenOne}
          options={{ title: "Screen 1" }}
        />
        <Stack.Screen
          name="ScreenTwo"
          container={ScreenTwo}
          options={{ title: "Screen 2" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import { View, Text, Button } from "react-native";

const ScreenTwo = ({ navigation }) => {
  return (
    <View>
      <Text>This is Screen Two</Text>

      <Button
        title="Go to the Index page here!"
        onPress={() => navigation.navigate("Index")}
      />
      <Button
        title="Go to the Second page here!"
        onPress={() => navigation.navigate("ScreenTwo")}
      />
    </View>
  );
};

export default ScreenTwo;

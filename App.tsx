import { StyleSheet, Text, View } from "react-native";

import { Home } from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Movies } from "./screens/Movies";
import { OneMovie } from "./screens/OneMovie";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Movies: undefined;
  OneMovie: { movieId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="OneMovie" component={OneMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

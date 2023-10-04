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
  OneMovie: { movieId: number; title: string; img: any; describe: string };
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

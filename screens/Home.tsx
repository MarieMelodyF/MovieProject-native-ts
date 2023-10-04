import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home({ navigation }: Props) {
  return (
    <View style={[styles.bcgBlack, styles.height, styles.DisplayFlexCent]}>
      <Text>Home</Text>

      <TouchableOpacity
        style={{ backgroundColor: "darkred", padding: 15, borderRadius: 10 }}
        onPress={() => {
          navigation.navigate("Movies");
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Accéder à mes films
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bcgBlack: {
    backgroundColor: "black",
  },
  height: {
    height: 900,
  },
  DisplayFlexCent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

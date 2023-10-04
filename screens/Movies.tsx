import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Data from "../data/data.json";

type Props = NativeStackScreenProps<RootStackParamList, "Movies">;

console.log(Data);
export function Movies({ navigation }: Props) {
  Data.map((films, index) => {
    // console.log(films.title);
    return (
      <View style={[styles.bcgBlack, styles.height]}>
        <Text
          style={{
            color: "white",
            padding: 15,
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Vos films préférés
        </Text>

        <TouchableOpacity
          onPress={() => {
            //   navigation.navigate("OneMovie");
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            {films.title}
          </Text>
          <Text style={{ color: "black" }}>TEST</Text>
        </TouchableOpacity>
      </View>
    );
  });
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
  txtAlign: {
    textAlign: "center",
  },
});

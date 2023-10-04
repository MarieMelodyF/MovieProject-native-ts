import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import Data from "../data/data.json";
import { OneMovie } from "./OneMovie";

type Props = NativeStackScreenProps<RootStackParamList, "Movies">;

export function Movies({ navigation }: Props): JSX.Element {
  return (
    <View style={[styles.bcgBlack, styles.DisplayFlexCent, styles.height]}>
      {Data.map((films, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "darkred",
              padding: 15,
              borderRadius: 10,
              margin: 10,
            }}
            onPress={() => {
              navigation.navigate("OneMovie", {
                movieId: films._id,
                title: films.title,
                img: films.poster_path,
                describe: films.overview,
              });
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
          </TouchableOpacity>
        );
      })}
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

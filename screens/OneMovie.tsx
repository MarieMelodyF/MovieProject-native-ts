import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Data from "../data/data.json";

type Props = NativeStackScreenProps<RootStackParamList, "OneMovie">;

export function OneMovie({ route }: Props) {
  const url = route.params.img.split("/")[6];

  console.log(url);

  return (
    <View style={[styles.bcgBlack, styles.height]}>
      <Text style={styles.describeTitle}>{route.params.title}</Text>

      <Text style={styles.describe}>{route.params.describe}</Text>

      <Image
        style={styles.img}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${url}`,
        }}
      ></Image>
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

  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    padding: 10,
  },
  img: {
    height: 900,
    position: "relative",
    bottom: 200,
  },
  describe: {
    color: "white",
    position: "relative",
    top: 400,
    zIndex: 2,
    backgroundColor: "#000000",
    opacity: 0.8,
    textAlign: "center",
    fontSize: 16,
  },
  describeTitle: {
    color: "white",
    position: "relative",
    top: 400,
    zIndex: 2,
    backgroundColor: "#000000",
    opacity: 0.8,
    textAlign: "center",
    fontSize: 25,
  },
});

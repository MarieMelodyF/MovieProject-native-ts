import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import Data from "../data/data.json";

type Props = NativeStackScreenProps<RootStackParamList, "OneMovie">;

export function OneMovie({ navigation }: Props) {
  return (
    <View>
      <Text>Home</Text>
      {/* Data.map((films, index) => {
    console.log(films);
  }); */}
    </View>
  );
}

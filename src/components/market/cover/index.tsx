import { Buttom } from "@/components/button";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { ImageBackground, View } from "react-native";
import { s } from "./styles";

type Props = {
  uri: string;
};

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={s.header}>
        <Buttom style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Buttom.Icon icon={IconArrowLeft} />
        </Buttom>
      </View>
    </ImageBackground>
  );
}

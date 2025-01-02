import { Buttom } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { router } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 30, gap: 30 }}>
      <Welcome />
      <Steps />

      {/* <Buttom style={{ backgroundColor: "orange" }}> */}
      {/* <Buttom isLoading> */}
      <Buttom onPress={() => router.navigate("/home")}>
        {/* <Buttom.Icon icon={IconPlus} /> */}
        <Buttom.Title>Começar</Buttom.Title>
      </Buttom>
    </View>
  );
}

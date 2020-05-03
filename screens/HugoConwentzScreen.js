import React from "react";
import { Text, StyleSheet, ScrollView, Image } from "react-native";

const HugoConwentzScreen = (props) => {
  return (
    <ScrollView>
      <Text style={styles.title}>Hugo Conwentz</Text>
      <Image
        style={styles.portrait}
        source={require("./assets/Conwentz_Hugo_Wilhelm.jpg")}
      />
      <Text style={styles.text}>
        W roku 1879 powierzono mu w Gdańsku funkcję organizatora nowego Muzeum
        Prowincji Zachodniopruskiej. Od stycznia 1880 do 1910 był jego
        dyrektorem (do kwietnia 1882 komisarycznym). Prowadził badania nad
        bursztynem. W roku 1904 opublikował głośny memoriał zawierający
        uzasadniony naukowo projekt mecenatu państwowego nad ochroną przyrody.
        Zainicjował akcję inwentaryzacji torfowisk i skupisk roślinnych na
        Pomorzu Gdańskim; doprowadził do otoczenia ich ochroną prawną, powstania
        rezerwatów i pomników przyrody.
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "Chomsky",
    fontSize: 24,
    alignSelf: "center",
  },
  portrait: {
    alignSelf: "center",
    borderRadius: 50,
    width: "80%",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default HugoConwentzScreen;

import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const DanielGralathScreen = props => {
  return (
    <ScrollView>
      <Text style={styles.title}>Daniel Gralath</Text>
      <Image
        style={styles.portrait}
        source={require("./assets/Daniel_Gralath.jpg")}
      />
      <Text style={styles.text}>
        Burmistrz, burgrabia, uczony. Ur. 30 V 1708 r. w Gdańsku, zm. 23 VII
        1767 r. w Gdańsku. Od 1724 r. uczeń Gimnazjum Gdańskiego. Od 1728 r.
        studiował nauki przyrodnicze i fizyczne na uniwersytetach w Halle i
        Marburgu. W 1734 r. powrócił do Gdańska. Prowadził badania nad
        elektrycznością, publikując prace z tego zakresu. Jako pierwszy w
        świecie wyjaśnił działanie tzw. butelek lejdejskich i zmierzył siły
        oddziaływania między naładowanymi elektrodami. Współzałożyciel
        Towarzystwa Przyrodniczego w Gdańsku - 1743 r. Od 1754 r. w
        administracji miasta Gdańska. 1754 - 1758 ławnik sądu miejskiego, rajca
        - 1758, 1763-1767 r. burmistrz Miasta Gdańska. Burgrabia królewski
        (przedstawiciel króla w Gdańsku) w 1762 r. Zainicjował i częściowo
        sfinansował założenie alei lipowej między Gdańskiem a Wrzeszczem
        (1767-1769), ukończone już po jego śmierci
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "Chomsky",
    fontSize: 24,
    alignSelf: "center"
  },
  portrait: {
    alignSelf: "center",
    borderRadius: 50
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default DanielGralathScreen;

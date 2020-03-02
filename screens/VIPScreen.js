import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import MainHistoryButton from "../MainHistoryButton";
const VIPScreen = props => {
  return (
    <ImageBackground
      source={require("./assets/MainPhoto.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.textField}>
        <Text style={styles.title}>Znane Osobistości</Text>
        <Text style={styles.text}>
          Gdańsk, przez wieki był jednym z najważniejszych i najbogatszych miast
          Polski, jest miastem o bogatym dorobku kulturalnym, naukowym jak i
          artystycznym. Poniżej są przedstawione sylwetki niektórych z nich.
        </Text>
      </View>
      <ScrollView>
        <View style={styles.MenuSection}>
          <MainHistoryButton
            text="Jan Heweliusz"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Hevelius"
              });
            }}
          />
          <MainHistoryButton
            text="Daniel Gralath"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Gralath"
              });
            }}
          />
          <MainHistoryButton
            text="Hugo Conventz"
            onPress={() => {
              props.navigation.navigate({
                routeName: "VIP"
              });
            }}
          />
          <MainHistoryButton
            text="Nathaniel Wolf"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Daniel Fahrenheit"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Abraham van den Block"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Izaak van den Block"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Jan Strakowski"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Daniel Chodowiecki"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Jacob Kabrun"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Anton Möller"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Krzysztof Celestyn Mrongovius"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Johann Uphagen"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Gunther Grass"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
          <MainHistoryButton
            text="Lech Wałęsa"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Modern"
              });
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "Chomsky",
    fontSize: 24,
    alignSelf: "center"
  },
  textField: {
    width: "100%",
    height: "35%",
    backgroundColor: "white",
    opacity: 0.8,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  },
  MenuSection: {
    flex: 0.7,
    alignSelf: "center",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "20%"
  }
});
export default VIPScreen;

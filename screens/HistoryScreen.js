import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import MainHistoryButton from "../MainHistoryButton";
const HistoryScreen = props => {
  return (
    <ImageBackground
      source={require("./assets/MainPhoto.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: "white",
          opacity: 0.5,
          marginRight: "10%",
          marginLeft: "10%"
        }}
      >
        <View>
          <Text
            style={{ alignSelf: "center", fontFamily: "Chomsky", fontSize: 25 }}
          >
            Historia Gdańska
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Nikt tak naprawdę nie wie kiedy powstał Gdańsk, nie mniej najstarsze
            zapiski o tym mieście pochodza z roku 997 kiedy to gościł w nim
            biskup Wojciech, przed swoją misją ewangelizującą wśród Prusów.
            Gdańsk ma ponad 1000 lat. Jego historie można podzielić na okresy
          </Text>
        </View>
        <ScrollView>
          <View style={styles.MenuSection}>
            <MainHistoryButton
              text="Średniowiecze"
              onPress={() => {
                props.navigation.navigate({
                  routeName: "Medieval"
                });
              }}
            />
            <MainHistoryButton
              text="Nowożytność"
              onPress={() => {
                props.navigation.navigate({
                  routeName: "Contemporary"
                });
              }}
            />
            <MainHistoryButton
              text="Oświecenie"
              onPress={() => {
                props.navigation.navigate({
                  routeName: "VIP"
                });
              }}
            />
            <MainHistoryButton
              text="Współczesność"
              onPress={() => {
                props.navigation.navigate({
                  routeName: "Modern"
                });
              }}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  MenuSection: {
    flex: 0.7,
    alignSelf: "center",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "20%"
  }
});

export default HistoryScreen;

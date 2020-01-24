import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import MainMenuButton from "../MainMenuButton";

const HomeScreen = props => {
  return (
    <ImageBackground
      source={require("./assets/MainPhoto.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.LogoSection}>
        <Image
          source={require("./assets/icon2.png")}
          style={styles.Logo}
        ></Image>
      </View>
      <View style={styles.MenuSection}>
        <MainMenuButton
          text="Historia"
          onPress={() => {
            props.navigation.navigate({
              routeName: "History"
            });
          }}
        />
        <MainMenuButton
          text="Wycieczki"
          onPress={() => {
            props.navigation.navigate({
              routeName: "Tours"
            });
          }}
        />
        <MainMenuButton
          text="Znani Gdańszczanie"
          onPress={() => {
            props.navigation.navigate({
              routeName: "VIP"
            });
          }}
        />
        <MainMenuButton
          text="Jak Oni Żyli"
          onPress={() => {
            props.navigation.navigate({
              routeName: "EverydayLife"
            });
          }}
        />
        <MainMenuButton
          text="O Mnie"
          onPress={() => {
            props.navigation.navigate({
              routeName: "About"
            });
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  LogoSection: {
    flex: 0.3,
    alignSelf: "center",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "20%"
  },
  Logo: {
    alignSelf: "center"
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

export default HomeScreen;

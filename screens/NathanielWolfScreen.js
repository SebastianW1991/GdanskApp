import React from "react";
import { Text, StyleSheet, ScrollView, Image } from "react-native";

const NathanielWolfScreen = (props) => {
  return (
    <ScrollView>
      <Text style={styles.title}>Nathaniel Wolf</Text>
      <Image
        style={styles.portrait}
        source={require("./assets/Johannes_Hevelius.png")}
      />
      <Text style={styles.text}>
        Ur. 28 I 1611 r. w Gdańsku, zm. 28 I 1687 r. w Gdańsku. Właściwie Johann
        Hewelke (Hevelke) . Pochodził z rodziny wywodzącej się z Czech, od lat
        zajmującej się w Gdańsku browarnictwem. Od 1618 r. uczył się w Gimnazjum
        Gdańskim oraz prywatnie u profesora tej szkoły, wybitnego matematyka
        Piotra Krugera. Od 1630 r. studiował prawo na uniwersytecie w Lejdzie
        (Holandia). W latach 1631 - 1634 przebywał w Anglii i Francji, studiując
        matematykę, astronomię i rysunek. Brał też udział w obserwacjach
        astronomicznych, dysputach naukowych, uczył się techniki konstruowania
        zegarów słonecznych i przyrządów do obserwacji nieba. Od 1634 r. do
        końca życia przebywał w Gdańsku. Właściciel browarów w Gdańsku, w latach
        1641 - 1651 ławnik sądu Starego Miasta, a następnie od 1651 r. do 1687 r
        .rajca Starego Miasta. Przez wiele lat prowadził intensywne obserwacje
        astronomiczne z obserwatorium umieszczonego na dachu własnych
        kamieniczek przy ul. Korzennej. Korespondował z uczonymi z całej Europy.
        Jego przyjaciółmi i protektorami byli polscy królowie Jan Kazimierz i
        Jan III Sobieski. Odwiedzali oni astronoma i uczestniczyli w pokazach
        astronomicznych. Jeden z nowo odkrytych gwiazdozbiorów nazwał Heweliusz
        "Tarczą Sobieskiego". W 1664 r. został członkiem Królewskiej Akademii
        Nauk w Londynie. Skonstruował i zbudował wiele unikalnych przyrządów do
        obserwacji astronomicznych, znanych nam z ilustracji zamieszczonych w
        jego dziełach. Prace drukował we własnej drukarni; ilustracje i rysunki
        do nich wykonywali i rytowali znani malarze i graficy działający w
        Gdańsku; część z nich było dziełem samego uczonego. Grób i epitafium
        wielkiego astronoma znajdują się w kościele św. Katarzyny.
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
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default NathanielWolfScreen;

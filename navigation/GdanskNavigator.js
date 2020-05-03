import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MedievalScreen from "../screens/MedievalScreen";
import ModernScreen from "../screens/ModernScreen";
import ContemporaryScreen from "../screens/ContemporaryScreen";
import TourDolneMiastoScreen from "../screens/TourDolneMiastoScreen";
import TourOliwaScreen from "../screens/TourOliwaScreen";
import ToursScreen from "../screens/ToursScreen";
import AboutScreen from "../screens/AboutScreen";
import EverydayLifeScreen from "../screens/EverydayLifeScreen";
import VIPScreen from "../screens/VIPScreen";
import JanHeveliusScreen from "../screens/JanHeveliusScreen";
import DanielGralathScreen from "../screens/DanielGralathScreen";
import HugoConwentzScreen from "../screens/HugoConwentzScreen";
import NathanielWolfScreen from "../screens/NathanielWolfScreen";
const GdanskNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  History: HistoryScreen,
  Medieval: MedievalScreen,
  Contemporary: ContemporaryScreen,
  Modern: ModernScreen,
  DolneMiasto: TourDolneMiastoScreen,
  Oliwa: TourOliwaScreen,
  Tours: ToursScreen,
  About: AboutScreen,
  EverydayLife: EverydayLifeScreen,
  VIP: VIPScreen,
  Hevelius: {
    screen: JanHeveliusScreen,
    navigationOptions: {
      title: "Jan Heweliusz",
      headerStyle: {
        fontSize: 24,
      },
    },
  },
  Gralath: {
    screen: DanielGralathScreen,
    navigationOptions: {
      title: "Daniel Gralath",
      headerStyle: {
        fontSize: 24,
      },
    },
  },
  Conwentz: {
    screen: HugoConwentzScreen,
    navigationOptions: {
      title: "Hugo Conwentz",
      headerStyle: {
        fontSize: 24,
      },
    },
  },
  Wolf: {
    screen: NathanielWolfScreen,
    navigationOptions: {
      title: "Nathaniel Wolf",
      headerStyle: {
        fontSize: 24,
      },
    },
  },
});

export default createAppContainer(GdanskNavigator);

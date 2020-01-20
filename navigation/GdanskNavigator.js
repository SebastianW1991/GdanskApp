import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import MedievalScreen from '../screens/MedievalScreen';
import ModernScreen from '../screens/ModernScreen';
import ContemporaryScreen from '../screens/ContemporaryScreen';
import TourDolneMiastoScreen from '../screens/TourDolneMiastoScreen';
import TourOliwaScreen from '../screens/TourOliwaScreen';
import ToursScreen from '../screens/ToursScreen';
import AboutScreen from '../screens/AboutScreen';
import EverydayLifeScreen from '../screens/EverydayLifeScreen';
import VIPScreen from '../screens/VIPScreen';

const GdanskNavigator = createStackNavigator({
  Home: {
    screen:HomeScreen, navigationOptions: {
      header: null,
    }
  },
  History: HistoryScreen,
  Medieval: MedievalScreen,
  Contemporary: ContemporaryScreen,
  Modern: ModernScreen,
  DolneMiasto:TourDolneMiastoScreen,
  Oliwa:TourOliwaScreen,
  Tours:ToursScreen,
  About:AboutScreen,
  EverydayLife:EverydayLifeScreen,
  VIP:VIPScreen,



});

export default createAppContainer(GdanskNavigator);

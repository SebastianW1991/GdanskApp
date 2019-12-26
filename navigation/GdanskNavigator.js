import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import MedievalScreen from '../screens/MedievalScreen';


const GdanskNavigator = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
  Medieval:MedievalScreen
});

export default createAppContainer(GdanskNavigator);
